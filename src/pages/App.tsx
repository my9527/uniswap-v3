import { CustomUserProperties, getBrowser, SharedEventName } from '@uniswap/analytics-events'
import { useWeb3React } from '@web3-react/core'
import { getDeviceId, sendAnalyticsEvent, Trace, user } from 'analytics'
import Loader from 'components/Icons/LoadingSpinner'
import TopLevelModals from 'components/TopLevelModals'
import { useFeatureFlagsIsLoaded } from 'featureFlags'
import { useAtom } from 'jotai'
import { useBag } from 'nft/hooks/useBag'
import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import { shouldDisableNFTRoutesAtom } from 'state/application/atoms'
import { useAddUserToken, useRouterPreference } from 'state/user/hooks'
import { StatsigProvider, StatsigUser } from 'statsig-react'
import styled from 'styled-components'
import { SpinnerSVG } from 'theme/components'
import { useIsDarkMode } from 'theme/components/ThemeToggle'
import { flexRowNoWrap } from 'theme/styles'
import { Z_INDEX } from 'theme/zIndex'
import { STATSIG_DUMMY_KEY } from 'tracing'
import { getEnvName } from 'utils/env'
import { getCurrentPageFromLocation } from 'utils/urlRoutes'
import { getCLS, getFCP, getFID, getLCP, Metric } from 'web-vitals'

import { useAnalyticsReporter } from '../components/analytics'
import ErrorBoundary from '../components/ErrorBoundary'
import { PageTabs, PageTabsMobile } from '../components/NavBar'
import NavBar from '../components/NavBar'
import Polling from '../components/Polling'
import Popups from '../components/Popups'
import DarkModeQueryParamReader from '../theme/components/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import { RedirectDuplicateTokenIds } from './AddLiquidity/redirects'
import { RedirectDuplicateTokenIdsV2 } from './AddLiquidityV2/redirects'
import Landing from './Landing'
import MigrateV2 from './MigrateV2'
import MigrateV2Pair from './MigrateV2/MigrateV2Pair'
import NotFound from './NotFound'
import Pool from './Pool'
import PositionPage from './Pool/PositionPage'
import PoolV2 from './Pool/v2'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import RemoveLiquidityV3 from './RemoveLiquidity/V3'
import Swap from './Swap'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import Tokens from './Tokens'
import XdogeBackgroundImage from "../assets/svg/xdoge_bg.svg"
import XdogeBg from "../assets/images/xdoge-banner.jpeg"
import { isMobile } from 'utils/userAgent'
import { ToastContainer, toast } from 'react-toastify';
  
import 'react-toastify/dist/ReactToastify.css';
import { BASE_XDOGE } from 'constants/tokens'

const TokenDetails = lazy(() => import('./TokenDetails'))
const Vote = lazy(() => import('./Vote'))
// const NftExplore = lazy(() => import('nft/pages/explore'))
// const Collection = lazy(() => import('nft/pages/collection'))
// const Profile = lazy(() => import('nft/pages/profile/profile'))
// const Asset = lazy(() => import('nft/pages/asset/Asset'))

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.navHeight}px 0px 0rem 0px;
  align-items: center;
  flex: 1;
  background-image: url("${XdogeBg}");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: #000;
`

const MobileBottomBar = styled.div`
  z-index: ${Z_INDEX.sticky};
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  justify-content: space-between;
  padding: 4px 8px;
  height: ${({ theme }) => theme.mobileBottomBarHeight}px;
  background: ${({ theme }) => theme.backgroundSurface};
  border-top: 1px solid ${({ theme }) => theme.backgroundOutline};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    display: none;
  }
`

const HeaderWrapper = styled.div<{ transparent?: boolean }>`
  ${flexRowNoWrap};
  background-color: ${({ theme, transparent }) => !transparent && theme.backgroundSurface};
  border-bottom: ${({ theme, transparent }) => !transparent && `1px solid ${theme.backgroundOutline}`};
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.dropdown};
`

// this is the same svg defined in assets/images/blue-loader.svg
// it is defined here because the remote asset may not have had time to load when this file is executing
const LazyLoadSpinner = () => (
  <SpinnerSVG width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92"
      stroke="#2172E5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SpinnerSVG>
)

const RedirectHashToPath = ({ children }: { children: JSX.Element }) => {
  const { hash } = useLocation()
  if (hash) {
    return <Navigate to={hash.replace('#', '')} replace />
  }
  return <Navigate to={"/swap"} replace />
}

const SideMenuWrapper = styled.div`
  // background: rgba(1, 3, 7, 0.60);
  // backdrop-filter: blur(20px);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  // padding-top: 72px;
  // padding-left: 24px;
  padding: 80px 24px;
  background: rgba(18, 19, 22, 0.4);
  backdrop-filter: blur(20px);
