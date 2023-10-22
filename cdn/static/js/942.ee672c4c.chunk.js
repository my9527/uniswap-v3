"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[942],{6942:function(e,t,n){n.r(t),n.d(t,{default:function(){return t4}});var a,i,s,o,r,d,l,c,p=n(30575),u=n(68099),m=n(47997),h=n(45938),x=n(94869),y=n(38414),f=n(66196),g=n(88850),j=n(42246),b=n(60476),C=n(67261),v=n.n(C),w=n(4572),T=n(55494),E=n(63505),I=n(61525),N=n(11001),D=n(68e3),A=n(13648),S=n(14099),_=n(14014),k=n(80638),P=n(34999),M=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');let R={[P.ChainId.MAINNET]:{[P.UNI_ADDRESSES[P.ChainId.MAINNET]]:"UNI",[P.TIMELOCK_ADDRESSES[P.ChainId.MAINNET]]:"Timelock",[P.GOVERNANCE_ALPHA_V0_ADDRESSES[P.ChainId.MAINNET]]:"Governance (V0)",[P.GOVERNANCE_ALPHA_V1_ADDRESSES[P.ChainId.MAINNET]]:"Governance (V1)",[P.GOVERNANCE_BRAVO_ADDRESSES[P.ChainId.MAINNET]]:"Governance","0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e":"ENS Registry","0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41":"ENS Public Resolver","0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA":"Franchiser Factory"}},W={1:12},L=`# Uniswap Grants Program v0.1

*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*

## Summary:

**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small—sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)—but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members —1 lead and 5 reviewers—to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal—a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.

**Purpose:**

**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.

**Quarterly Budget:**

* Max quarterly budget of up to $750k
* Budget and caps to be assessed every six months

**Grant Allocation Committee:**

* Of 6 committee members: 1 lead and 5 reviewers
* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance
* Committee functions as a 4 of 5 multi-sig

**Committee Members**

While the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**

Starting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.

**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.

**The other 5 committee members should be thought of as “reviewers” — UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.

**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)
*Ecosystem Support Program at the Ethereum Foundation*

1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))
*Founder and Investor at Variant Fund (holds UNI)*

2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)
*Risk Analyst at MakerDAO*

3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)
*Founder and CEO of Compound Finance*

4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)
*Founder of Synthetix*

5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)
*Growth Lead, Uniswap (Company)*

## Methodology

**1.1 Budget**

This proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).

The UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).

Taking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1’s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.

**1.2 Committee Compensation**

Operating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.

**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee’s commitment to the community, hours and duties will be logged publicly and transparently .

**2.1 Priorities**

Initially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.

![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)

With the initial priorities in mind, some effective measures for quick successes might look like:

* Total number of projects funded
* Quarterly increase in applications
* Project engagement post-event/funding
* Overall community engagement/sentiment

**2.2 Timeline**

In keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.

**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**

**Rolling Wave 1 & 2 Applications**

* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding

* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective

**Wave 3 & Beyond**

* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.

* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements

## Conclusion:

**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.

**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**

If this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital—ideally with different specializations.
`;var U=n(36665),V=n(61646),O=n(54479),z=n(58025),$=n(92796),F=n(63498),G=n(71768),B=n(4894);(a=r||(r={}))[a.INVALID=0]="INVALID",a[a.LOADING=1]="LOADING",a[a.SYNCING=2]="SYNCING",a[a.ERROR=3]="ERROR",a[a.SYNCED=4]="SYNCED";var H=n(97905),Z=n(843),q=n(50614);function Y(){return(0,U.cq)(P.GOVERNANCE_BRAVO_ADDRESSES,M,!0)}function K(){let{chainId:e}=(0,y.useWeb3React)(),t=(0,E.useMemo)(()=>e?z.yg[e]?.address:void 0,[e]);return(0,U.cq)(t,k.Mt,!0)}(i=d||(d={}))[i.UNDETERMINED=-1]="UNDETERMINED",i[i.PENDING=0]="PENDING",i[i.ACTIVE=1]="ACTIVE",i[i.CANCELED=2]="CANCELED",i[i.DEFEATED=3]="DEFEATED",i[i.SUCCEEDED=4]="SUCCEEDED",i[i.QUEUED=5]="QUEUED",i[i.EXPIRED=6]="EXPIRED",i[i.EXECUTED=7]="EXECUTED";let Q=new D.vU(_.Mt);function X(e){let{result:t}=(0,V.Wk)(e,"proposalCount");return t?.[0]?.toNumber()}let J={"0x5ef2c7f0":"setSubnodeRecord(bytes32,bytes32,address,address,uint64)","0x10f13a8c":"setText(bytes32,string,string)","0xb4720477":"sendMessageToChild(address,bytes)","0xa9059cbb":"transfer(address,uint256)","0x095ea7b3":"approve(address,uint256)","0x7b1837de":"fund(address,uint256)"};function ee(e,t,n,a){let i=(0,E.useMemo)(()=>{let t=e?.filters?.ProposalCreated();if(t)return{...t,fromBlock:n,toBlock:a}},[e,n,a]),s=function(e){let{chainId:t}=(0,y.useWeb3React)(),n=(0,$.ZP)(),a=(0,F.C)(e=>e.logs),i=(0,F.T)();return(0,E.useEffect)(()=>{if(e&&t)return i((0,G.NH)({chainId:t,filter:e})),()=>{i((0,G.ys)({chainId:t,filter:e}))}},[t,i,e]),(0,E.useMemo)(()=>{if(!t||!e||!n)return{logs:void 0,state:r.INVALID};let i=a[t]?.[B.QM(e)],s=i?.results;return s?s.error?{state:r.ERROR,logs:void 0}:{state:(0,B.x5)(e,n)?r.SYNCED:s.blockNumber>=n?r.SYNCED:r.SYNCING,logs:s.logs}:{state:r.LOADING,logs:void 0}},[n,t,e,a])}(i);return(0,E.useMemo)(()=>s?.logs?.map(e=>{let t=Q.parseLog(e).args;return t})?.filter(e=>t.flat().some(t=>t===e.id.toNumber()))?.map(e=>{let t;let n=parseInt(e.startBlock?.toString());try{t=e.description}catch(a){let e=A.te.replace;if(13059344===n){let t=[226,128,152].toString(),n=[226,128,166].toString();e=(e,a,i,s)=>{if(e===A.Uw.UNEXPECTED_CONTINUE){let e=[i[a],i[a+1],i[a+2]].reverse().toString();if(e===t)return s.push(8216),2;if(e===n)return s.push(8230),2}return A.te.replace(e,a,i,s)}}t=JSON.parse(A.ZN(a.error.value,e))||""}return(13059344===n||13551293===n||14732457===n)&&(t=t.replace(/ {2}/g,"\n").replace(/\d\. /g,"\n$&")),{description:t,details:e.targets.map((t,n)=>{let a,i;let s=e.signatures[n],o=e.calldatas[n];if(""===s){let e=o.slice(0,10),t=J[e]??"UNKNOWN()";if(!t)throw Error("Missing four byte sig");[a,i]=t.substring(0,t.length-1).split("("),o=`0x${o.slice(10)}`}else[a,i]=s.substring(0,s.length-1).split("(");let r=u.$.decode(i.split(","),o);return{target:t,functionSig:a,callData:r.join(", ")}})}}),[t,s])}let et=[[1],[2],[3],[4]],en=[[1],[2],[3]];function ea(e,t=0){return"number"==typeof e?Array(e-t).fill(0).map((e,n)=>[n+1+t]):[]}function ei(){let{chainId:e}=(0,y.useWeb3React)(),t=(0,U.cq)(P.GOVERNANCE_ALPHA_V0_ADDRESSES,_.Mt,!1),n=(0,U.cq)(P.GOVERNANCE_ALPHA_V1_ADDRESSES,_.Mt,!1),a=Y(),i=X(t),s=X(n),o=X(a),r=(0,E.useMemo)(()=>e===P.ChainId.MAINNET?et:ea(i),[e,i]),l=(0,E.useMemo)(()=>e===P.ChainId.MAINNET?en:ea(s),[e,s]),c=(0,E.useMemo)(()=>ea(o,8),[o]),p=(0,V.es)(t,"proposals",r),u=(0,V.es)(n,"proposals",l),m=(0,V.es)(a,"proposals",c),h=(0,V.es)(t,"state",r),x=(0,V.es)(n,"state",l),f=(0,V.es)(a,"state",c),g=ee(t,r,11042287,12563484),j=ee(n,l,12686656,13059343),b=ee(a,c,13538153),C=(0,E.useMemo)(()=>e?z.yg[e]:void 0,[e]);return(0,E.useMemo)(()=>{let e=[...p,...u,...m],i=[...h,...x,...f],s=[...g??[],...j??[],...b??[]];return!C||e.some(e=>e.loading)||i.some(e=>e.loading)||t&&!g||n&&!j||a&&!b?{data:[],loading:!0}:{data:e.map((e,t)=>{let n=parseInt(e?.result?.startBlock?.toString()),a=s[t]?.description??"";11473815===n&&(a=L);let o=a?.split(/#+\s|\n/g)[1];return 13786993===n&&(o="Should Uniswap v3 be deployed to Polygon?"),{id:e?.result?.id.toString(),title:o??S.ag._({id:"wja8aL"}),description:a??S.ag._({id:"ry0RbG"}),proposer:e?.result?.proposer,status:i[t]?.result?.[0]??d.UNDETERMINED,forCount:P.CurrencyAmount.fromRawAmount(C,e?.result?.forVotes),againstCount:P.CurrencyAmount.fromRawAmount(C,e?.result?.againstVotes),startBlock:n,endBlock:parseInt(e?.result?.endBlock?.toString()),eta:e?.result?.eta,details:s[t]?.details,governorIndex:t>=p.length+u.length?2:t>=p.length?1:0}}),loading:!1}},[g,j,b,t,n,a,h,x,f,p,u,m,C])}function es(e,t){let{data:n}=ei();return n.filter(t=>t.governorIndex===e)?.find(e=>e.id===t)}function eo(){let{account:e}=(0,y.useWeb3React)(),t=K(),{result:n}=(0,V.Wk)(t,"delegates",[e??void 0]);return n?.[0]??void 0}function er(){let{account:e,chainId:t}=(0,y.useWeb3React)(),n=K(),{result:a,loading:i}=(0,V.Wk)(n,"getCurrentVotes",[e??void 0]);return(0,E.useMemo)(()=>{let e=t?z.yg[t]:void 0;return{loading:i,votes:e&&a?P.CurrencyAmount.fromRawAmount(e,a?.[0]):void 0}},[t,i,a])}var ed=n(12058),el=n(43108),ec=n(72714),ep=n(73440),eu=n(26989),em=n(79371),eh=n(2304),ex=n(77856),ey=n(80358);(s=l||(l={})).TRANSFER_TOKEN="Transfer Token",s.APPROVE_TOKEN="Approve Token";let ef=(0,ed.default)(b.ZP).withConfig({displayName:"ProposalActionSelector__ContentWrapper",componentId:"sc-ca2f0c2a-0"})`
  width: 100%;
  flex: 1 1;
  position: relative;
