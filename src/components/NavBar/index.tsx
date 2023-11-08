import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import { useAccountDrawer } from 'components/AccountDrawer'
import Web3Status from 'components/Web3Status'
import { chainIdToBackendName } from 'graphql/data/util'
import { useDisableNFTRoutes } from 'hooks/useDisableNFTRoutes'
import { useIsNftPage } from 'hooks/useIsNftPage'
import { useIsPoolsPage } from 'hooks/useIsPoolsPage'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { XdogeLogoIcon } from 'nft/components/icons'
import { useProfilePageState } from 'nft/hooks'
import { ProfilePageStateType } from 'nft/types'
import { ReactNode, useCallback, useState, useRef } from 'react'
import { NavLink, NavLinkProps, useLocation, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
// import { } from "react-toastify"
import { toast} from "react-toastify"
import { addPopup, PopupType } from 'state/application/reducer'
import { useAppDispatch } from 'state/hooks'

import { useIsNavSearchInputVisible } from '../../nft/hooks/useIsNavSearchInputVisible'
import { Bag } from './Bag'
import Blur from './Blur'
import { ChainSelector } from './ChainSelector'
import { MenuDropdown } from './MenuDropdown'
import { SearchBar } from './SearchBar'
import * as styles from './style.css'
import { isMobile } from 'utils/userAgent'
import { MenuCloseIcon, MenuIcon } from 'nft/components/icons'
import XDropdown from 'components/XDropdown'
import { NavDropdown } from './NavDropdown'
import MenuPanel from './MenuPanel'
import Column from 'components/Column'
import { LOCALE_LABEL, SUPPORTED_LOCALES, SupportedLocale, LANGS_MAP, getXDOGELang} from 'constants/locales'
import { LanguageMenuItem } from 'components/AccountDrawer/SettingsMenu'
import { useLingui } from '@lingui/react'
import LocaleSvg from "../../assets/svg/xdoge/locale.svg";
import { useOnClickOutside } from 'hooks/useOnClickOutside'

const Nav = styled.nav`
  padding: ${({ theme }) => `${theme.navVerticalPad}px 24px`};
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;
  background: rgba(18, 19, 22, 0.4);

`

const LocaleDiv = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-left: 16px;
  cursor: pointer;
  background: rgb(56, 57, 60);
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`

const LogoImg = styled.img`
  height: 40px;
  margin-right: 4px;
`

const XdogeTitle = styled.div`
  font-family: OpsOne;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  color: rgb(255, 255, 255);
`

const DropWrapper = styled(Box)`
min-width: 181px!important;
border: 1px solid #b3f1e9!important;
background: #05080b!important;
border-radius: 4px!important;
padding: 12px!important;
font-size: 14px!important;
`

const DotSpan = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: rgb(45, 193, 189);

`


const SwapLangs = [
  'en-US',
  'ru-RU',
  'tr-TR',
  'zh-HK',
  'zh-CN',
  'ko-KR',
  'ja-JP',
  'hi-HI',
  'es-ES',
  'pt-PT',
  'de-DE',
  'fr-FR',
  'vi-VN',
]




const localLocale =  getXDOGELang(localStorage.getItem('XDOGE_LANG') || 'en') || ['en-US'];



const LangItem = styled.div`
  
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: white;
  width: 100%;

`


interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
  dataTestId?: string
  external?: boolean
  onClick?: () => void
  newPage?: boolean
  // menuStatu?: boolean
}

const MenuItem = ({ href, dataTestId, id, isActive, children,  external, onClick, newPage}: MenuItemProps) => {
  if(external) {
    return <a
    // to={{ pathname: href}}
    href={href}

    target={newPage ? '__blank' : '_self'}
  
    onClick={(e) =>{
      e.preventDefault();
      if(newPage) {
        window.open(href);
        return;
      }
      onClick && onClick();
      window.location.href = href;

    }}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ 
        textDecoration: 'none',
        
        paddingLeft: '0',
        paddingRight: '0',
        whiteSpace: 'nowrap',
        width: 'auto',
        // marginRight: '24px',
        ...(isMobile ? { 
          marginBottom: '24px',
          fontSize: "16px",
          padding: 0,
          fontWeight: 500,
          paddingTop: 0,
          marginTop: 0,
        } : {
          marginRight: '24px',
          fontSize: '18px',
        })
      }}
      data-testid={dataTestId}
    >
    {children}
    </a>
  }
  return (
    <NavLink
      to={href}
      onClick={(e) =>{
        onClick && onClick();  
      }}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ 
        textDecoration: 'none',
        // fontSize: '18px',
        paddingLeft: '0',
        paddingRight: '0',
        whiteSpace: 'nowrap',
        width: 'auto',
        marginRight: '24px',
        ...(isMobile ? { 
          marginBottom: '24px',
          fontSize: "16px",
          padding: 0,
          fontWeight: 500,
          paddingTop: 0,
          marginTop: 0,
        } : {
          marginRight: '24px',
          fontSize: '18px',
        })
      }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  )
}


