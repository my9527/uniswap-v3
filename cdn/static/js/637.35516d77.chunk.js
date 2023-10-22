"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[637],{24584:function(e,t,n){n.r(t),n.d(t,{BAG_WIDTH:function(){return tu},XXXL_BAG_WIDTH:function(){return tp},default:function(){return tf}});var i,r,o,a,s=n(30575),d=n(45938),l=n(94869),c=n(66196),u=n(62069),p=n(45825),x=n(14099),g=n(34999),m=n(38414),h=n(17174),f=n(60476),I=n(25575),N=n(56823),_=n(2304),C=n(84362),T=n(80343),A=n(65647),y=n(48141),E=n(20216),w=n(25599),j=n(79954);(0,w.ZP)`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var v=n(15627),b=n(79741),O=n(95202),k=n(97901),P=n(79847),R=n(4572),S=n(98841),L=n(20691),z=n(39401),B=n(63505),$=n(83884),D=n(64803),F=n(69574),U=n(58336),H=n(14422),G=n(68044),W=n(57174);function M(e){return{action:z.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function V(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,i]of e)if(!Object.is(i,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(t,n[i])||!Object.is(e[n[i]],t[n[i]]))return!1;return!0}var Z=n(22495),q=n(45239),Y=n(98685),X=n(64127);let K=(0,Y.Ue)()((0,X.mW)(e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e(()=>({inputCurrency:t})),clearInputCurrency:()=>e(()=>({inputCurrency:void 0})),setTokenTradeInput:t=>e(()=>({tokenTradeInput:t}))}),{name:"useTokenInput"}));var J=n(53960);function Q(e){var t;return{inputAmount:{amount:(t={inputAmount:e.inputAmount,outputAmount:e.outputAmount}).inputAmount.quotient.toString(),token:{address:t.inputAmount.currency.isToken?t.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:t.inputAmount.currency.chainId,decimals:t.inputAmount.currency.decimals,isNative:t.inputAmount.currency.isNative}},outputAmount:{amount:t.outputAmount.quotient.toString(),token:{address:t.outputAmount.currency.isToken?t.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:t.outputAmount.currency.chainId,decimals:t.outputAmount.currency.decimals,isNative:t.outputAmount.currency.isNative}},pools:e.route.pools.map(e=>(function(e){let t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}})(e))}}var ee=n(12058),et=n(74969),en=n(8586),ei=n(50958),er=n(59801),eo=n(43108);function ea(e,t,n,i,r){let a={handleClick:()=>void 0,buttonText:(0,s.jsx)(d.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.accentWarning,helperText:void 0,helperTextColor:t.textSecondary,buttonColor:t.accentAction,buttonTextColor:t.accentTextLightPrimary},l={[o.WALLET_NOT_CONNECTED]:{...a,handleClick:n??(()=>void 0),disabled:!1,buttonText:(0,s.jsx)(d.cC,{id:"VHOVEJ"})},[o.NOT_SUPPORTED_CHAIN]:{...a,handleClick:n??(()=>void 0),buttonText:(0,s.jsx)(d.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(d.cC,{id:"IwI0rY"})},[o.INSUFFICIENT_BALANCE]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(d.cC,{id:"cPcTW+"})},[o.ERROR]:{...a,warningText:(0,s.jsx)(d.cC,{id:"fWsBTs"})},[o.IN_WALLET_CONFIRMATION]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"CpEYLQ"})},[o.PROCESSING_TRANSACTION]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"SqYgw0"})},[o.FETCHING_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"YyaKjU"})},[o.INVALID_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"4fL/V7"})},[o.NO_TOKEN_ROUTE_FOUND]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"dLAScn"}),buttonColor:t.backgroundInteractive,buttonTextColor:t.textPrimary,helperText:(0,s.jsx)(d.cC,{id:"1u70J/"})},[o.LOADING_ALLOWANCE]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"Rs3IwW"})},[o.IN_WALLET_ALLOWANCE_APPROVAL]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"4k/lBP"})},[o.PROCESSING_APPROVAL]:{...a,buttonText:(0,s.jsx)(d.cC,{id:"gHko4n"})},[o.REQUIRE_APPROVAL]:{...a,disabled:!1,handleClick:n??(()=>void 0),helperText:(0,s.jsx)(d.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(d.cC,{id:"Z7ZXbT"})},[o.CONFIRM_UPDATED_PRICE]:{...a,handleClick:n??(()=>void 0),disabled:!1,warningTextColor:t.accentAction,warningText:(0,s.jsx)(d.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(d.cC,{id:"4fL/V7"})},[o.PRICE_IMPACT_HIGH]:{...a,handleClick:n??(()=>void 0),disabled:!1,buttonColor:r?r.priceImpactSeverity.color:a.buttonColor,helperText:(0,s.jsx)(d.cC,{id:"NF0esC"}),helperTextColor:r?r.priceImpactSeverity.color:a.helperTextColor,buttonText:(0,s.jsx)(d.cC,{id:"2AEplS"})},[o.PAY]:{...a,handleClick:n??(()=>void 0),disabled:!1,buttonText:(0,s.jsx)(d.cC,{id:"4fL/V7"}),helperText:i?(0,s.jsx)(d.cC,{id:"3BWxOM"}):void 0}};return l[e]}(i=o||(o={}))[i.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",i[i.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",i[i.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",i[i.ERROR=3]="ERROR",i[i.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",i[i.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",i[i.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",i[i.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",i[i.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",i[i.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",i[i.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",i[i.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",i[i.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",i[i.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",i[i.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",i[i.PAY=15]="PAY";let es=ee.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-2ece965-0"})`
  padding: 0px 12px;
`,ed=ee.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-2ece965-1"})`
  border-top: 1px solid ${({theme:e})=>e.backgroundOutline};
  color: ${({theme:e})=>e.textPrimary};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,el=(0,ee.default)(f.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-2ece965-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,ec=(0,ee.default)(_.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-2ece965-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,eu=(0,ee.default)(f.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-2ece965-4"})`
  text-align: end;
  overflow-x: hidden;
`,ep=(0,ee.default)(ei.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-2ece965-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,ex=(0,ee.default)(eo.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-2ece965-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,eg=(0,ee.default)(eo.Tv.Caption).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-2ece965-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,em=(0,ee.default)(_.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-2ece965-8"})`
  gap: 8px;
  cursor: pointer;
`,eh=ee.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-2ece965-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,ef=(0,ee.default)(T.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-2ece965-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,eI=(0,ee.default)(_.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-2ece965-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,eN=(0,ee.default)(_.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-2ece965-12"})`
  align-items: center;
  gap: 8px;
`,e_=(0,ee.default)(eo.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-2ece965-13"})`
  line-height: 20px;
  font-weight: 500;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,eC=({color:e,children:t})=>t?(0,s.jsxs)(ex,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(ep,{}),t]}):null,eT=({children:e,color:t})=>e?(0,s.jsx)(eg,{lineHeight:"16px",$color:t,children:e}):null,eA=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:i,trade:r})=>e?i!==F.qx.LOADING||r?(0,s.jsx)(e_,{color:i===F.qx.LOADING?"textTertiary":"textPrimary",children:(0,H.Nd)(r?.inputAmount.toExact())}):(0,s.jsx)(eo.Tv.BodyPrimary,{color:"textTertiary",lineHeight:"20px",fontWeight:"500",children:(0,s.jsx)(d.cC,{id:"hwuHLB"})}):(0,s.jsxs)(eo.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"500",children:[(0,H.zb)(t.toString()),"\xa0",n?.symbol??"ETH"]}),ey=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:i})=>e?(0,s.jsxs)(eI,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(A.ud,{text:x.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(eN,{children:[(0,s.jsx)(ei.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(eo.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(d.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(eo.Tv.BodySmall,{color:"textTertiary",lineHeight:"20px",children:`${(0,H.Nd)(e?.toExact(),!0)}`})]}):i&&(n===F.qx.INVALID||n===F.qx.NO_ROUTE_FOUND)?null:(0,s.jsx)(ef,{}),eE=[z.s.FETCHING_ROUTE,z.s.CONFIRMING_IN_WALLET,z.s.FETCHING_FINAL_ROUTE,z.s.PROCESSING_TRANSACTION],ew=({setModalIsOpen:e,eventProperties:t})=>{let n=(0,h.LK)(),i=(0,ee.useTheme)(),{account:r,chainId:a,connector:u}=(0,m.useWeb3React)(),x=!!(r&&a),_=function(){let e=(0,S.c)(e=>e.itemsInBag);return(0,B.useMemo)(()=>{let t=e.reduce((e,t)=>t.status!==z.ZJ.UNAVAILABLE?e.add(L.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e,L.O$.from(0));return t},[e])}(),{inputCurrency:T}=K(({inputCurrency:e})=>({inputCurrency:e}),V),A=K(e=>e.setInputCurrency),w=(0,v.U8)("ETH"),Y=(0,P.mM)(r??void 0,T&&T.isToken?T:void 0),{isLocked:X,bagStatus:ei,setBagExpanded:ep,setBagStatus:ex}=(0,S.c)(({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i}),V),[eg,ef]=(0,B.useState)(!1),eI=eE.includes(ei),eN=T??w,e_=!!T&&a===g.ChainId.MAINNET,{universalRouterAddress:ew,universalRouterAddressIsLoading:ej}=function(){let{data:e,loading:t}=(0,j.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){let t=(0,Z.p)(e=>e.state),n=(0,Z.p)(e=>e.setState),i=(0,B.useRef)(t),{setBagStatus:r,setLocked:o}=(0,S.c)(({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n}),V);(0,B.useEffect)(()=>{Z.p.subscribe(e=>i.current=e.state)},[]),(0,B.useEffect)(()=>{i.current===z.c$.Confirming&&r(z.s.PROCESSING_TRANSACTION),(i.current===z.c$.Denied||i.current===z.c$.Invalid)&&(i.current===z.c$.Invalid?r(z.s.WARNING):r(z.s.CONFIRM_REVIEW),n(z.c$.New),o(!1),e(!1))},[o,r,e,n,i.current])}(e);let ev=function(){let{account:e}=(0,m.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isLocked:o,setLocked:a,setItemsInBag:s}=(0,S.c)(({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:r,setLocked:o,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:r,setLocked:o,setItemsInBag:a}),V),d=K(e=>e.tokenTradeInput),l=(0,B.useMemo)(()=>(0,H.G7)(t),[t]),[c]=(0,j.yo)(),u=function(){let{provider:e}=(0,m.useWeb3React)(),t=(0,Z.p)(e=>e.sendTransaction),n=(0,q.J)(e=>e.setTransactionResponse),{setLocked:i,setBagExpanded:r,reset:o}=(0,S.c)(({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n}),V);return(0,B.useCallback)(async(a,s,d=!1)=>{if(!e)return;let l=await t(e.getSigner(),s,a,d);l&&(i(!1),n(l),r({bagExpanded:!1}),o())},[e,o,t,r,i,n])}(),p=(0,B.useCallback)(()=>{i&&r(!1),o||a(!0),n(z.s.FETCHING_ROUTE)},[o,i,a,n,r]);return(0,B.useCallback)(async()=>{p(),c({variables:{senderAddress:e||"",nftTrades:(0,H.hI)(l),tokenTrades:d||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route){n(z.s.ADDING_TO_BAG),a(!1);return}let t=l.filter(e=>e.status!==z.ZJ.UNAVAILABLE).map(e=>e.asset),i=!!d,{route:r,routeResponse:o}=function(e,t){let n=e.route?e.route.map(M):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}(e.nftRoute,i),{newBagItems:c,nextBagStatus:p}=function(e,t,n){let{hasPriceAdjustment:i,updatedAssets:r}=(0,G.$)(e,t),{unchanged:o,priceChanged:a,unavailable:s}=(0,W.Kr)(r),d=r.length>0,l=a.length>0,c=s.length>0,u=[...s.map(e=>({asset:e,status:z.ZJ.UNAVAILABLE})),...a.map(e=>({asset:e,status:z.ZJ.REVIEWING_PRICE_CHANGE})),...o.map(e=>({asset:e,status:z.ZJ.REVIEWED}))],p=d?l||c?l?z.s.IN_REVIEW:z.s.CONFIRM_REVIEW:i&&n?z.s.CONFIRM_QUOTE:z.s.CONFIRMING_IN_WALLET:z.s.ADDING_TO_BAG;return{newBagItems:u,nextBagStatus:p}}(t,r,i);if(s(c),n(p),p===z.s.CONFIRMING_IN_WALLET){u(o,t,i),a(!0);return}a(!1)}})},[e,c,l,u,p,a,n,s,d])}(),eb=(0,B.useMemo)(()=>(0,R.Z)((0,p.formatEther)(_.toString()),w??void 0),[w,_]),{state:eO,trade:ek,maximumAmountIn:eP,allowedSlippage:eR}=function(e,t){let{state:n,trade:i}=(0,D.C)(g.TradeType.EXACT_OUTPUT,t,e??void 0,F.R5.API),r=(0,$.Z)((0,U.pG)(i)?i:void 0),o=(0,B.useMemo)(()=>{let e=i?.maximumAmountIn(r);return e?.currency.isToken?e:void 0},[r,i]);return(0,B.useMemo)(()=>({state:n,trade:i,maximumAmountIn:o,allowedSlippage:r}),[r,o,n,i])}(e_?T:void 0,eb),eS=(0,b.Z)(eP,function(e,t){if(e)return e===g.ChainId.MAINNET?t??(0,E.UNIVERSAL_ROUTER_ADDRESS)(e):(0,y.EC)(e)?(0,E.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(a,ew),F.d7.Classic),eL=eS.state===b.K.LOADING||ej;!function(e,t,n){let i=K(e=>e.setTokenTradeInput),r=(0,U.pG)(e)&&e.routes,o=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,B.useEffect)(()=>{if(!r||!o||!a){i(void 0);return}let s=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:d,v2TokenTradeRouteInputs:l,v3TokenTradeRouteInputs:c}=function(e){let t=[],n=[],i=[],r=e.swaps;for(let e of r)e.route.protocol===J.Protocol.MIXED?t.push(Q(e)):e.route.protocol===J.Protocol.V2?n.push(Q(e)):i.push(Q(e));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:i.length>0?i:void 0}}(e),u={mixedRoutes:d,tradeType:j.NS.ExactOutput,v2Routes:l,v3Routes:c},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;i({permit:p,routes:u,slippageToleranceBasisPoints:s,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})},[t,n,a,o,r,i,e])}(ek,eS,eR);let ez=function(e){let t=(0,ee.useTheme)();return(0,B.useMemo)(()=>{let n=e?(0,et.QW)(e):void 0,i=n?(0,et.BK)(n):void 0,r="error"===i?t.accentCritical:"warning"===i?t.accentWarning:void 0;return n&&i&&r?{priceImpactSeverity:{type:i,color:r},displayPercentage:()=>(function(e){let t=e.lessThan(0)?"+":"",n=Number(e.numerator)/Number(e.denominator)*100;if(n<.005)return"0.00%";let i=parseFloat(e.multiply(-1)?.toFixed(2));return`${t}${i}%`})(n)}:void 0},[t.accentCritical,t.accentWarning,e])}(ek),eB=(0,O.sq)(ek?.inputAmount),e$=(0,O.sq)(eb),eD=e_?eB:e$,{balance:eF}=(0,en.t)(),eU=(0,B.useMemo)(()=>{if(x&&a===g.ChainId.MAINNET){if(T){let e=ek?.inputAmount;if(!Y||!e)return;return!Y.lessThan(e)}return(0,p.parseEther)(eF).gte(_)}},[x,a,T,eF,_,ek?.inputAmount,Y]);(0,B.useEffect)(()=>{ex(z.s.ADDING_TO_BAG)},[T,ex]);let eH=(0,k.o)(),{buttonText:eG,buttonTextColor:eW,disabled:eM,warningText:eV,warningTextColor:eZ,helperText:eq,helperTextColor:eY,handleClick:eX,buttonColor:eK}=(0,B.useMemo)(()=>{if(x&&a!==g.ChainId.MAINNET)return ea(o.NOT_SUPPORTED_CHAIN,i,()=>eH(u,g.ChainId.MAINNET));if(!1===eU)return ea(o.INSUFFICIENT_BALANCE,i);if(ei===z.s.WARNING)return ea(o.ERROR,i);if(!x)return ea(o.WALLET_NOT_CONNECTED,i,()=>{n(),ep({bagExpanded:!1})});if(ei===z.s.FETCHING_FINAL_ROUTE||ei===z.s.CONFIRMING_IN_WALLET)return ea(o.IN_WALLET_CONFIRMATION,i);if(ei===z.s.PROCESSING_TRANSACTION)return ea(o.PROCESSING_TRANSACTION,i);if(e_&&eO!==F.qx.VALID)return eO===F.qx.INVALID?ea(o.INVALID_TOKEN_ROUTE,i):eO===F.qx.NO_ROUTE_FOUND?ea(o.NO_TOKEN_ROUTE_FOUND,i):ea(o.FETCHING_TOKEN_ROUTE,i);let e=eS.state===b.K.REQUIRED,t=()=>e&&eS.approveAndPermit();return eL?ea(o.LOADING_ALLOWANCE,i,t):e?eS.isApprovalPending?ea(o.IN_WALLET_ALLOWANCE_APPROVAL,i,t):eS.isApprovalLoading?ea(o.PROCESSING_APPROVAL,i,t):ea(o.REQUIRE_APPROVAL,i,t):ei===z.s.CONFIRM_QUOTE?ea(o.CONFIRM_UPDATED_PRICE,i,ev):ez&&"error"===ez.priceImpactSeverity.type?ea(o.PRICE_IMPACT_HIGH,i,ev,e_,ez):ea(o.PAY,i,ev,e_)},[x,a,eU,ei,e_,eO,eL,eS,ez,i,ev,eH,u,n,ep]),eJ={usd_value:eD?.toExact(),using_erc20:!!T,...t};return(0,s.jsxs)(es,{children:[(0,s.jsxs)(ed,{children:[(0,s.jsxs)(el,{gap:"xs",children:[(0,s.jsxs)(ec,{children:[(0,s.jsx)(f.ZP,{gap:"xs",children:(0,y.EC)(a)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(eo.Tv.SubHeaderSmall,{children:(0,s.jsx)(d.cC,{id:"JQjhrO"})}),(0,s.jsxs)(em,{onClick:()=>{X||(ef(!0),(0,c._P)(l.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(N.Z,{currency:eN,size:"24px"}),(0,s.jsx)(eo.Tv.HeadlineSmall,{fontWeight:500,lineHeight:"24px",children:eN?.symbol}),(0,s.jsx)(er.Z,{size:20,color:i.textSecondary})]})]})}),(0,s.jsxs)(eu,{gap:"xs",children:[(0,s.jsx)(eo.Tv.SubHeaderSmall,{marginBottom:"4px",children:(0,s.jsx)(d.cC,{id:"72c5Qo"})}),(0,s.jsx)(eA,{usingPayWithAnyToken:e_,totalEthPrice:_,activeCurrency:eN,tradeState:eO,trade:ek})]})]}),(0,s.jsx)(ey,{usdcValue:eD,priceImpact:ez,tradeState:eO,usingPayWithAnyToken:e_})]}),(0,s.jsxs)(c.M8,{events:[l.TM.onClick],name:l.Yz.NFT_BUY_BAG_PAY,element:l.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...eJ},shouldLogImpression:x&&!eM,children:[(0,s.jsx)(eC,{color:eZ,children:eV}),(0,s.jsx)(eT,{color:eY,children:eq}),(0,s.jsxs)(eh,{"data-testid":"nft-buy-button",onClick:eX,disabled:eM||eI,$backgroundColor:eK,$color:eW,children:[eI&&(0,s.jsx)(I.ZP,{size:"20px",stroke:"white"}),eG]})]})]}),(0,s.jsx)(C.Z,{isOpen:eg,onDismiss:()=>ef(!1),onCurrencySelect:e=>{A(e.isNative?void 0:e),e.isToken&&(0,c._P)(l.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:eN??void 0,onlyShowCurrenciesWithBalance:!0})]})};var ej=n(64709),ev=n(9867),eb=n(2994),eO=n(54212),ek=n(47615),eP=n(437);n(74602);var eR=n(84893),eS=n(88850);let eL=(0,ee.keyframes)`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,ez=ee.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-9c2e484f-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${eL} linear;
  animation: ${eL} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accentAction};
`,eB=()=>(0,s.jsx)(ej.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(ez,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var e$=n(62878);let eD=ee.default.div.withConfig({displayName:"media__StyledImageContainer",componentId:"sc-da753e94-0"})`
  position: relative;
  pointer-events: auto;
  &:hover {
    opacity: ${({isDisabled:e,theme:t})=>e?t.opacity.disabled:t.opacity.enabled};
  }
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
`;(0,ee.default)(_.ZP).withConfig({displayName:"media__StyledMediaContainer",componentId:"sc-da753e94-1"})`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,ee.default.img.withConfig({displayName:"media__StyledImage",componentId:"sc-da753e94-2"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};
  will-change: transform;
  object-fit: contain;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
  background: ${({theme:e,imageLoading:t})=>t&&`linear-gradient(270deg, ${e.backgroundOutline} 0%, ${e.backgroundSurface} 100%)`};
`,ee.default.div.withConfig({displayName:"media__PlaybackButton",componentId:"sc-da753e94-3"})`
  display: ${({pauseButton:e})=>e?"block":"none"};
  color: ${({theme:e})=>e.accentAction};
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1;
  margin-left: calc(100% - 50px);
  transform: translateY(-76px);

  @media screen and (max-width: ${eo.j$.sm}px) {
    display: block;
  }

  ${eD}:hover & {
    display: block;
  }
`,ee.default.video.withConfig({displayName:"media__StyledVideo",componentId:"sc-da753e94-4"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
`,(0,ee.default)(_.ZP).withConfig({displayName:"media__StyledInnerMediaContainer",componentId:"sc-da753e94-5"})`
  position: absolute;
  left: 0px;
  top: 0px;
`,ee.default.audio.withConfig({displayName:"media__StyledAudio",componentId:"sc-da753e94-6"})`
  width: 100%;
  height: 100%;
`,ee.default.div.withConfig({displayName:"media__NoContentContainerBackground",componentId:"sc-da753e94-7"})`
  position: relative;
  width: 100%;
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  padding-top: 100%;
  background: ${({theme:e})=>`linear-gradient(90deg, ${e.backgroundSurface} 0%, ${e.backgroundInteractive} 95.83%)`};
`,(0,ee.default)(eo.Tv.BodyPrimary).withConfig({displayName:"media__NoContentText",componentId:"sc-da753e94-8"})`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${e$.O9.gray500};
`;var eF=n(5570);(r=a||(a={}))[r.Image=0]="Image",r[r.Video=1]="Video",r[r.Audio=2]="Audio",ee.default.div.withConfig({displayName:"icons__StyledMarketplaceContainer",componentId:"sc-10a3df04-0"})`
  position: absolute;
  display: flex;
  top: 12px;
  left: 12px;
  height: 32px;
  width: ${({isText:e})=>e?"auto":"32px"};
  padding: ${({isText:e})=>e?"0px 8px":"0px"};
  background: rgba(93, 103, 133, 0.24);
  color: ${({theme:e})=>e.accentTextLightPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  z-index: 2;
`,(0,ee.default)(_.ZP).withConfig({displayName:"icons__ListPriceRowContainer",componentId:"sc-10a3df04-1"})`
  gap: 6px;
  color: ${({theme:e})=>e.accentTextLightPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-shadow: 1px 1px 3px rgba(51, 53, 72, 0.54);
`;let eU=(0,ee.default)(ei.Z).withConfig({displayName:"icons__SuspiciousIcon",componentId:"sc-10a3df04-2"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.accentFailure};
`;(0,ee.default)(_.ZP).withConfig({displayName:"icons__RarityLogoContainer",componentId:"sc-10a3df04-3"})`
  margin-right: 8px;
  width: 16px;
`,(0,ee.default)(eo.Tv.BodySmall).withConfig({displayName:"icons__RarityText",componentId:"sc-10a3df04-4"})`
  display: flex;
`,(0,ee.default)(eo.Tv.Caption).withConfig({displayName:"icons__RarityInfo",componentId:"sc-10a3df04-5"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.textSecondary};
  background: ${({theme:e})=>e.backgroundInteractive};
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: 700 !important;
  line-height: 12px;
  text-align: right;
  cursor: pointer;
`;let eH=(0,ee.default)(_.ZP).withConfig({displayName:"icons__SuspiciousIconContainer",componentId:"sc-10a3df04-6"})`
  flex-shrink: 0;
`,eG=()=>(0,s.jsx)(A.ud,{text:(0,s.jsx)(eo.Tv.BodySmall,{children:(0,s.jsx)(d.cC,{id:"E7U2ed"})}),placement:"top",children:(0,s.jsx)(eH,{children:(0,s.jsx)(eU,{})})});var eW=n(15655),eM=n(11001);n(46728);var eV="_1kuawcb rgw6ezb1 rgw6ezcv rgw6ez7m3 rgw6ez45v rgw6ez45p",eZ="_1kuawc1 rgw6ez2dv rgw6ez2jd rgw6ez2oj rgw6ez281 rgw6ez4ej rgw6ez3tj rgw6ez79z rgw6ez1dv rgw6ez7bj",eq="rgw6ez14d rgw6ez1bd rgw6ez49p rgw6ez7bb",eY="rgw6ezcp rgw6ezav rgw6eze7 rgw6ez7m3 rgw6ez45p rgw6ez45v rgw6ez4ep",eX="_1kuawc7",eK="rgw6ez3xv";let eJ=(0,ee.default)(eS.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-8d05d09e-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,eQ=(0,ee.default)(eS.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-8d05d09e-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,e0=ee.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-8d05d09e-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,e1=({onClick:e})=>(0,s.jsx)(e0,{onClick:e,children:(0,s.jsx)(eF.Xv,{})}),e6=()=>(0,s.jsx)(ej.n,{position:"relative",background:"loadingBackground",className:eq,children:(0,s.jsxs)(ej.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"normal",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),e2=({asset:e,usdPrice:t,removeAsset:n,showRemove:i,grayscale:r,isMobile:o})=>{let[a,d]=(0,B.useState)(!1),[l,c]=(0,B.useState)(!e.smallImageUrl),[u,x]=(0,B.useState)(!1),g=(0,B.useCallback)(()=>x(!0),[]),m=(0,B.useCallback)(()=>x(!1),[]),h=!!(i&&u&&!o),f=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,I=(0,H.zb)(f),N=(0,H.Nd)(t?parseFloat((0,p.formatEther)(f))*t:t,!0),_=(0,B.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n([e])},[e,n]);return(0,s.jsx)(eM.rU,{to:(0,H.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(eb.X2,{className:eZ,onMouseEnter:g,onMouseLeave:m,children:[(0,s.jsxs)(ej.n,{position:"relative",display:"flex",children:[i&&o&&(0,s.jsx)(e1,{onClick:_}),!l&&(0,s.jsx)(ej.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,eR.default)(eq,r&&!u&&eX),onLoad:()=>{d(!0)},onError:()=>{c(!0)},visibility:a?"visible":"hidden"}),!a&&(0,s.jsx)(ej.n,{position:"absolute",className:`${eq} _2kdvfw1`}),l&&(0,s.jsx)(e6,{})]}),(0,s.jsxs)(eb.sg,{overflow:"hidden",width:"full",color:r?"textSecondary":"textPrimary",children:[(0,s.jsxs)(eb.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(ej.n,{className:eV,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(eG,{})]}),(0,s.jsxs)(eb.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ej.n,{className:eY,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(eF.SA,{className:eK})]})]}),h&&(0,s.jsx)(eJ,{onClick:_,emphasis:eS.eI.medium,size:eS.qE.medium,children:"Remove"}),(!h||o)&&(0,s.jsxs)(eb.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(ej.n,{className:"_1kuawc9 rgw6ez3sv rgw6ezb1 rgw6ezd1 rgw6ez3xv",children:[I,"\xa0ETH"]}),(0,s.jsx)(ej.n,{className:eY,children:N})]})]})})},e4=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:i,isMobile:r})=>{let o=L.O$.from(e.updatedPriceInfo?.ETHPrice).gt(L.O$.from(e.priceInfo.ETHPrice)),a=(0,B.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n(e,!1)},[e,n]),d=(0,B.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n(e,!0)},[e,n]);return(0,s.jsxs)(eb.sg,{className:"rgw6ez2p7 rgw6ez28p rgw6ezlj rgw6ezr1 rgw6ez4sj rgw6ez3t7 rgw6ez4ej rgw6ez7ab rgw6ez7jr rgw6ez547 rgw6ez5op rgw6ez1dv rgw6ez79z",borderTopColor:i?"backgroundOutline":"transparent",children:[(0,s.jsxs)(eb.X2,{className:"rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4cd rgw6ez3sv",children:[o?(0,s.jsx)(eF.PH,{}):(0,s.jsx)(eF.HE,{}),(0,s.jsx)(ej.n,{children:`Price ${o?"increased":"decreased"} from ${(0,H.zb)(e.priceInfo.ETHPrice)} ETH`})]}),(0,s.jsx)(ej.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(e2,{asset:e,usdPrice:t,removeAsset:()=>void 0,isMobile:r})}),(0,s.jsxs)(eb.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(eQ,{onClick:a,emphasis:eS.eI.medium,size:eS.qE.small,children:"Remove"}),(0,s.jsx)(eQ,{onClick:d,emphasis:eS.eI.high,size:eS.qE.small,children:"Keep"})]})]})},e5=({assets:e})=>(0,s.jsx)(eb.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:`${32+(e.length-1)*20}px`},children:e.map((e,t)=>(0,s.jsx)(ej.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"backgroundSurface",borderRadius:"4",style:{zIndex:t},className:eX},`${e.address}-${e.tokenId}`))}),e3=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:o})=>{let[a,d]=(0,B.useReducer)(e=>!e,!1),[l,c]=(0,B.useState)(8);if((0,B.useEffect)(()=>{if(!l){i||(n(),r(!1));return}let e=setInterval(()=>{c(l-1)},1e3);return()=>clearInterval(e)},[l,n,i,r]),!e||0===e.length)return null;let u=e.length>1,p=a||!u;return(0,s.jsx)(eb.sg,{className:"rgw6ez2p7 rgw6ez28p rgw6ezlj rgw6ezr1 rgw6ez4sj rgw6ez3tj rgw6ez4ej rgw6ez7ab rgw6ez7jr rgw6ez547 rgw6ez60j rgw6ez5op rgw6ez1dv",children:(0,s.jsxs)(eb.sg,{children:[(0,s.jsxs)(eb.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(i||r(!0),d())},children:[(0,s.jsxs)(eb.X2,{gap:"12",color:"textSecondary",className:eW.Km,children:[!p&&(0,s.jsx)(e5,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(eb.X2,{color:"textSecondary",children:a?(0,s.jsx)(eF.X_,{}):(0,s.jsx)(eF.Xs,{})}),!i&&(0,s.jsxs)(eb.X2,{position:"relative",width:"20",height:"20",color:"textPrimary",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(eB,{}),(0,s.jsx)(eF.Nb,{})]})]}),(0,s.jsx)(eb.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map(e=>(0,s.jsx)(e2,{asset:e,usdPrice:t,removeAsset:()=>void 0,grayscale:!0,isMobile:o},e.id))})]})})};var e7=n(34822);let e9=()=>{let e=(0,ek.cP)(e=>e.bagStatus),t=(0,ek.cP)(e=>e.setBagStatus),n=(0,ek.cP)(e=>e.markAssetAsReviewed),i=(0,ek.cP)(e=>e.didOpenUnavailableAssets),r=(0,ek.cP)(e=>e.setDidOpenUnavailableAssets),o=(0,ek.cP)(e=>e.itemsInBag),a=(0,ek.cP)(e=>e.setItemsInBag),d=(0,ek.cP)(e=>e.removeAssetsFromBag),u=(0,ek.dD)(),p=(0,B.useMemo)(()=>(0,H.G7)(o),[o]),{data:x}=(0,e7.useQuery)(["fetchPrice",{}],()=>(0,H.tw)(),{}),{unchangedAssets:g,priceChangedAssets:m,unavailableAssets:h,availableItems:f}=(0,B.useMemo)(()=>{let e=p.filter(e=>e.status===z.ZJ.ADDED_TO_BAG||e.status===z.ZJ.REVIEWED).map(e=>e.asset),t=p.filter(e=>e.status===z.ZJ.REVIEWING_PRICE_CHANGE).map(e=>e.asset),n=p.filter(e=>e.status===z.ZJ.UNAVAILABLE).map(e=>e.asset),i=p.filter(e=>e.status!==z.ZJ.UNAVAILABLE);return{unchangedAssets:e,priceChangedAssets:t,unavailableAssets:n,availableItems:i}},[p]);return(0,B.useEffect)(()=>{let n=m.length>0,i=p.length>0;n&&(0,c._P)(l.Yz.NFT_BUY_BAG_CHANGED,{usd_value:x,bag_quantity:p,...(0,H.Hj)(m)}),e!==z.s.IN_REVIEW||n||(i?t(z.s.CONFIRM_REVIEW):t(z.s.ADDING_TO_BAG)),e!==z.s.CONFIRM_REVIEW||i||t(z.s.ADDING_TO_BAG)},[e,p,m,t,x]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(eb.sg,{display:m.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,s.jsx)(c.fM,{name:l.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:x,bag_quantity:p.length,...(0,H.Hj)(h)},shouldLogImpression:!0,children:(0,s.jsx)(e3,{assets:h,usdPrice:x,clearUnavailableAssets:()=>a(f),didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:u})}),m.map((e,t)=>(0,s.jsx)(e4,{asset:e,usdPrice:x,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id))]}),(0,s.jsx)(eb.sg,{children:g.slice(0).reverse().map(e=>(0,s.jsx)(e2,{asset:e,usdPrice:x,removeAsset:d,showRemove:!0,isMobile:u},e.id))})]})};var e8=n(62329);let te=(0,ee.default)(eo.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-d761a2a3-0"})`
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,tt=ee.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-d761a2a3-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${e8.c}
`,tn=ee.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-d761a2a3-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accentAction};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ti=ee.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-d761a2a3-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,tr=e=>{let t=e.toString().length;return`${14+6*t}px`},to=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:i})=>{let r=(0,B.useMemo)(()=>tr(e),[e]);return(0,s.jsxs)(ti,{children:[(0,s.jsx)(eo.Tv.HeadlineSmall,{children:i?(0,s.jsx)(d.cC,{id:"xNB0TS"}):(0,s.jsx)(d.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(tn,{sizing:r,children:e}),(0,s.jsx)(te,{onClick:n,children:(0,s.jsx)(d.cC,{id:"yYxB17"})})]}),(0,s.jsx)(tt,{onClick:t,children:(0,s.jsx)(eF.BW,{"data-testid":"nft-bag-close-icon"})})]})};var ta=n(17669);let ts=(0,ee.default)(eb.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-328ca12-0"})`
  gap: 12px;
  margin-top: 68px;
`;var td=()=>{let e=(0,u.e5)();return(0,s.jsxs)(ts,{children:[(0,s.jsx)(eb.M5,{children:e?(0,s.jsx)(eF.JP,{color:ta.Z4.colors.textTertiary}):(0,s.jsx)(eF.Ln,{color:ta.Z4.colors.textTertiary,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(eb.M5,{"data-testid":"nft-no-nfts-selected",className:eW.v4,children:"No NFTs selected"}):(0,s.jsxs)(eb.sg,{gap:"16",children:[(0,s.jsx)(eb.M5,{"data-testid":"nft-empty-bag",className:eW.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(eb.M5,{fontSize:"12",fontWeight:"normal",color:"textSecondary",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},tl=({asset:e})=>{let t=(0,ek.Pc)(e=>e.removeSellAsset),n=(0,ek.dD)(),[i,r]=(0,B.useState)(!1),o=()=>r(!i),a=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(eb.X2,{className:eZ,onMouseEnter:o,onMouseLeave:o,children:[(0,s.jsxs)(ej.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(e1,{onClick:a}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:eq})]}),(0,s.jsxs)(eb.sg,{overflow:"hidden",width:"full",color:"textPrimary",children:[(0,s.jsx)(eb.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(ej.n,{className:eV,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(eb.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ej.n,{className:eY,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(eF.SA,{className:eK})]})]}),i&&!n&&(0,s.jsx)(eJ,{onClick:a,emphasis:eS.eI.medium,size:eS.qE.medium,children:"Remove"})]})};let tc=()=>{let e=(0,ek.Pc)(e=>e.sellAssets);return(0,s.jsx)(eb.sg,{children:e.length?e.map((e,t)=>(0,s.jsx)(tl,{asset:e},t)):null})},tu=320,tp=360,tx=ee.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-1a600dfd-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${tu}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?eP.k.modalOverTooltip:eP.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${tp}px;
  }
`,tg=ee.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-1a600dfd-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,tm=ee.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-1a600dfd-2"})`
  background: ${({theme:e})=>e.accentAction};
  color: ${({theme:e})=>e.accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,th=({top:e,show:t})=>(0,s.jsx)(ej.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"backgroundOutline",borderBottomColor:e?"backgroundOutline":"transparent",opacity:t?"1":"0",transition:"250"});var tf=()=>{let{resetSellAssets:e,sellAssets:t}=(0,ek.Pc)(({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}),V),{setProfilePageState:n}=(0,ek.aO)(({setProfilePageState:e})=>({setProfilePageState:e})),{bagStatus:i,bagIsLocked:r,reset:o,bagExpanded:a,toggleBag:p,setBagExpanded:x}=(0,ek.cP)(e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}),V),{uncheckedItemsInBag:g}=(0,ek.cP)(({itemsInBag:e})=>({uncheckedItemsInBag:e})),m=(0,u.e5)(),h=(0,u._3)(),f=(0,u.GZ)(),I=(0,ek.dD)(),N=(0,B.useMemo)(()=>(0,H.G7)(g),[g]),[_,C]=(0,B.useState)(!1),{userCanScroll:T,scrollRef:A,scrollProgress:y,scrollHandler:E}=(0,ek.uh)(),w=(0,B.useCallback)(()=>{x({bagExpanded:!1,manualClose:!0})},[x]);(0,B.useEffect)(()=>{r&&!_&&C(!0)},[r,_]);let j=N.length>0,v=N.length>0,b=t.length>0,O=!!(!m&&!v&&i===z.s.ADDING_TO_BAG||m&&!b),k=(0,B.useMemo)(()=>({...(0,H.Hj)(N.map(e=>e.asset))}),[N]);return a&&f?(0,s.jsxs)(ev.h,{children:[(0,s.jsxs)(tx,{"data-testid":"nft-bag",raiseZIndex:I||_,isProfilePage:m,children:[(0,s.jsx)(to,{numberOfAssets:m?t.length:N.length,closeBag:w,resetFlow:m?e:o,isProfilePage:m}),O&&(0,s.jsx)(td,{}),(0,s.jsx)(th,{top:!0,show:T&&y>0}),(0,s.jsx)(eb.sg,{ref:A,className:"_1jcz50r1 rgw6ez2ej rgw6ez2k1 rgw6ez1yv rgw6ez7nf",onScroll:E,gap:"12",children:m?(0,s.jsx)(tc,{}):(0,s.jsx)(e9,{})}),j&&!m&&(0,s.jsx)(ew,{setModalIsOpen:C,eventProperties:k}),b&&m&&(0,s.jsx)(tm,{onClick:()=>{p(),n(z.HA.LISTING),(0,c._P)(l.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map(e=>e.asset_contract.address),token_ids:t.map(e=>e.tokenId)})},children:(0,s.jsx)(d.cC,{id:"xGVfLh"})})]}),h?(0,s.jsx)(tg,{onClick:p}):_&&(0,s.jsx)(eO.a,{onClick:()=>r?void 0:C(!1)})]}):null}}}]);
//# sourceMappingURL=637.35516d77.chunk.js.map