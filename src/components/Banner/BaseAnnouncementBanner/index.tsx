import { Trans } from '@lingui/macro'
import { InterfaceElementName } from '@uniswap/analytics-events'
import { ChainId } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { ReactComponent as AppleLogo } from 'assets/svg/apple_logo.svg'
import baseLogoUrl from 'assets/svg/base_background_icon.svg'
import { useScreenSize } from 'hooks/useScreenSize'
import { useLocation } from 'react-router-dom'
import { useHideBaseWalletBanner } from 'state/user/hooks'
import { ThemedText } from 'theme'
import { openDownloadApp, openWalletMicrosite } from 'utils/openDownloadApp'
import { isIOS, isMobileSafari } from 'utils/userAgent'

import { BannerButton, BaseBackgroundImage, ButtonRow, PopupContainer, StyledXButton } from './styled'

export default function BaseWalletBanner() {
  const { chainId } = useWeb3React()
  const [hideBaseWalletBanner, toggleHideBaseWalletBanner] = useHideBaseWalletBanner()
  const location = useLocation()
  const isLandingScreen = location.search === '?intro=true' || location.pathname === '/'

  const shouldDisplay = Boolean(!hideBaseWalletBanner && !isLandingScreen && chainId === ChainId.BASE)

  const screenSize = useScreenSize()

  if (isMobileSafari) return null
  return null;

}