function LangSelector() {
  const [curLang, updateLang] = useState( localLocale[0] );
  const [open, toggleOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, open ? () => { toggleOpen(false) } : undefined)

  // const setLang = useCallback((nextlang: string) => {
  //   updateLang(nextlang);
  //   toggleOpen(false);
  //   location.search = "?lng=" + nextlang;

  // }, []);

  const setLocalLocale = (nextLocal: string) => {
    updateLang(nextLocal);
    //@ts-ignore
    window.localStorage.setItem("XDOGE_LANG", LANGS_MAP[nextLocal] as string);
    window.localStorage.setItem("XDOGE_LANG_SWAP", nextLocal as string);
    toggleOpen(false);
  }


  return ( <Box ref={ref}>
    <LocaleDiv style={{ marginLeft: isMobile ? '0' : '16px' }} onClick={() => toggleOpen(!open)}>
       {/* {LOCALE_LABEL[curLang]} */}
       <img src={LocaleSvg} />
     </LocaleDiv>
    {open && 
    <NavDropdown
    //@ts-ignore
    width={{ sm: '288', md: '292' }}
    padding={'0'} top={{ sm: '64', lg: '64' }} bottom={{ sm: 'unset', lg: 'unset' }}
    left={{ sm: '28', lg: 'unset' }}
    right="0"
    >
      <Column>
        <DropWrapper
          display="flex"
          flexDirection={{ sm: 'column', md: 'column' }}
          flexWrap="wrap"
          alignItems={{ sm: 'center', md: 'flex-start' }}
          paddingX="8"
          width={{ sm: '292' }}
        >
          {/* {langs.map(lng => {
            return (<Row key={lng} cursor="pointer" as="div" style={{ width: '100%' }} className={styles.LangItemCls} >
            <LangItem className='' onClick={() => setLang(lng)}>{lng}</LangItem>
            </Row>);
          })} */}
          {SwapLangs.map((locale) => (
            <LanguageMenuItem handleClick={() => setLocalLocale(locale)} locale={locale} isActive={curLang === locale} key={locale} Ac={<DotSpan/>} />
          ))}
        </DropWrapper>
      </Column>
    </NavDropdown>
    }
    </Box>)

}

export const PageTabs = ({ onItemClick }: { onItemClick? : () => void}) => {
  const { pathname } = useLocation()
  // const addPopup = useAddPopup();
  const dispatch = useAppDispatch();
  // const toast = toast

  return (
    <>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art" isActive={pathname.startsWith('/')}>
        <Trans>Home</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/perps" isActive={pathname.startsWith('/futures')}>
        <Trans>Perps</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/perps/affiliate" isActive={pathname.startsWith('/farm')}>
        <Trans>Affiliate</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/perps/competitions" isActive={pathname.startsWith('/farm')}>
        <Trans>Competitions</Trans>
      </MenuItem>
      
      {/* <MenuItem onClick={onItemClick} external href="https://xdoge.art/#fairlaunch" isActive={pathname.startsWith('/fair-launch')}>
        <Trans>Fair Launch</Trans>
      </MenuItem> */}
      <Box marginY="4" marginRight={"24"}>
        <MenuDropdown />
      </Box>




      {/* <MenuItem onClick={onItemClick} external href="https://xdoge.art/#tokenomics" isActive={pathname.startsWith('/tokenomics')}>
        <Trans>Tokenomics</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#airdrop" isActive={pathname.startsWith('/air-drop')}>
        <Trans>AirDrop</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#howtobuy" isActive={pathname.startsWith('/how-to-buy')}>
        <Trans>How To Buy</Trans>
      </MenuItem> */}
      {/* <MenuItem onClick={() => dispatch(addPopup({
        content: { type: PopupType.Transaction, hash: 'asdfasdfasdf' },
        key:"farm-alet"
      }))} href="#" isActive={pathname.startsWith('/farm')}>
        <Trans>Farm</Trans>
      </MenuItem> */}
       <MenuItem onClick={() => toast("coming soon")} href="#" isActive={pathname.startsWith('/farm')}>
        <Trans>Farm</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} href="#" isActive={pathname.startsWith('/audit')}>
        <Trans>Audit</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external newPage href="https://bridge.base.org/deposit" isActive={pathname.startsWith('/deposit')}>
        <Trans>Bridge</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external newPage href="https://docs.xdoge.art" isActive={pathname.startsWith('/docs')}>
        <Trans>Docs</Trans>
      </MenuItem>

    </>
  )
}

