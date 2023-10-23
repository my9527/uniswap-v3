"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[278],{21162:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var i,a,o,d,r=n(30575),s=n(20691),p=n(34999),l=n(38414),c=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"ClaimWindowFinished","type":"error"},{"inputs":[],"name":"EndTimeInPast","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"NoWithdrawDuringClaim","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),u=n.p+"static/media/airdopBackground.7f54f314ceca6a012b57.png",m=n(88850),_=n(62329),f=n(25575),h=n(36665),A=n(5570),y=n(634);let x=async e=>{let t=`${{NODE_ENV:"production",PUBLIC_URL:"/cdn",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GIT_COMMIT_HASH:"b5ed86f3dd01dedcc3d77d7a84ba941339c595c8",REACT_APP_AMPLITUDE_PROXY_URL:"https://uni-api.xdoge.art/v1/amplitude-proxy",REACT_APP_AWS_API_ENDPOINT:"https://uni-api.xdoge.art/v1/graphql",REACT_APP_BNB_RPC_URL:"https://old-wispy-arrow.bsc.quiknode.pro/f5c060177236065c1058531a0615ab4f7a34a2fd",REACT_APP_FIREBASE_KEY:"AIzaSyBcZWwTcTJHj_R6ipZcrJkXdq05PuX0Rs0",REACT_APP_FORTMATIC_KEY:"pk_live_F937DF033A1666BF",REACT_APP_GOOGLE_ANALYTICS_ID:"G-KDP9B6W4H8",REACT_APP_INFURA_KEY:"099fc58e0de9451d80b18d7c74caa7c1",REACT_APP_MOONPAY_API:"https://api.moonpay.com",REACT_APP_MOONPAY_LINK:"https://us-central1-uniswap-mobile.cloudfunctions.net/signMoonpayLinkV2?platform=web&env=production",REACT_APP_MOONPAY_PUBLISHABLE_KEY:"pk_live_uQG4BJC4w3cxnqpcSqAfohdBFDTsY6E",REACT_APP_SENTRY_ENABLED:"true",REACT_APP_SENTRY_TRACES_SAMPLE_RATE:"0.00003",REACT_APP_STATSIG_PROXY_URL:"https://uni-api.xdoge.art/v1/statsig-proxy",REACT_APP_AWS_API_REGION:"us-east-2",REACT_APP_BASE_GOERLI_RPC_URL:"https://wiser-compatible-mansion.base-goerli.quiknode.pro/5874f36248e17020a1006149e7f68c63967e1f45/",REACT_APP_BASE_MAINNET_RPC_URL:"https://cool-white-diagram.base-mainnet.quiknode.pro/d8f036f35dfab2c68f32dfa822cd971e7a25a117/",REACT_APP_SENTRY_DSN:"https://a3c62e400b8748b5a8d007150e2f38b7@o1037921.ingest.sentry.io/4504255148851200",REACT_APP_UNISWAP_API_URL:"https://uni-api.xdoge.art/v2",REACT_APP_WALLET_CONNECT_PROJECT_ID:"c6c9bacd35afa3eb9e6cccf6d8464395"}.REACT_APP_TEMP_API_URL}/nft/rewards/${e}?category=GENIE_UNISWAP_USDC_AIRDROP`,n=new AbortController,i=setTimeout(()=>n.abort(),3e3),a=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});clearInterval(i);let o=await a.json();return o};(i=o||(o={})).LOOKS_RARE_NFT_COMMERCE_REWARDS="LOOKS_RARE_NFT_COMMERCE_REWARDS",i.GENIE_UNISWAP_USDC_AIRDROP="GENIE_UNISWAP_USDC_AIRDROP";var C=n(63505),g=n(50958),w=n(56564),T=n(13120),b=n(12058),R=n(43108),P=n(79371);let E=b.default.div.withConfig({displayName:"AirdropModal__ModalWrap",componentId:"sc-abdf66e8-0"})`
  display: flex;
  flex-direction: column;
`,I=b.default.div.withConfig({displayName:"AirdropModal__Body",componentId:"sc-abdf66e8-1"})`
  padding: 28px 20px 20px 20px;