`,eg=ed.default.div.withConfig({displayName:"ProposalActionSelector__ActionSelectorHeader",componentId:"sc-ca2f0c2a-1"})`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.textSecondary};
`,ej=(0,ed.default)(g.Kb).withConfig({displayName:"ProposalActionSelector__ActionDropdown",componentId:"sc-ca2f0c2a-2"})`
  padding: 0px;
  background-color: transparent;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`,eb=ed.default.div.withConfig({displayName:"ProposalActionSelector__ProposalActionSelectorFlex",componentId:"sc-ca2f0c2a-3"})`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.backgroundInteractive};
  background-color: ${({theme:e})=>e.deprecated_bg1};
`,eC=ed.default.div.withConfig({displayName:"ProposalActionSelector__ProposalActionSelectorContainer",componentId:"sc-ca2f0c2a-4"})`
  flex: 1;
  padding: 1rem;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 10px;
`,ev=({className:e,onClick:t,proposalAction:n})=>(0,p.jsx)(eb,{children:(0,p.jsxs)(eC,{className:e,children:[(0,p.jsx)(eg,{children:(0,p.jsx)(h.cC,{id:"UCrCDu"})}),(0,p.jsx)(ej,{onClick:t,children:n})]})});function ew({isOpen:e,onDismiss:t,onProposalActionSelect:n}){let a=(0,E.useCallback)(e=>{n(e),t()},[t,n]);return(0,p.jsx)(em.Z,{isOpen:e,onDismiss:t,children:(0,p.jsxs)(ef,{children:[(0,p.jsx)(ex.AC,{gap:"16px",children:(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)(ey.xv,{fontWeight:500,fontSize:16,children:(0,p.jsx)(h.cC,{id:"pnOrm4"})}),(0,p.jsx)(el.Tw,{onClick:t})]})}),(0,p.jsx)(ex.Z0,{}),(0,p.jsx)(ex.sN,{onClick:()=>a(l.TRANSFER_TOKEN),children:(0,p.jsx)(b.ZP,{children:(0,p.jsx)(ey.xv,{fontWeight:500,children:(0,p.jsx)(h.cC,{id:"dXFgcm"})})})}),(0,p.jsx)(ex.sN,{onClick:()=>a(l.APPROVE_TOKEN),children:(0,p.jsx)(b.ZP,{children:(0,p.jsx)(ey.xv,{fontWeight:500,children:(0,p.jsx)(h.cC,{id:"x/xiv4"})})})})]})})}(o=c||(c={}))[o.ADDRESS=0]="ADDRESS",o[o.CURRENCY=1]="CURRENCY";let eT=ed.default.div.withConfig({displayName:"ProposalActionDetail__ProposalActionDetailContainer",componentId:"sc-8b4b434a-0"})`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
`,eE=({className:e,proposalAction:t,currency:n,amount:a,toAddress:i,onCurrencySelect:s,onAmountInput:o,onToAddressInput:r})=>(0,p.jsx)(eT,{className:e,children:({[l.TRANSFER_TOKEN]:[{type:c.ADDRESS,label:(0,p.jsx)(h.cC,{id:"/jQctM"})},{type:c.CURRENCY}],[l.APPROVE_TOKEN]:[{type:c.ADDRESS,label:(0,p.jsx)(h.cC,{id:"/jQctM"})},{type:c.CURRENCY}]})[t].map((e,t)=>e.type===c.ADDRESS?(0,p.jsx)(ep.Z,{label:e.label,value:i,onChange:r},t):e.type===c.CURRENCY?(0,p.jsx)(eu.Z,{value:a,currency:n,onUserInput:e=>o(e),onCurrencySelect:e=>s(e),showMaxButton:!1,showCommonBases:!1,showCurrencyAmount:!1,disableNonToken:!0,hideBalance:!0,id:"currency-input"},t):null)}),eI=ed.default.input.withConfig({displayName:"TextInput__Input",componentId:"sc-7d2452e6-0"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.deprecated_bg1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.accentFailure:t.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.deprecated_text4};
  }
`,eN=ed.default.textarea.withConfig({displayName:"TextInput__TextAreaInput",componentId:"sc-7d2452e6-1"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  resize: none;
  background-color: ${({theme:e})=>e.deprecated_bg1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:t})=>e?t.accentFailure:t.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  line-height: 1.2;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.deprecated_text4};
  }