export const PageTabsMobile = ({ onItemClick }: { onItemClick? : () => void}) => {
  const { pathname } = useLocation()

  return (
    <>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art" isActive={pathname.startsWith('/')}>
        <Trans>Home</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/perps" isActive={pathname.startsWith('/futures')}>
        <Trans>Perps</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external  href="https://xdoge.art/affiliate" isActive={pathname.startsWith('/farm')}>
        <Trans>Affiliate</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external  href="https://xdoge.art/competitions" isActive={pathname.startsWith('/farm')}>
        <Trans>Competitions</Trans>
      </MenuItem>
      
      {/* <MenuItem onClick={onItemClick} external href="https://xdoge.art/#fairlaunch" isActive={pathname.startsWith('/fair-launch')}>
        <Trans>Fair Launch</Trans>
      </MenuItem> */}
      <Box marginY="4">
        <MenuPanel />
      </Box>




      {/* <MenuItem onClick={onItemClick} external href="https://xdoge.art/#tokenomics" isActive={pathname.startsWith('/tokenomics')}>
        <Trans>Tokenomics</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#airdrop" isActive={pathname.startsWith('/air-drop')}>
        <Trans>AirDrop</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#howtobuy" isActive={pathname.startsWith('/how-to-buy')}>
        <Trans>How To Buy</Trans>
      </MenuItem> */}
      <MenuItem onClick={() => toast("coming soon")} external href="#" isActive={pathname.startsWith('/farm')}>
        <Trans>Farm</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="#" isActive={pathname.startsWith('/audit')}>
        <Trans>Audit</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external  newPage href="https://bridge.base.org/deposit" isActive={pathname.startsWith('/deposit')}>
        <Trans>Bridge</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external newPage href="https://docs.xdoge.art" isActive={pathname.startsWith('/docs')}>
        <Trans>Docs</Trans>
      </MenuItem>

    </>
  )
}

const Navbar = ({ blur, onMenuToggle, menuStatu }: { blur: boolean, menuStatu: boolean,  onMenuToggle: () => any }) => {
  const isNftPage = useIsNftPage()
  const sellPageState = useProfilePageState((state) => state.state)
  const navigate = useNavigate()
  const isNavSearchInputVisible = useIsNavSearchInputVisible()

  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer()

  const handleUniIconClick = useCallback(() => {
    if (accountDrawerOpen) {
      toggleAccountDrawer()
    }
    navigate({
      pathname: '/',
      search: '?intro=true',
    })
  }, [accountDrawerOpen, navigate, toggleAccountDrawer])

  return (
    <>
      {blur && <Blur />}
      <Nav style={{ height: isMobile ? '56px' : '72px'}}>
        <Box display="flex" height="full" flexWrap="nowrap" justifyContent={"space-between"} alignItems={"center"}>
          <Box className={styles.leftSideContainer}>
            <Box className={styles.logoContainer}>
              {/* <XdogeLogoIcon
                width="134"
                height="40"
                data-testid="xdoge-logo"
                className={styles.logo}
                onClick={handleUniIconClick}
              /> */}
              <LogoImg width={40} height={40} src="https://xdoge.art/assets/logo.svg" />
             {isMobile ? null :  <a href="/">
                <XdogeTitle>XDOGE</XdogeTitle>
              </a>}
            </Box>
            {/* {!isNftPage && (
              <Box display={{ sm: 'flex', lg: 'none' }}>
                <ChainSelector leftAlign={true} />
              </Box>
            )} */}
            {/* <Row display={{ sm: 'none', lg: 'flex' }} flex={"1"} justifyContent={"center"}>
              <PageTabs />
            </Row> */}
          </Box>
          <Box>
            <Row display={{ sm: 'none', lg: 'flex' }} flex={"1"} justifyContent={"center"}>
              {isMobile ? <PageTabsMobile /> :  <PageTabs /> }
            </Row>
          </Box>
          
          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              {/* <Box position="relative" display={isNavSearchInputVisible ? 'none' : { sm: 'flex' }}>
                <SearchBar />
              </Box> */}
              {false && isNftPage && sellPageState !== ProfilePageStateType.LISTING && <Bag />}
              {!isNftPage && (
                <Box display={{ sm: 'none', lg: 'flex' }}>
                {/* <Box display="flex"> */}
                  <ChainSelector />
                </Box>
              )}
              <Web3Status />
              {/* {isMobile ? null : <LocaleDiv>EN</LocaleDiv>}
               */}
              
               
              <LangSelector />
              {
                isMobile ? <span onClick={onMenuToggle}>{menuStatu ? <MenuCloseIcon /> : <MenuIcon />}</span> : null
              }
            </Row>
          </Box>
        </Box>
      </Nav>
    </>
  )
}

export default Navbar