`,N=(0,b.default)(m.UH).withConfig({displayName:"AirdropModal__ClaimButton",componentId:"sc-abdf66e8-2"})`
  width: 100%;
  background-color: ${({theme:e})=>e.accentAction};
  border-radius: 12px;
  color: ${({theme:e})=>e.white};
`,S=b.default.div.withConfig({displayName:"AirdropModal__Line",componentId:"sc-abdf66e8-3"})`
  height: 1px;
  width: 100%;
  background-color: ${({theme:e})=>e.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`,M=b.default.a.withConfig({displayName:"AirdropModal__LinkWrap",componentId:"sc-abdf66e8-4"})`
  text-decoration: none;
  ${_.c}
`,O=b.default.div.withConfig({displayName:"AirdropModal__ImageContainer",componentId:"sc-abdf66e8-5"})`
  position: relative;
  width: 100%;
`,v=b.default.img.withConfig({displayName:"AirdropModal__StyledImage",componentId:"sc-abdf66e8-6"})`
  width: 100%;
  height: 170px;
`,j=b.default.div.withConfig({displayName:"AirdropModal__USDCLabel",componentId:"sc-abdf66e8-7"})`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
  color: white;
`,k=b.default.div.withConfig({displayName:"AirdropModal__TextContainer",componentId:"sc-abdf66e8-8"})`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
`,D=b.default.div.withConfig({displayName:"AirdropModal__RewardsDetailsContainer",componentId:"sc-abdf66e8-9"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,L=b.default.span.withConfig({displayName:"AirdropModal__CurrencyText",componentId:"sc-abdf66e8-10"})`
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.5px;
`,U=b.default.div.withConfig({displayName:"AirdropModal__ClaimContainer",componentId:"sc-abdf66e8-11"})`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 380px;
  padding: 60px 28px;
  padding-bottom: 20px;
`,W=b.default.div.withConfig({displayName:"AirdropModal__SuccessText",componentId:"sc-abdf66e8-12"})`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
`,F=b.default.a.withConfig({displayName:"AirdropModal__EtherscanLink",componentId:"sc-abdf66e8-13"})`
  text-decoration: none;

  ${_.c}
`,B=(0,b.default)(m.UH).withConfig({displayName:"AirdropModal__CloseButton",componentId:"sc-abdf66e8-14"})`
  max-width: 68px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`,G=(0,b.default)(R.Tw).withConfig({displayName:"AirdropModal__SyledCloseIcon",componentId:"sc-abdf66e8-15"})`
  float: right;
  height: 24px;

  ${_.c}
`,$=b.default.div.withConfig({displayName:"AirdropModal__Error",componentId:"sc-abdf66e8-16"})`
  display: flex;
  color: ${({theme:e})=>e.accentCritical};
  font-weight: 500;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 20px;
  font-size: 14px;
  align-items: center;
  gap: 12px;
`,Y=b.default.div.withConfig({displayName:"AirdropModal__ReactLinkWrap",componentId:"sc-abdf66e8-17"})`
  margin-bottom: 40px;
`,H=b.default.span.withConfig({displayName:"AirdropModal__RewardsText",componentId:"sc-abdf66e8-18"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.white};

  &:first-child {
    margin-bottom: 8px;
  }
`,z=b.default.span.withConfig({displayName:"AirdropModal__RewardsInformationText",componentId:"sc-abdf66e8-19"})`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.textPrimary};
  margin-bottom: 28px;
`,K=b.default.span.withConfig({displayName:"AirdropModal__MainHeader",componentId:"sc-abdf66e8-20"})`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.white};
`,q=b.default.div.withConfig({displayName:"AirdropModal__EtherscanLinkWrap",componentId:"sc-abdf66e8-21"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;(a=d||(d={}))[a.tradingRewardAmount=300]="tradingRewardAmount",a[a.holderRewardAmount=1e3]="holderRewardAmount",a[a.combinedAmount=1300]="combinedAmount";var J=()=>{let{account:e,provider:t}=(0,l.useWeb3React)(),[n,i]=(0,C.useState)(),[a,_]=(0,C.useState)(!1),[b,J]=(0,C.useState)(""),[X,Z]=(0,C.useState)(!1),V=(0,y.k)(e=>e.setIsClaimAvailable),[Q,ee]=(0,C.useState)(!1),[et,en]=(0,C.useState)(0),ei=(0,w.Wt)(T.Lk.UNISWAP_NFT_AIRDROP_CLAIM),ea=(0,w.xk)(T.Lk.UNISWAP_NFT_AIRDROP_CLAIM),eo=(0,h.cq)(p.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS,c),ed=()=>{ee(!1),Z(!0),setTimeout(()=>{Z(!1)},5e3)};(0,C.useEffect)(()=>{e&&t&&eo&&(async()=>{try{let{data:n}=await x(e),a=n.find(e=>e?.rewardType===o.GENIE_UNISWAP_USDC_AIRDROP);if(!a)return;let[d]=await eo.connect(t).functions.isClaimed(a?.index);if(a&&!1===d){let e=s.O$.from(a.amount).div(1e6);i(a),en(e.toNumber()),V(!0)}}catch(e){ed()}})()},[e,eo,t,V]);let er=async()=>{try{if(eo&&n&&n.amount&&n.merkleProof&&t){ee(!0);let i=await eo.connect(t?.getSigner()).functions.claim(n.index,e,n?.amount,n?.merkleProof);await i.wait(),J(i.hash),ee(!1),_(!0),V(!1)}}catch(e){ee(!1),ed()}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(P.Z,{hideBorder:!0,isOpen:ei,onDismiss:ea,maxHeight:90,maxWidth:400,children:(0,r.jsx)(E,{children:a?(0,r.jsxs)(U,{children:[(0,r.jsx)(R.Tv.HeadlineSmall,{children:"Congratulations!"}),(0,r.jsxs)(W,{children:["You have successfully claimed ",et," USDC. Thank you for supporting Genie.xyz."]}),(0,r.jsx)(F,{href:`https://etherscan.io/tx/${b}`,target:"_blank",children:(0,r.jsx)(R.Tv.Link,{children:(0,r.jsxs)(q,{children:[(0,r.jsx)("span",{children:"Etherscan"}),(0,r.jsx)(A.XC,{})]})})}),(0,r.jsx)(B,{size:m.qE.medium,emphasis:m.eI.medium,onClick:ea,children:"Close"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(O,{children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(G,{onClick:ea,stroke:"white"}),(0,r.jsx)(K,{children:"Uniswap NFT Airdrop"}),(0,r.jsxs)(j,{children:[et," USDC"]}),(0,r.jsx)(S,{}),(0,r.jsxs)(D,{children:[(0,r.jsx)(H,{children:"Trading rewards"})," ",(0,r.jsx)(L,{children:et===d.tradingRewardAmount||et===d.combinedAmount?`${d.tradingRewardAmount} USDC`:"0"})]}),(0,r.jsxs)(D,{children:[(0,r.jsx)(H,{children:"Genie NFT holder rewards"})," ",(0,r.jsx)(L,{children:et!==d.tradingRewardAmount?`${d.holderRewardAmount} USDC`:"0"})]})]}),(0,r.jsx)(v,{src:u})]}),(0,r.jsxs)(I,{children:[(0,r.jsxs)(z,{children:["As a long time supporter of Genie, you’ve been awarded ",et," USDC tokens."]}),(0,r.jsx)(Y,{children:(0,r.jsx)(M,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",target:"_blank",children:(0,r.jsx)(R.Tv.Link,{children:"Read more about Uniswap NFT."})})}),X&&(0,r.jsxs)($,{children:[(0,r.jsx)(g.Z,{}),"Claim USDC failed. Please try again later"]}),(0,r.jsxs)(N,{onClick:er,size:m.qE.medium,emphasis:m.eI.medium,disabled:Q,children:[Q&&(0,r.jsx)(f.ZP,{stroke:"white"}),(0,r.jsxs)("span",{children:["Claim",Q&&"ing"," USDC"]})]})]})]})})})})}}}]);
//# sourceMappingURL=278.0778d0b9.chunk.js.map