`

const SideMenu = ({ onItemClick }: { onItemClick : () => void}) => {
  return (
    <SideMenuWrapper>
      <PageTabsMobile  onItemClick={onItemClick}  />
    </SideMenuWrapper>
  );
}


export default function App() {
  const isLoaded = useFeatureFlagsIsLoaded()
  const [shouldDisableNFTRoutes, setShouldDisableNFTRoutes] = useAtom(shouldDisableNFTRoutesAtom)

  const { pathname } = useLocation()
  const currentPage = getCurrentPageFromLocation(pathname)
  const isDarkMode = useIsDarkMode()
  const [routerPreference] = useRouterPreference()
  const [scrolledState, setScrolledState] = useState(false)

  const [menuStatu, updateMenuStatu] = useState(false);

  useAnalyticsReporter()
  const addToken = useAddUserToken()

  useEffect(() => {
    addToken(BASE_XDOGE);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolledState(false)
  }, [pathname])

  const [searchParams] = useSearchParams()
  useEffect(() => {
    if (searchParams.get('disableNFTs') === 'true') {
      setShouldDisableNFTRoutes(true)
    } else if (searchParams.get('disableNFTs') === 'false') {
      setShouldDisableNFTRoutes(false)
    }
  }, [searchParams, setShouldDisableNFTRoutes])

  useEffect(() => {
    // User properties *must* be set before sending corresponding event properties,
    // so that the event contains the correct and up-to-date user properties.
    user.set(CustomUserProperties.USER_AGENT, navigator.userAgent)
    user.set(CustomUserProperties.BROWSER, getBrowser())
    user.set(CustomUserProperties.SCREEN_RESOLUTION_HEIGHT, window.screen.height)
    user.set(CustomUserProperties.SCREEN_RESOLUTION_WIDTH, window.screen.width)

    // Service Worker analytics
    const isServiceWorkerInstalled = Boolean(window.navigator.serviceWorker?.controller)
    const isServiceWorkerHit = Boolean((window as any).__isDocumentCached)
    const serviceWorkerProperty = isServiceWorkerInstalled ? (isServiceWorkerHit ? 'hit' : 'miss') : 'uninstalled'

    const pageLoadProperties = { service_worker: serviceWorkerProperty }
    sendAnalyticsEvent(SharedEventName.APP_LOADED, pageLoadProperties)
    const sendWebVital =
      (metric: string) =>
      ({ delta }: Metric) =>
        sendAnalyticsEvent(SharedEventName.WEB_VITALS, { ...pageLoadProperties, [metric]: delta })
    getCLS(sendWebVital('cumulative_layout_shift'))
    getFCP(sendWebVital('first_contentful_paint_ms'))
    getFID(sendWebVital('first_input_delay_ms'))
    getLCP(sendWebVital('largest_contentful_paint_ms'))
  }, [])

  useEffect(() => {
    user.set(CustomUserProperties.DARK_MODE, isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    user.set(CustomUserProperties.ROUTER_PREFERENCE, routerPreference)
  }, [routerPreference])

  useEffect(() => {
    const scrollListener = () => {
      setScrolledState(window.scrollY > 0)
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  const isBagExpanded = useBag((state) => state.bagExpanded)
  const isHeaderTransparent = !scrolledState && !isBagExpanded

  const { account } = useWeb3React()
  const statsigUser: StatsigUser = useMemo(
    () => ({
      userID: getDeviceId(),
      customIDs: { address: account ?? '' },
    }),
    [account]
  )

  const toggleMenu = useCallback(() => {
    updateMenuStatu(!menuStatu);
  }, [menuStatu]);

  return (
    <ErrorBoundary>
      <DarkModeQueryParamReader />
      <Trace page={currentPage}>
        <StatsigProvider
          user={statsigUser}
          // TODO: replace with proxy and cycle key
          sdkKey={STATSIG_DUMMY_KEY}
          waitForInitialization={false}
          options={{
            environment: { tier: getEnvName() },
            api: process.env.REACT_APP_STATSIG_PROXY_URL,
          }}
        >
          <HeaderWrapper transparent={isHeaderTransparent}>
            <NavBar blur={isHeaderTransparent} onMenuToggle={toggleMenu} menuStatu={menuStatu} />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Polling />
            <TopLevelModals />
            <Suspense fallback={<Loader />}>
              {isLoaded ? (
                <Routes>
                  <Route
                    path="/"
                    element={
                      // if react-router-dom matches "/" with window.location.hash defined, it means that we're
                      // using BrowserRouter and can safely redirect to a path route
                      <RedirectHashToPath>
                        <Landing />
                      </RedirectHashToPath>
                    }
                  />

                  <Route path="tokens" element={<Tokens />}>
                    <Route path=":chainName" />
                  </Route>
                  <Route path="tokens/:chainName/:tokenAddress" element={<TokenDetails />} />
                  <Route
                    path="vote/*"
                    element={
                      <Suspense fallback={<LazyLoadSpinner />}>
                        <Vote />
                      </Suspense>
                    }
                  />
                  <Route path="create-proposal" element={<Navigate to="/vote/create-proposal" replace />} />
                  <Route path="send" element={<RedirectPathToSwapOnly />} />
                  <Route path="swap" element={<Swap />} />

                  <Route path="pool/v2/find" element={<PoolFinder />} />
                  <Route path="pool/v2" element={<PoolV2 />} />
                  <Route path="pool" element={<Pool />} />
                  <Route path="pool/:tokenId" element={<PositionPage />} />

                  <Route path="pools/v2/find" element={<PoolFinder />} />
                  <Route path="pools/v2" element={<PoolV2 />} />
                  <Route path="pools" element={<Pool />} />
                  <Route path="pools/:tokenId" element={<PositionPage />} />

                  <Route path="add/v2" element={<RedirectDuplicateTokenIdsV2 />}>
                    <Route path=":currencyIdA" />
                    <Route path=":currencyIdA/:currencyIdB" />
                  </Route>
                  <Route path="add" element={<RedirectDuplicateTokenIds />}>
                    {/* this is workaround since react-router-dom v6 doesn't support optional parameters any more */}
                    <Route path=":currencyIdA" />
                    <Route path=":currencyIdA/:currencyIdB" />
                    <Route path=":currencyIdA/:currencyIdB/:feeAmount" />
                  </Route>

                  <Route path="increase" element={<AddLiquidity />}>
                    <Route path=":currencyIdA" />
                    <Route path=":currencyIdA/:currencyIdB" />
                    <Route path=":currencyIdA/:currencyIdB/:feeAmount" />
                    <Route path=":currencyIdA/:currencyIdB/:feeAmount/:tokenId" />
                  </Route>

                  <Route path="remove/v2/:currencyIdA/:currencyIdB" element={<RemoveLiquidity />} />
                  <Route path="remove/:tokenId" element={<RemoveLiquidityV3 />} />

                  <Route path="migrate/v2" element={<MigrateV2 />} />
                  <Route path="migrate/v2/:address" element={<MigrateV2Pair />} />

                  {/* {!shouldDisableNFTRoutes && (
                    <>
                      <Route
                        path="/nfts"
                        element={
                          <Suspense fallback={null}>
                            <NftExplore />
                          </Suspense>
                        }
                      />

                      <Route
                        path="/nfts/asset/:contractAddress/:tokenId"
                        element={
                          <Suspense fallback={null}>
                            <Asset />
                          </Suspense>
                        }
                      />

                      <Route
                        path="/nfts/profile"
                        element={
                          <Suspense fallback={null}>
                            <Profile />
                          </Suspense>
                        }
                      />

                      <Route
                        path="/nfts/collection/:contractAddress"
                        element={
                          <Suspense fallback={null}>
                            <Collection />
                          </Suspense>
                        }
                      />

                      <Route
                        path="/nfts/collection/:contractAddress/activity"
                        element={
                          <Suspense fallback={null}>
                            <Collection />
                          </Suspense>
                        }
                      />
                    </>
                  )} */}

                  <Route path="*" element={<Navigate to="/not-found" replace />} />
                  <Route path="/not-found" element={<NotFound />} />
                </Routes>
              ) : (
                <Loader />
              )}
            </Suspense>
          </BodyWrapper>

          {/* <MobileBottomBar>
            <PageTabs />
          </MobileBottomBar> */}
          {isMobile && menuStatu ? <SideMenu onItemClick={() => updateMenuStatu(false)} /> : null}
        </StatsigProvider>
      </Trace>
      <ToastContainer />
    </ErrorBoundary>
  )
}