`,eD=(0,E.memo)(({className:e,value:t,onUserInput:n,placeholder:a,fontSize:i})=>{let s=(0,E.useRef)(document.createElement("textarea")),o=(0,E.useCallback)(e=>{s.current.style.height="auto",s.current.style.height=s.current.scrollHeight+"px",n(e.target.value)},[n]);return(0,p.jsx)(eN,{style:{height:"auto",minHeight:"500px"},className:e,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:o,value:t,fontSize:i,ref:s})});eD.displayName="ResizingTextArea";let eA=(0,ed.default)(ey.xv).withConfig({displayName:"ProposalEditor__ProposalEditorHeader",componentId:"sc-b90b5301-0"})`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.textSecondary};
`,eS=(0,E.memo)((0,ed.default)(({className:e,value:t,onUserInput:n,placeholder:a,fontSize:i})=>{let s=(0,E.useCallback)(e=>{n(e.target.value)},[n]);return(0,p.jsx)("div",{className:e,children:(0,p.jsx)(eI,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:a||"",onChange:s,value:t,fontSize:i})})}).withConfig({displayName:"ProposalEditor__ProposalTitle",componentId:"sc-b90b5301-1"})`
  margin-top: 10.5px;
  margin-bottom: 7.5px;
`),e_=ed.default.div.withConfig({displayName:"ProposalEditor__ProposalEditorContainer",componentId:"sc-b90b5301-2"})`
  margin-top: 10px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.backgroundInteractive};
  background-color: ${({theme:e})=>e.deprecated_bg1};
`,ek=({className:e,title:t,body:n,onTitleInput:a,onBodyInput:i})=>{let s=`## Summary

Insert your summary here

## Methodology
  
Insert your methodology here

## Conclusion
  
Insert your conclusion here
  
  `;return(0,p.jsxs)(e_,{className:e,children:[(0,p.jsx)(eA,{children:(0,p.jsx)(h.cC,{id:"qcybNQ"})}),(0,p.jsx)(eS,{value:t,onUserInput:a,placeholder:S.ag._({id:"ypPAJ2"}),fontSize:"1.25rem"}),(0,p.jsx)("hr",{}),(0,p.jsx)(eD,{value:n,onUserInput:i,placeholder:s,fontSize:"1rem"})]})};var eP=n(24040),eM=n(68456),eR=n(95168),eW=n(34120);let eL=ed.default.div.withConfig({displayName:"ModalViews__ConfirmOrLoadingWrapper",componentId:"sc-2b9dc208-0"})`
  width: 100%;
  padding: 24px;
`,eU=(0,ed.default)(b.lg).withConfig({displayName:"ModalViews__ConfirmedIcon",componentId:"sc-2b9dc208-1"})`
  padding: 60px 0;
