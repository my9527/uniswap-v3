
import { Trans } from '@lingui/macro'
import { useLocation, useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { isMobile } from 'utils/userAgent'

const TitleEle = styled.h1`
  color: var(--m-3-sys-dark-on-surface, #FFF);
  text-align: center;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 122.222% */
  margin-bottom: 36px;
  white-space: nowrap;
`

const SwitchBtnsWrapper = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid white;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 4px;
  width: 300px;

`
const SwitchBtnOuter = styled.div`
  display: flex;
  justify-content: center;
`

const SwitchBtn = styled.h2`
    display: flex;
    width: 150px;
    padding: 10px 12px;
    justify-content: center;
    cursor: pointer;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    &.active {
      background: white;
      color: #000000;
    }
    
`


const ExtraInfoP = styled.p`
    color: #FFF;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    letter-spacing: 0.2px;
    margin: 0;
`





export default ({ children }: { children: React.ReactNode }) => {

  const navigate = useNavigate();
  const loc = useLocation();



  const title = (
    <TitleEle style={{ whiteSpace: isMobile ? 'normal' : 'nowrap'}}>
      <Trans>XDOGE Swap-Share liquidity with Uniswap!</Trans>
    </TitleEle>
  );
  const switchBtns = (
    <SwitchBtnOuter>
      <SwitchBtnsWrapper>
      <SwitchBtn className={loc.pathname === '/swap' ? 'active' : ''} onClick={() => navigate("/swap") } >Swap</SwitchBtn>
      <SwitchBtn className={loc.pathname === '/pools' ? 'active' : ''} onClick={() => navigate("/pools")}>Pools</SwitchBtn>
    </SwitchBtnsWrapper>
    </SwitchBtnOuter>
  );

  const extraInfo = (
    <div style={{ 
      // whiteSpace: "nowrap",
      width: "100%",
      border: '1px solid rgba(114, 114, 114, 1)',
      padding: '16px',
      borderRadius: '4px',
      marginTop: '16px'
    }}>
      <ExtraInfoP>🚀 Embrace seamless trading with the power of blockchain technology.</ExtraInfoP>
      <ExtraInfoP>💹 Experience lightning-fast transactions and ultra-low fees, ensuring a smooth trading journey for every user.</ExtraInfoP>
      <ExtraInfoP>🔥 Enjoy enhanced liquidity and a wide range of supported tokens, making it your go-to platform for all crypto needs.</ExtraInfoP>
      <ExtraInfoP>💼 With robust security measures, rest assured that your assets are safe and secure.</ExtraInfoP>
      <ExtraInfoP>💪 Join the community-driven revolution, where every user's voice matters.</ExtraInfoP>
      <ExtraInfoP>🤝 Unleash the full potential of DeFi with XDOGE V3 - your gateway to the future of decentralized trading.</ExtraInfoP>
    </div>
  );

  return (
    <>
    {title}
    {switchBtns}
    {children}
    {extraInfo}
    </>
  );

}