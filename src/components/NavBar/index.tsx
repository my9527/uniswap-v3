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
import { ReactNode, useCallback } from 'react'
import { NavLink, NavLinkProps, useLocation, useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

import { useIsNavSearchInputVisible } from '../../nft/hooks/useIsNavSearchInputVisible'
import { Bag } from './Bag'
import Blur from './Blur'
import { ChainSelector } from './ChainSelector'
import { MenuDropdown } from './MenuDropdown'
import { SearchBar } from './SearchBar'
import * as styles from './style.css'
import { isMobile } from 'utils/userAgent'
import { MenuCloseIcon, MenuIcon } from 'nft/components/icons'

const Nav = styled.nav`
  padding: ${({ theme }) => `${theme.navVerticalPad}px 12px`};
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;
  background: rgba(18, 19, 22, 0.4);

`

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
  dataTestId?: string
  external?: boolean
  onClick?: () => void
  // menuStatu?: boolean
}

const MenuItem = ({ href, dataTestId, id, isActive, children,  external, onClick}: MenuItemProps) => {
  if(external) {
    return <a
    // to={{ pathname: href}}
    href={href}
  
    onClick={(e) =>{
      e.preventDefault();
      onClick && onClick();
      window.location.href = href;

    }}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ 
        textDecoration: 'none',
        fontSize: '18px',
        paddingLeft: '0',
        paddingRight: '0',
        whiteSpace: 'nowrap',
        width: 'auto',
        marginRight: '24px'
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
        fontSize: '18px',
        paddingLeft: '0',
        paddingRight: '0',
        whiteSpace: 'nowrap',
        width: 'auto',
        marginRight: '24px'
      }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  )
}

export const PageTabs = ({ onItemClick }: { onItemClick? : () => void}) => {
  const { pathname } = useLocation()
  const { chainId: connectedChainId } = useWeb3React()
  const chainName = chainIdToBackendName(connectedChainId)

  const isPoolActive = useIsPoolsPage()
  const isNftPage = useIsNftPage()

  const shouldDisableNFTRoutes = useDisableNFTRoutes()

  return (
    <>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art" isActive={pathname.startsWith('/')}>
        <Trans>Home</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://futures.xdoge.art" isActive={pathname.startsWith('/futures')}>
        <Trans>Futures</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} href="/farm" isActive={pathname.startsWith('/farm')}>
        <Trans>Farm</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#fairlaunch" isActive={pathname.startsWith('/fair-launch')}>
        <Trans>Fair Launch</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#tokenomics" isActive={pathname.startsWith('/tokenomics')}>
        <Trans>Tokenomics</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#airdrop" isActive={pathname.startsWith('/air-drop')}>
        <Trans>AirDrop</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://xdoge.art/#howtobuy" isActive={pathname.startsWith('/how-to-buy')}>
        <Trans>How To Buy</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} href="#" isActive={pathname.startsWith('/audit')}>
        <Trans>Audit</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://coinbase.com/faucets/base-ethereum-goerli-faucet" isActive={pathname.startsWith('/docs')}>
        <Trans>Bridge</Trans>
      </MenuItem>
      <MenuItem onClick={onItemClick} external href="https://docs.xdoge.art" isActive={pathname.startsWith('/docs')}>
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
      <Nav>
        <Box display="flex" height="full" flexWrap="nowrap">
          <Box className={styles.leftSideContainer}>
            <Box className={styles.logoContainer}>
              <XdogeLogoIcon
                width="134"
                height="40"
                data-testid="xdoge-logo"
                className={styles.logo}
                onClick={handleUniIconClick}
              />
            </Box>
            {/* {!isNftPage && (
              <Box display={{ sm: 'flex', lg: 'none' }}>
                <ChainSelector leftAlign={true} />
              </Box>
            )} */}
            <Row display={{ sm: 'none', lg: 'flex' }} flex={"1"} justifyContent={"center"}>
              <PageTabs />
            </Row>
          </Box>
          
          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              {/* <Box position="relative" display={isNavSearchInputVisible ? 'none' : { sm: 'flex' }}>
                <SearchBar />
              </Box> */}
              {false && isNftPage && sellPageState !== ProfilePageStateType.LISTING && <Bag />}
              {!isNftPage && (
                // <Box display={{ sm: 'none', lg: 'flex' }}>
                <Box display="flex">
                  <ChainSelector />
                </Box>
              )}
              <Web3Status />
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