`;function eV({children:e,onDismiss:t}){return(0,p.jsxs)(eL,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(el.Tw,{onClick:t})]}),(0,p.jsx)(eU,{children:(0,p.jsx)(el._1,{src:eM.Z,alt:"loader",size:"90px"})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[e,(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"oG26Rt"})})]})]})}function eO({children:e,onDismiss:t,hash:n}){let a=(0,ed.useTheme)(),{chainId:i}=(0,y.useWeb3React)();return(0,p.jsxs)(eL,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(el.Tw,{onClick:t})]}),(0,p.jsx)(eU,{children:(0,p.jsx)(eP.Z,{strokeWidth:.5,size:90,color:a.accentAction})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[e,i&&n&&(0,p.jsx)(eR.dL,{href:(0,eW.E)(i,n,eW.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"yVxaEc"})})})]})]})}let ez=({isOpen:e,hash:t,onDismiss:n})=>{let a=(0,ed.useTheme)();return(0,p.jsx)(em.Z,{isOpen:e,onDismiss:n,children:t?(0,p.jsx)(eO,{onDismiss:n,hash:t,children:(0,p.jsxs)(b.Tz,{gap:"md",justify:"center",children:[(0,p.jsx)(ey.xv,{fontWeight:500,fontSize:20,textAlign:"center",children:(0,p.jsx)(h.cC,{id:"taLipU"})}),t&&(0,p.jsx)(el.dL,{href:(0,eW.E)(1,t,eW.r.TRANSACTION),children:(0,p.jsx)(ey.xv,{fontWeight:500,fontSize:14,color:a.accentAction,children:(0,p.jsx)(h.cC,{id:"rd4eHq"})})}),(0,p.jsx)(g.DF,{as:N.rU,to:"/vote",onClick:n,style:{margin:"20px 0 0 0"},children:(0,p.jsx)(ey.xv,{fontWeight:500,fontSize:20,children:(0,p.jsx)(h.cC,{id:"vUOn9d"})})})]})}):(0,p.jsx)(eV,{onDismiss:n,children:(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"b4K1/D"})})})})})},e$=(0,ed.default)(b.Tz).withConfig({displayName:"CreateProposal__PageWrapper",componentId:"sc-2cda70e5-0"})`
  padding: 68px 8px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,eF=(0,ed.default)(I.Z).withConfig({displayName:"CreateProposal__BackArrow",componentId:"sc-2cda70e5-1"})`
  cursor: pointer;
  color: ${({theme:e})=>e.textPrimary};
`,eG=(0,ed.default)(N.rU).withConfig({displayName:"CreateProposal__Nav",componentId:"sc-2cda70e5-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0 0 1em;
  text-decoration: none;
`,eB=({proposalThreshold:e,hasActiveOrPendingProposal:t,hasEnoughVote:n,isFormInvalid:a,handleCreateProposal:i})=>{let s=e?v().divide(e.quotient,v().exponentiate(v().BigInt(10),v().BigInt(e.currency.decimals))).toLocaleString():void 0;return(0,p.jsx)(g.Kd,{style:{marginTop:"18px"},error:t||!n,disabled:a||t||!n,onClick:i,children:t?(0,p.jsx)(h.cC,{id:"EaeCw4"}):n?(0,p.jsx)(h.cC,{id:"cPZhSE"}):(0,p.jsx)(p.Fragment,{children:s?(0,p.jsx)(h.cC,{id:"zeKvPC",values:{formattedProposalThreshold:s}}):(0,p.jsx)(h.cC,{id:"GujLUI"})})})},eH=(0,ed.default)(T.im).withConfig({displayName:"CreateProposal__CreateProposalWrapper",componentId:"sc-2cda70e5-3"})`
  display: flex;
  flex-flow: column wrap;
`,eZ=ed.default.div.withConfig({displayName:"CreateProposal__AutonomousProposalCTA",componentId:"sc-2cda70e5-4"})`
  text-align: center;
  margin-top: 10px;
`;function eq(){let{account:e,chainId:t}=(0,y.useWeb3React)(),n=function(e){let t=Y(),n=(0,V.Wk)(t,"latestProposalIds",[e]);return n?.result?.[0]?.toString()}(e??void 0)??"0",a=es(2,n),{votes:i}=er(),s=function(){let{chainId:e}=(0,y.useWeb3React)(),t=Y(),n=(0,V.Wk)(t,"proposalThreshold"),a=(0,E.useMemo)(()=>e?z.yg[e]:void 0,[e]);if(n?.result?.[0]&&a)return P.CurrencyAmount.fromRawAmount(a,n.result[0])}(),[o,r]=(0,E.useState)(!1),[c,g]=(0,E.useState)(),[C,T]=(0,E.useState)(!1),[I,N]=(0,E.useState)(l.TRANSFER_TOKEN),[D,A]=(0,E.useState)(""),[S,_]=(0,E.useState)(z.yg[t??1]),[k,M]=(0,E.useState)(""),[R,W]=(0,E.useState)(""),[L,U]=(0,E.useState)(""),$=(0,E.useCallback)(()=>{r(!0)},[r]),F=(0,E.useCallback)(e=>{N(e)},[N]),G=(0,E.useCallback)(()=>{r(!1)},[r]),B=(0,E.useCallback)(()=>{g(void 0),T(!1)},[g,T]),q=(0,E.useCallback)(e=>{A(e)},[A]),K=(0,E.useCallback)(e=>{_(e)},[_]),Q=(0,E.useCallback)(e=>{M(e)},[M]),X=(0,E.useCallback)(e=>{W(e)},[W]),J=(0,E.useCallback)(e=>{U(e)},[U]),ee=(0,E.useMemo)(()=>!!(!I||!(0,m.isAddress)(D)||!S?.isToken||""===k||""===R||""===L),[I,D,S,k,R,L]),et=!!(i&&s&&v().greaterThanOrEqual(i.quotient,s.quotient)),en=function(){let{account:e,chainId:t}=(0,y.useWeb3React)(),n=Y(),a=(0,H.h7)();return(0,E.useCallback)(i=>{if(!e||!n||!i||!t)return;let s=[i.targets,i.values,i.signatures,i.calldatas,i.description];return n.estimateGas.propose(...s).then(e=>n.propose(...s,{gasLimit:(0,O.y)(e)}).then(e=>(a(e,{type:Z.i.SUBMIT_PROPOSAL}),e.hash)))},[e,a,n,t])}(),ea=async()=>{let e,t;T(!0);let n={};if(!en||!I||!S.isToken)return;let a=(0,w.Z)(k,S);if(!a)return;switch(n.targets=[S.address],n.values=["0"],n.description=`# ${R}

${L}
`,I){case l.TRANSFER_TOKEN:e=[["address","uint256"]],t=[[(0,m.getAddress)(D),a.quotient.toString()]],n.signatures=[`transfer(${e[0].join(",")})`];break;case l.APPROVE_TOKEN:e=[["address","uint256"]],t=[[(0,m.getAddress)(D),a.quotient.toString()]],n.signatures=[`approve(${e[0].join(",")})`]}n.calldatas=[];for(let a=0;a<n.signatures.length;a++)n.calldatas[a]=u.$.encode(e[a],t[a]);let i=await en(n??void 0)?.catch(()=>{T(!1)});i&&g(i)};return(0,p.jsx)(f.fM,{page:x.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,p.jsx)(e$,{children:(0,p.jsxs)(ec.Z,{$maxWidth:"800px",children:[(0,p.jsxs)(eG,{to:"/vote",children:[(0,p.jsx)(eF,{}),(0,p.jsx)(el.Tv.SubHeaderLarge,{children:"Create Proposal"})]}),(0,p.jsxs)(eH,{children:[(0,p.jsx)(j.Pj,{children:(0,p.jsx)(b.Tz,{gap:"10px",children:(0,p.jsx)(el.Tv.DeprecatedLink,{fontWeight:400,color:"accentAction",children:(0,p.jsx)(h.cC,{id:"8kkwc5",components:{0:(0,p.jsx)("strong",{}),1:(0,p.jsx)(el.dL,{href:"https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose"})}})})})}),(0,p.jsx)(ev,{onClick:$,proposalAction:I}),(0,p.jsx)(eE,{proposalAction:I,currency:S,amount:k,toAddress:D,onCurrencySelect:K,onAmountInput:Q,onToAddressInput:q}),(0,p.jsx)(ek,{title:R,body:L,onTitleInput:X,onBodyInput:J}),(0,p.jsx)(eB,{proposalThreshold:s,hasActiveOrPendingProposal:a?.status===d.ACTIVE||a?.status===d.PENDING,hasEnoughVote:et,isFormInvalid:ee,handleCreateProposal:ea}),et?null:(0,p.jsxs)(eZ,{children:["Don’t have 2.5M votes? Anyone can create an autonomous proposal using"," ",(0,p.jsx)(el.dL,{href:"https://fish.vote",children:"fish.vote"})]})]}),(0,p.jsx)(ew,{isOpen:o,onDismiss:G,onProposalActionSelect:e=>F(e)}),(0,p.jsx)(ez,{isOpen:C,hash:c,onDismiss:B})]})})})}var eY=n(27591),eK=n(19969),eQ=n(86299),eX=n(25575),eJ=n(85729),e0=n(36772),e2=n(2242),e1=n(15993),e5=n(48662),e6=n(42881);let e4=(0,ed.default)(b.Tz).withConfig({displayName:"DelegateModal__ContentWrapper",componentId:"sc-ce1f73a4-0"})`
  width: 100%;
  padding: 24px;
`,e3=(0,ed.default)(e2.Z).withConfig({displayName:"DelegateModal__StyledClosed",componentId:"sc-ce1f73a4-1"})`
  :hover {
    cursor: pointer;
  }
`,e8=ed.default.div.withConfig({displayName:"DelegateModal__TextButton",componentId:"sc-ce1f73a4-2"})`
  :hover {
    cursor: pointer;
  }
`;function e9({isOpen:e,onDismiss:t,title:n}){let{account:a,chainId:i}=(0,y.useWeb3React)(),[s,o]=(0,E.useState)(!1),[r,d]=(0,E.useState)(""),l=s?r:a,{address:c}=(0,e5.Z)(l),u=(0,e6.mM)(a??void 0,i?z.yg[i]:void 0),x=function(){let{account:e,chainId:t,provider:n}=(0,y.useWeb3React)(),a=(0,H.h7)(),i=K();return(0,E.useCallback)(s=>{if(!n||!t||!e||!s||!(0,m.isAddress)(s??""))return;let o=[s];if(!i)throw Error("No UNI Contract!");return i.estimateGas.delegate(...o,{}).then(e=>i.delegate(...o,{value:null,gasLimit:(0,O.y)(e)}).then(e=>(a(e,{type:Z.i.DELEGATE,delegatee:s}),e.hash)))},[e,a,t,n,i])}(),[f,j]=(0,E.useState)(),[C,v]=(0,E.useState)(!1);function w(){j(void 0),v(!1),t()}async function T(){if(v(!0),!x)return;let e=await x(c??void 0)?.catch(e=>{v(!1),console.log(e)});e&&j(e)}return(0,p.jsxs)(em.Z,{isOpen:e,onDismiss:w,maxHeight:90,children:[!C&&!f&&(0,p.jsx)(e4,{gap:"lg",children:(0,p.jsxs)(b.Tz,{gap:"lg",justify:"center",children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:500,children:n}),(0,p.jsx)(e3,{stroke:"black",onClick:w})]}),(0,p.jsx)(el.Tv.DeprecatedBody,{children:(0,p.jsx)(h.cC,{id:"bax021"})}),(0,p.jsx)(el.Tv.DeprecatedBody,{children:(0,p.jsx)(h.cC,{id:"7AHe/w"})}),s&&(0,p.jsx)(ep.Z,{value:r,onChange:function(e){d(e)}}),(0,p.jsx)(g.DF,{disabled:!(0,m.isAddress)(c??""),onClick:T,children:(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{color:"white",children:s?(0,p.jsx)(h.cC,{id:"C70qx/"}):(0,p.jsx)(h.cC,{id:"WTuGq0"})})}),(0,p.jsx)(e8,{onClick:()=>o(!s),children:(0,p.jsx)(el.Tv.DeprecatedBlue,{children:s?(0,p.jsx)(h.cC,{id:"vsCwzF"}):(0,p.jsx)(h.cC,{id:"3zjn/4"})})})]})}),C&&!f&&(0,p.jsx)(eV,{onDismiss:w,children:(0,p.jsxs)(b.Tz,{gap:"md",justify:"center",children:[(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:s?(0,p.jsx)(h.cC,{id:"mYDX/5"}):(0,p.jsx)(h.cC,{id:"dZrGcP"})}),(0,p.jsxs)(el.Tv.DeprecatedMain,{fontSize:36,children:[" ",(0,e1.Z)(u,4)]})]})}),f&&(0,p.jsx)(eO,{onDismiss:w,hash:f,children:(0,p.jsxs)(b.Tz,{gap:"md",justify:"center",children:[(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"RSb2E9"})}),(0,p.jsx)(el.Tv.DeprecatedMain,{fontSize:36,children:(0,e1.Z)(u,4)})]})})]})}let e7=ed.default.div.withConfig({displayName:"ProposalEmptyState__EmptyProposals",componentId:"sc-5992cc17-0"})`
  border: 1px solid ${({theme:e})=>e.deprecated_text4};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,te=ed.default.i.withConfig({displayName:"ProposalEmptyState__Sub",componentId:"sc-5992cc17-1"})`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`,tt=({HeaderContent:e,SubHeaderContent:t})=>(0,p.jsxs)(e7,{children:[(0,p.jsx)(el.Tv.DeprecatedBody,{style:{marginBottom:"8px"},children:(0,p.jsx)(e,{})}),(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(te,{children:(0,p.jsx)(t,{})})})]});function tn(){let{chainId:e}=(0,y.useWeb3React)();return e&&e!==P.ChainId.MAINNET?(0,p.jsx)(tt,{HeaderContent:()=>(0,p.jsx)(h.cC,{id:"ejl/89"}),SubHeaderContent:()=>(0,p.jsx)(h.cC,{id:"ekfCbW"})}):(0,p.jsx)(tt,{HeaderContent:()=>(0,p.jsx)(h.cC,{id:"wra16A"}),SubHeaderContent:()=>(0,p.jsx)(h.cC,{id:"LNOwr1"})})}var ta=n(55102),ti=n(97588),ts=n(56564),to=n(13120),tr=n(83777),td=n(91101);let tl=(e,t)=>{switch(e){case d.PENDING:case d.ACTIVE:return t.accentAction;case d.SUCCEEDED:case d.EXECUTED:return t.accentSuccess;case d.DEFEATED:return t.accentFailure;case d.QUEUED:case d.CANCELED:case d.EXPIRED:default:return t.textTertiary}};function tc({status:e}){switch(e){case d.PENDING:return(0,p.jsx)(h.cC,{id:"UbRKMZ"});case d.ACTIVE:return(0,p.jsx)(h.cC,{id:"F6pfE9"});case d.SUCCEEDED:return(0,p.jsx)(h.cC,{id:"KAbcm2"});case d.EXECUTED:return(0,p.jsx)(h.cC,{id:"L4jnDP"});case d.DEFEATED:return(0,p.jsx)(h.cC,{id:"WRTJfs"});case d.QUEUED:return(0,p.jsx)(h.cC,{id:"8wu9lr"});case d.CANCELED:return(0,p.jsx)(h.cC,{id:"GGWsTU"});case d.EXPIRED:return(0,p.jsx)(h.cC,{id:"M1RnFv"});default:return(0,p.jsx)(h.cC,{id:"v2r3sT"})}}let tp=ed.default.span.withConfig({displayName:"styled__StyledProposalContainer",componentId:"sc-4fd15de4-0"})`
  font-size: 0.825rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({status:e,theme:t})=>tl(e,t)};
  border: 1px solid ${({status:e,theme:t})=>tl(e,t)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
  flex: 0 0 100px;
  text-align: center;
`;function tu({status:e}){return(0,p.jsx)(tp,{status:e,children:(0,p.jsx)(tc,{status:e})})}let tm=(0,ed.default)(b.Tz).withConfig({displayName:"Landing__PageWrapper",componentId:"sc-d7f651f4-0"})`
  padding-top: 68px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,th=(0,ed.default)(b.Tz).withConfig({displayName:"Landing__TopSection",componentId:"sc-d7f651f4-1"})`
  max-width: 640px;
  width: 100%;
`,tx=(0,ed.default)(ti.zx).withConfig({displayName:"Landing__Proposal",componentId:"sc-d7f651f4-2"})`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;
  background-color: ${({theme:e})=>e.deprecated_bg1};
  &:focus {
    background-color: ${({theme:e})=>(0,ta._j)(.05,e.deprecated_bg1)};
  }
  &:hover {
    background-color: ${({theme:e})=>e.backgroundInteractive};
  }
`,ty=ed.default.span.withConfig({displayName:"Landing__ProposalNumber",componentId:"sc-d7f651f4-3"})`
  opacity: ${({theme:e})=>e.opacity.hover};
  flex: 0 0 40px;
`,tf=ed.default.span.withConfig({displayName:"Landing__ProposalTitle",componentId:"sc-d7f651f4-4"})`
  font-weight: 600;
  flex: 1;
  max-width: 420px;
  white-space: initial;
  word-wrap: break-word;
  padding-right: 10px;
`,tg=(0,ed.default)(eK.I8).withConfig({displayName:"Landing__VoteCard",componentId:"sc-d7f651f4-5"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`,tj=(0,ed.default)(eh.m0).withConfig({displayName:"Landing__WrapSmall",componentId:"sc-d7f651f4-6"})`
  margin-bottom: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
  `};
`,tb=(0,ed.default)(el.Tv.DeprecatedMain).withConfig({displayName:"Landing__TextButton",componentId:"sc-d7f651f4-7"})`
  color: ${({theme:e})=>e.accentAction};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,tC=ed.default.div.withConfig({displayName:"Landing__AddressButton",componentId:"sc-d7f651f4-8"})`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.accentAction};
`,tv=(0,ed.default)(el.dL).withConfig({displayName:"Landing__StyledExternalLink",componentId:"sc-d7f651f4-9"})`
  color: ${({theme:e})=>e.textPrimary};
`;function tw(){let e=(0,ed.useTheme)(),{account:t,chainId:n}=(0,y.useWeb3React)(),[a,i]=(0,E.useState)(!0),s=(0,ts.Wt)(to.Lk.DELEGATE),o=(0,ts.up)(),{data:r,loading:l}=ei(),{loading:c,votes:u}=er(),m=(0,e6.mM)(t??void 0,n?z.yg[n]:void 0),j=eo(),C=!!(m&&v().notEqual(m.quotient,v().BigInt(0))&&j===td.r_);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.fM,{page:x.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,p.jsxs)(tm,{gap:"lg",justify:"center",children:[(0,p.jsx)(e9,{isOpen:s,onDismiss:o,title:C?(0,p.jsx)(h.cC,{id:"tZ11ko"}):(0,p.jsx)(h.cC,{id:"LBfPQ7"})}),(0,p.jsx)(th,{gap:"md",children:(0,p.jsxs)(tg,{children:[(0,p.jsx)(eK.sq,{}),(0,p.jsx)(eK.RF,{}),(0,p.jsx)(eK.uO,{children:(0,p.jsxs)(b.Tz,{gap:"md",children:[(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedWhite,{fontWeight:600,children:(0,p.jsx)(h.cC,{id:"V1eTV0"})})}),(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedWhite,{fontSize:14,children:(0,p.jsx)(h.cC,{id:"UPoMvW"})})}),(0,p.jsx)(el.dL,{style:{color:e.white,textDecoration:"underline"},href:"https://uniswap.org/blog/uni",target:"_blank",children:(0,p.jsx)(el.Tv.DeprecatedWhite,{fontSize:14,children:(0,p.jsx)(h.cC,{id:"UP8B0b"})})})]})}),(0,p.jsx)(eK.sq,{}),(0,p.jsx)(eK.RF,{})]})}),(0,p.jsxs)(th,{gap:"2px",children:[(0,p.jsxs)(tj,{children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{style:{margin:"0.5rem 0.5rem 0.5rem 0",flexShrink:0},children:(0,p.jsx)(h.cC,{id:"6g1gi0"})}),(0,p.jsxs)(eh.BA,{gap:"6px",justify:"flex-end",children:[l||c?(0,p.jsx)(eX.ZP,{}):null,C?(0,p.jsx)(g.DF,{style:{width:"fit-content",height:"40px"},padding:"8px",$borderRadius:"8px",onClick:o,children:(0,p.jsx)(h.cC,{id:"C6789t"})}):u&&v().notEqual(v().BigInt(0),u?.quotient)?(0,p.jsx)(el.Tv.DeprecatedBody,{fontWeight:500,mr:"6px",children:(0,p.jsx)(h.cC,{id:"YgWhFg",components:{0:(0,p.jsx)(eQ.Z,{currencyAmount:u})}})}):m&&j&&j!==td.r_&&v().notEqual(v().BigInt(0),m?.quotient)?(0,p.jsx)(el.Tv.DeprecatedBody,{fontWeight:500,mr:"6px",children:(0,p.jsx)(h.cC,{id:"YgWhFg",components:{0:(0,p.jsx)(eQ.Z,{currencyAmount:m})}})}):"",(0,p.jsx)(g.DF,{as:N.rU,to:"/create-proposal",style:{width:"fit-content",borderRadius:"8px",height:"40px"},padding:"8px",children:(0,p.jsx)(h.cC,{id:"cPZhSE"})})]})]}),!C&&(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),j&&j!==td.r_?(0,p.jsxs)(eh.DA,{children:[(0,p.jsx)(el.Tv.DeprecatedBody,{fontWeight:500,mr:"4px",children:(0,p.jsx)(h.cC,{id:"if4+2Q"})}),(0,p.jsxs)(tC,{children:[(0,p.jsx)(tv,{href:(0,eW.E)(1,j,eW.r.ADDRESS),style:{margin:"0 4px"},children:j===t?(0,p.jsx)(h.cC,{id:"QwCX4t"}):(0,tr.X)(j)}),(0,p.jsx)(tb,{onClick:o,style:{marginLeft:"4px"},children:(0,p.jsx)(h.cC,{id:"zBlp20"})})]})]}):""]}),r?.length===0&&(0,p.jsx)(tn,{}),r?.length>0&&(0,p.jsxs)(b.Tz,{gap:"md",children:[(0,p.jsx)(eh.m0,{}),(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)(el.Tv.DeprecatedMain,{children:(0,p.jsx)(h.cC,{id:"Md3nnk"})}),(0,p.jsx)(e0.Z,{isActive:!a,toggle:()=>i(e=>!e)})]})]}),r?.slice(0)?.reverse()?.filter(e=>!a||e.status!==d.CANCELED)?.map(e=>p.jsxs(tx,{as:N.rU,to:`/vote/${e.governorIndex}/${e.id}`,children:[p.jsxs(ty,{children:[e.governorIndex,".",e.id]}),p.jsx(tf,{children:e.title}),p.jsx(tu,{status:e.status})]},`${e.governorIndex}${e.id}`))]}),(0,p.jsx)(el.Tv.DeprecatedSubHeader,{color:"text3",children:(0,p.jsx)(h.cC,{id:"3Mwm54"})})]})}),(0,p.jsx)(eJ.c,{})]})}var tT=n(20691);let tE=(0,ed.default)(b.Tz).withConfig({displayName:"ExecuteModal__ContentWrapper",componentId:"sc-45d82a26-0"})`
  width: 100%;
  padding: 24px;
`,tI=(0,ed.default)(e2.Z).withConfig({displayName:"ExecuteModal__StyledClosed",componentId:"sc-45d82a26-1"})`
  :hover {
    cursor: pointer;
  }
`,tN=ed.default.div.withConfig({displayName:"ExecuteModal__ConfirmOrLoadingWrapper",componentId:"sc-45d82a26-2"})`
  width: 100%;
  padding: 24px;
`,tD=(0,ed.default)(b.lg).withConfig({displayName:"ExecuteModal__ConfirmedIcon",componentId:"sc-45d82a26-3"})`
  padding: 60px 0;
`;function tA({isOpen:e,onDismiss:t,proposalId:n}){let{chainId:a}=(0,y.useWeb3React)(),i=function(){let{account:e,chainId:t}=(0,y.useWeb3React)(),n=Y(),a=(0,H.h7)();return(0,E.useCallback)(i=>{if(!e||!n||!i||!t)return;let s=[i];return n.estimateGas.execute(...s,{}).then(e=>n.execute(...s,{value:null,gasLimit:(0,O.y)(e)}).then(e=>(a(e,{type:Z.i.EXECUTE,governorAddress:n.address,proposalId:parseInt(i)}),e.hash)))},[e,a,n,t])}(),[s,o]=(0,E.useState)(),[r,d]=(0,E.useState)(!1),l=(0,ed.useTheme)();function c(){o(void 0),d(!1),t()}async function u(){if(d(!0),!i)return;let e=await i(n)?.catch(e=>{d(!1),console.log(e)});e&&o(e)}return(0,p.jsxs)(em.Z,{isOpen:e,onDismiss:c,maxHeight:90,children:[!r&&!s&&(0,p.jsx)(tE,{gap:"lg",children:(0,p.jsxs)(b.Tz,{gap:"lg",justify:"center",children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:500,children:(0,p.jsx)(h.cC,{id:"rq7lZ9",values:{proposalId:n}})}),(0,p.jsx)(tI,{onClick:c})]}),(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedBody,{children:(0,p.jsx)(h.cC,{id:"VHfiai"})})}),(0,p.jsx)(g.DF,{onClick:u,children:(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{color:"white",children:(0,p.jsx)(h.cC,{id:"ZC2VJP"})})})]})}),r&&!s&&(0,p.jsxs)(tN,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(tI,{onClick:c})]}),(0,p.jsx)(tD,{children:(0,p.jsx)(el._1,{src:eM.Z,alt:"loader",size:"90px"})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"cS4teF"})})}),(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"oG26Rt"})})]})]}),s&&(0,p.jsxs)(tN,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(tI,{onClick:c})]}),(0,p.jsx)(tD,{children:(0,p.jsx)(eP.Z,{strokeWidth:.5,size:90,color:l.accentAction})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"NhJreA"})})}),a&&(0,p.jsx)(el.dL,{href:(0,eW.E)(a,s,eW.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"yVxaEc"})})})]})]})]})}let tS=(0,ed.default)(b.Tz).withConfig({displayName:"QueueModal__ContentWrapper",componentId:"sc-5366524b-0"})`
  width: 100%;
  padding: 24px;
`,t_=(0,ed.default)(e2.Z).withConfig({displayName:"QueueModal__StyledClosed",componentId:"sc-5366524b-1"})`
  :hover {
    cursor: pointer;
  }
`,tk=ed.default.div.withConfig({displayName:"QueueModal__ConfirmOrLoadingWrapper",componentId:"sc-5366524b-2"})`
  width: 100%;
  padding: 24px;
`,tP=(0,ed.default)(b.lg).withConfig({displayName:"QueueModal__ConfirmedIcon",componentId:"sc-5366524b-3"})`
  padding: 60px 0;
`;function tM({isOpen:e,onDismiss:t,proposalId:n}){let{chainId:a}=(0,y.useWeb3React)(),i=function(){let{account:e,chainId:t}=(0,y.useWeb3React)(),n=Y(),a=(0,H.h7)();return(0,E.useCallback)(i=>{if(!e||!n||!i||!t)return;let s=[i];return n.estimateGas.queue(...s,{}).then(e=>n.queue(...s,{value:null,gasLimit:(0,O.y)(e)}).then(e=>(a(e,{type:Z.i.QUEUE,governorAddress:n.address,proposalId:parseInt(i)}),e.hash)))},[e,a,n,t])}(),[s,o]=(0,E.useState)(),[r,d]=(0,E.useState)(!1),l=(0,ed.useTheme)();function c(){o(void 0),d(!1),t()}async function u(){if(d(!0),!i)return;let e=await i(n)?.catch(e=>{d(!1),console.log(e)});e&&o(e)}return(0,p.jsxs)(em.Z,{isOpen:e,onDismiss:c,maxHeight:90,children:[!r&&!s&&(0,p.jsx)(tS,{gap:"lg",children:(0,p.jsxs)(b.Tz,{gap:"lg",justify:"center",children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:500,children:(0,p.jsx)(h.cC,{id:"vUozZa",values:{proposalId:n}})}),(0,p.jsx)(t_,{onClick:c})]}),(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedBody,{children:(0,p.jsx)(h.cC,{id:"ZYe2DX"})})}),(0,p.jsx)(g.DF,{onClick:u,children:(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{color:"white",children:(0,p.jsx)(h.cC,{id:"b24kPi"})})})]})}),r&&!s&&(0,p.jsxs)(tk,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(t_,{onClick:c})]}),(0,p.jsx)(tP,{children:(0,p.jsx)(el._1,{src:eM.Z,alt:"loader",size:"90px"})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"4iM1V1"})})}),(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"oG26Rt"})})]})]}),s&&(0,p.jsxs)(tk,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(t_,{onClick:c})]}),(0,p.jsx)(tP,{children:(0,p.jsx)(eP.Z,{strokeWidth:.5,size:90,color:l.accentAction})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"RSb2E9"})})}),a&&(0,p.jsx)(el.dL,{href:(0,eW.E)(a,s,eW.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"yVxaEc"})})})]})]})]})}var tR=n(44455),tW=n(63362),tL=n(73859),tU=n.n(tL),tV=n(31631),tO=n.n(tV);let tz=(0,ed.default)(b.Tz).withConfig({displayName:"VoteModal__ContentWrapper",componentId:"sc-b6b10821-0"})`
  width: 100%;
  padding: 24px;
`,t$=(0,ed.default)(e2.Z).withConfig({displayName:"VoteModal__StyledClosed",componentId:"sc-b6b10821-1"})`
  :hover {
    cursor: pointer;
  }
`,tF=ed.default.div.withConfig({displayName:"VoteModal__ConfirmOrLoadingWrapper",componentId:"sc-b6b10821-2"})`
  width: 100%;
  padding: 24px;
`,tG=(0,ed.default)(b.lg).withConfig({displayName:"VoteModal__ConfirmedIcon",componentId:"sc-b6b10821-3"})`
  padding: 60px 0;
`;function tB({isOpen:e,onDismiss:t,proposalId:n,voteOption:a}){let{chainId:i}=(0,y.useWeb3React)(),s=function(){let{account:e,chainId:t}=(0,y.useWeb3React)(),n=Y(),a=(0,H.h7)();return(0,E.useCallback)((i,s)=>{if(!e||!n||!i||!t)return;let o=[i,s===q.N.Against?0:s===q.N.For?1:2];return n.estimateGas.castVote(...o,{}).then(e=>n.castVote(...o,{value:null,gasLimit:(0,O.y)(e)}).then(e=>(a(e,{type:Z.i.VOTE,decision:s,governorAddress:n.address,proposalId:parseInt(i),reason:""}),e.hash)))},[e,a,n,t])}(),{votes:o}=er(),[r,d]=(0,E.useState)(),[l,c]=(0,E.useState)(!1),u=(0,ed.useTheme)();function m(){d(void 0),c(!1),t()}async function x(){if(c(!0),!s||void 0===a)return;let e=await s(n,a)?.catch(e=>{c(!1),console.log(e)});e&&d(e)}return(0,p.jsxs)(em.Z,{isOpen:e,onDismiss:m,maxHeight:90,children:[!l&&!r&&(0,p.jsx)(tz,{gap:"lg",children:(0,p.jsxs)(b.Tz,{gap:"lg",justify:"center",children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:500,children:a===q.N.Against?(0,p.jsx)(h.cC,{id:"aSX+fT",values:{proposalId:n}}):a===q.N.For?(0,p.jsx)(h.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,p.jsx)(h.cC,{id:"eiIsQo",values:{proposalId:n}})}),(0,p.jsx)(t$,{onClick:m})]}),(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"WO4eRQ",values:{0:(0,e1.Z)(o,4)}})}),(0,p.jsx)(g.DF,{onClick:x,children:(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{color:"white",children:a===q.N.Against?(0,p.jsx)(h.cC,{id:"aSX+fT",values:{proposalId:n}}):a===q.N.For?(0,p.jsx)(h.cC,{id:"A7Ys4I",values:{proposalId:n}}):(0,p.jsx)(h.cC,{id:"eiIsQo",values:{proposalId:n}})})})]})}),l&&!r&&(0,p.jsxs)(tF,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(t$,{onClick:m})]}),(0,p.jsx)(tG,{children:(0,p.jsx)(el._1,{src:eM.Z,alt:"loader",size:"90px"})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"NWUJUl"})})}),(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"oG26Rt"})})]})]}),r&&(0,p.jsxs)(tF,{children:[(0,p.jsxs)(eh.m0,{children:[(0,p.jsx)("div",{}),(0,p.jsx)(t$,{onClick:m})]}),(0,p.jsx)(tG,{children:(0,p.jsx)(eP.Z,{strokeWidth:.5,size:90,color:u.accentAction})}),(0,p.jsxs)(b.Tz,{gap:"100px",justify:"center",children:[(0,p.jsx)(b.Tz,{gap:"md",justify:"center",children:(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{children:(0,p.jsx)(h.cC,{id:"RSb2E9"})})}),i&&(0,p.jsx)(el.dL,{href:(0,eW.E)(i,r,eW.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,p.jsx)(el.Tv.DeprecatedSubHeader,{children:(0,p.jsx)(h.cC,{id:"yVxaEc"})})})]})]})]})}let tH=(0,ed.default)(b.Tz).withConfig({displayName:"VotePage__PageWrapper",componentId:"sc-c685d396-0"})`
  padding-top: 68px;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,tZ=(0,ed.default)(b.Tz).withConfig({displayName:"VotePage__ProposalInfo",componentId:"sc-c685d396-1"})`
  background: ${({theme:e})=>e.backgroundSurface};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`,tq=(0,ed.default)(el.m_).withConfig({displayName:"VotePage__ArrowWrapper",componentId:"sc-c685d396-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  color: ${({theme:e})=>e.textPrimary};

  a {
    color: ${({theme:e})=>e.textPrimary};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`,tY=ed.default.div.withConfig({displayName:"VotePage__CardWrapper",componentId:"sc-c685d396-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`,tK=(0,ed.default)(eK.I8).withConfig({displayName:"VotePage__StyledDataCard",componentId:"sc-c685d396-4"})`
  width: 100%;
  background: none;
  background-color: ${({theme:e})=>e.deprecated_bg1};
  height: fit-content;
  z-index: 2;
`,tQ=ed.default.div.withConfig({displayName:"VotePage__ProgressWrapper",componentId:"sc-c685d396-5"})`
  width: 100%;
  margin-top: 1rem;
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.deprecated_bg3};
  position: relative;
`,tX=ed.default.div.withConfig({displayName:"VotePage__Progress",componentId:"sc-c685d396-6"})`
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e,status:t})=>"for"===t?e.accentSuccess:e.accentFailure};
  width: ${({percentageString:e})=>e??"0%"};
`,tJ=ed.default.div.withConfig({displayName:"VotePage__MarkDownWrapper",componentId:"sc-c685d396-7"})`
  max-width: 640px;
  overflow: hidden;
`,t0=(0,ed.default)(eh.m0).withConfig({displayName:"VotePage__WrapSmall",componentId:"sc-c685d396-8"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    align-items: flex-start;
    flex-direction: column;
  `};
`,t2=ed.default.div.withConfig({displayName:"VotePage__DetailText",componentId:"sc-c685d396-9"})`
  word-break: break-all;
`,t1=(0,ed.default)(el.dL).withConfig({displayName:"VotePage__ProposerAddressLink",componentId:"sc-c685d396-10"})`
  word-break: break-all;
`;function t5(e,t,n,a){if(e&&t&&n&&a){let i=new Date;return i.setTime(a.add(tT.O$.from(n).mul(tT.O$.from(e-t))).toNumber()*tU()("1s")),i}}function t6(){let{governorIndex:e,id:t}=(0,eY.UO)(),n=Number.parseInt(e),{chainId:a,account:i}=(0,y.useWeb3React)(),s=function(e){let t=Y(),n=V.Wk(t,"quorumVotes")?.result?.[0],{chainId:a}=(0,y.useWeb3React)(),i=(0,E.useMemo)(()=>a?z.yg[a]:void 0,[a]);if(t&&n&&a===P.ChainId.MAINNET&&i&&2===e)return P.CurrencyAmount.fromRawAmount(i,n)}(n),o=es(n,t),[r,l]=(0,E.useState)(void 0),c=(0,ts.Wt)(to.Lk.VOTE),u=(0,ts.VE)(),m=(0,ts.Wt)(to.Lk.DELEGATE),C=(0,ts.up)(),w=(0,ts.Wt)(to.Lk.QUEUE),T=(0,ts.wG)(),N=(0,ts.Wt)(to.Lk.EXECUTE),D=(0,ts.jC)(),A=(0,tW.Z)(),S=(0,$.ZP)(),_=t5(o?.startBlock,S,(a&&W[a])??12,A),k=t5(o?.endBlock,S,(a&&W[a])??12,A),M=new Date,L=(0,tR.eQ)(),U={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},O=o?.eta?new Date(o.eta.mul(tU()("1s")).toNumber()):void 0,F=o?.forCount?.add(o.againstCount),G=F?o?.forCount?.asFraction?.divide(F.asFraction)?.multiply(100):void 0,B=G?new P.Fraction(100).subtract(G):void 0,H=function(e){let{account:t,chainId:n}=(0,y.useWeb3React)(),a=K(),i=(0,E.useMemo)(()=>n?z.yg[n]:void 0,[n]),s=V.Wk(a,"getPriorVotes",[t??void 0,e??void 0])?.result?.[0];return s&&i?P.CurrencyAmount.fromRawAmount(i,s):void 0}(o?.startBlock??void 0),Z=H&&v().greaterThan(H.quotient,v().BigInt(0))&&o&&o.status===d.ACTIVE,Q=i&&o?.status===d.SUCCEEDED,X=i&&o?.status===d.QUEUED,J=(0,e6.mM)(i??void 0,a?z.yg[a]:void 0),ee=eo(),et=!!(J&&v().notEqual(J.quotient,v().BigInt(0))&&ee===td.r_),en=e=>{if((0,tr.U)(e)&&a){let t=R[a]?.[e]??e;return(0,p.jsx)(el.dL,{href:(0,eW.E)(a,e,eW.r.ADDRESS),children:t})}return(0,p.jsx)("span",{children:e})};return(0,p.jsx)(f.fM,{page:x.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(tH,{gap:"lg",justify:"center",children:[(0,p.jsx)(tB,{isOpen:c,onDismiss:u,proposalId:o?.id,voteOption:r}),(0,p.jsx)(e9,{isOpen:m,onDismiss:C,title:(0,p.jsx)(h.cC,{id:"tZ11ko"})}),(0,p.jsx)(tM,{isOpen:w,onDismiss:T,proposalId:o?.id}),(0,p.jsx)(tA,{isOpen:N,onDismiss:D,proposalId:o?.id}),(0,p.jsxs)(tZ,{gap:"lg",justify:"start",children:[(0,p.jsxs)(eh.m0,{style:{width:"100%"},children:[(0,p.jsx)(tq,{to:"/vote",children:(0,p.jsx)(h.cC,{id:"HgT4Lv",components:{0:(0,p.jsx)(I.Z,{size:20})}})}),o&&(0,p.jsx)(tu,{status:o.status})]}),(0,p.jsxs)(b.Tz,{gap:"10px",style:{width:"100%"},children:[(0,p.jsx)(el.Tv.DeprecatedLargeHeader,{style:{marginBottom:".5rem"},children:o?.title}),(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedMain,{children:_&&_>M?(0,p.jsx)(h.cC,{id:"/lY+kD",values:{0:_.toLocaleString(L,U)}}):null})}),(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedMain,{children:k&&(k<M?(0,p.jsx)(h.cC,{id:"3X8B3E",values:{0:k.toLocaleString(L,U)}}):(0,p.jsx)(h.cC,{id:"IPCr3d",values:{0:k.toLocaleString(L,U)}}))})}),o&&o.status===d.ACTIVE&&!Z&&(0,p.jsx)(j.rd,{children:(0,p.jsxs)(el.Tv.DeprecatedBlack,{children:[(0,p.jsx)(h.cC,{id:"7bxUAT",values:{0:o.startBlock}})," ",et&&(0,p.jsx)("span",{children:(0,p.jsx)(h.cC,{id:"LP6nKU",components:{0:(0,p.jsx)(el.m_,{to:"/vote"})}})})]})})]}),Z&&(0,p.jsxs)(eh.DA,{style:{width:"100%",gap:"12px"},children:[(0,p.jsx)(g.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{l(q.N.For),u()},children:(0,p.jsx)(h.cC,{id:"Rrae+o"})}),(0,p.jsx)(g.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{l(q.N.Against),u()},children:(0,p.jsx)(h.cC,{id:"I8KupP"})})]}),Q&&(0,p.jsx)(eh.DA,{style:{width:"100%",gap:"12px"},children:(0,p.jsx)(g.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{T()},children:(0,p.jsx)(h.cC,{id:"b24kPi"})})}),X&&(0,p.jsxs)(p.Fragment,{children:[O&&(0,p.jsx)(eh.m0,{children:(0,p.jsx)(el.Tv.DeprecatedBlack,{children:(0,p.jsx)(h.cC,{id:"bW/jOL",values:{0:O.toLocaleString(L,U)}})})}),(0,p.jsx)(eh.DA,{style:{width:"100%",gap:"12px"},children:(0,p.jsx)(g.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{D()},disabled:!A||!o?.eta||A.lt(o.eta),children:(0,p.jsx)(h.cC,{id:"ZC2VJP"})})})]}),(0,p.jsxs)(tY,{children:[(0,p.jsx)(tK,{children:(0,p.jsxs)(eK.uO,{children:[(0,p.jsx)(b.Tz,{gap:"md",children:(0,p.jsxs)(t0,{children:[(0,p.jsx)(el.Tv.DeprecatedBlack,{fontWeight:600,children:(0,p.jsx)(h.cC,{id:"YHpbe1"})}),o&&(0,p.jsxs)(el.Tv.DeprecatedBlack,{fontWeight:600,children:[o.forCount.toFixed(0,{groupSeparator:","}),s&&(0,p.jsx)("span",{style:{fontWeight:400},children:` / ${s.toExact({groupSeparator:","})}`})]})]})}),(0,p.jsx)(tQ,{children:(0,p.jsx)(tX,{status:"for",percentageString:o?.forCount.greaterThan(0)?`${G?.toFixed(0)??0}%`:"0%"})})]})}),(0,p.jsx)(tK,{children:(0,p.jsxs)(eK.uO,{children:[(0,p.jsx)(b.Tz,{gap:"md",children:(0,p.jsxs)(t0,{children:[(0,p.jsx)(el.Tv.DeprecatedBlack,{fontWeight:600,children:(0,p.jsx)(h.cC,{id:"GFvPy6"})}),o&&(0,p.jsx)(el.Tv.DeprecatedBlack,{fontWeight:600,children:o.againstCount.toFixed(0,{groupSeparator:","})})]})}),(0,p.jsx)(tQ,{children:(0,p.jsx)(tX,{status:"against",percentageString:o?.againstCount?.greaterThan(0)?`${B?.toFixed(0)??0}%`:"0%"})})]})})]}),(0,p.jsxs)(b.Tz,{gap:"md",children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:600,children:(0,p.jsx)(h.cC,{id:"URmyfc"})}),o?.details?.map((e,t)=>p.jsxs(t2,{children:[t+1,": ",en(e.target),".",e.functionSig,"(",e.callData.split(",").map((t,n)=>p.jsxs("span",{children:[en(t),e.callData.split(",").length-1===n?"":","]},n)),")"]},t))]}),(0,p.jsxs)(b.Tz,{gap:"md",children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:600,children:(0,p.jsx)(h.cC,{id:"Nu4oKW"})}),(0,p.jsx)(tJ,{children:(0,p.jsx)(tO(),{source:o?.description,renderers:{image:function({...e}){return(0,p.jsx)("img",{...e,style:{width:"100%",height:"100$",objectFit:"cover"},alt:""})}}})})]}),(0,p.jsxs)(b.Tz,{gap:"md",children:[(0,p.jsx)(el.Tv.DeprecatedMediumHeader,{fontWeight:600,children:(0,p.jsx)(h.cC,{id:"5nBkYU"})}),(0,p.jsx)(t1,{href:o?.proposer&&a?(0,eW.E)(a,o?.proposer,eW.r.ADDRESS):"",children:(0,p.jsx)(tO(),{source:o?.proposer})})]})]})]}),(0,p.jsx)(eJ.c,{})]})})}function t4(){return(0,p.jsxs)(eY.Z5,{children:[(0,p.jsx)(eY.AW,{path:"/",element:(0,p.jsx)(tw,{})}),(0,p.jsx)(eY.AW,{path:":governorIndex/:id",element:(0,p.jsx)(t6,{})}),(0,p.jsx)(eY.AW,{path:"create-proposal",element:(0,p.jsx)(eq,{})})]})}}}]);
//# sourceMappingURL=942.ee672c4c.chunk.js.map