import { Box } from "nft/components/Box";
import { ReactNode, useCallback, useState } from "react";
import styled from "styled-components";
import { Column, Row } from "nft/components/Flex";
import { t, Trans } from "@lingui/macro";
import * as styles from "./MenuPanel.css";

import { AlertTriangle, ChevronDown, ChevronUp } from "react-feather";
import { NavLink, NavLinkProps } from 'react-router-dom'
interface MenuPanelProps {
  children?: ReactNode;
}

const MenuRow = styled.div`
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 24px;
  text-decoration: none;
  padding-left: 12px;
  font-size: 14px;
`;

const PrimaryMenuRow = ({
  to,
  href,
  close,
  children,
}: {
  to?: NavLinkProps['to']
  href?: string
  close?: () => void
  children: ReactNode
}) => {
  return (
    <Row cursor="pointer" as="a" href={href} target="_blank" rel="noopener noreferrer" className={styles.menuItem}>
    {children}
  </Row>
  )
}

export default ({ children }: MenuPanelProps) => {
  const [isOpen, updateOpen] = useState(false);

  const handleOpen = useCallback(() => {
    updateOpen(!isOpen);
  }, [isOpen]);

  const chevronProps = {
    height: 20,
    width: 20,
    color: "white",
  };
  return (
    <Box>
      <Box
        onClick={handleOpen}
        cursor={"pointer"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"24"}
      >
        <div
          style={{
            textDecoration: "none",
            fontSize: "16px",
            paddingLeft: "0",
            paddingRight: "0",
            whiteSpace: "nowrap",
            width: "auto",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          <Trans>Fair Launch</Trans>
        </div>
        {isOpen ? (
          <ChevronUp {...chevronProps} />
        ) : (
          <ChevronDown {...chevronProps} />
        )}
      </Box>
     {isOpen ?  <Box>
        <PrimaryMenuRow  href="https://xdoge.art/#fairlaunch">
          <Trans>Buy XDOGE</Trans>
        </PrimaryMenuRow>
        <PrimaryMenuRow  href="https://xdoge.art/#howtobuy">
          <Trans>How To Buy</Trans>
        </PrimaryMenuRow>
        <PrimaryMenuRow  href="https://xdoge.art/#airdrop">
          <Trans>Airdrop</Trans>
        </PrimaryMenuRow>
        <PrimaryMenuRow href="https://xdoge.art/#tokenomics">
          <Trans>Tokenomics</Trans>
        </PrimaryMenuRow>
        <PrimaryMenuRow
          href="https://xdoge.art/xdoge_whitepaper.pdf"
        >
          <Trans>Whitepaper</Trans>
        </PrimaryMenuRow>
      </Box> : null}
    </Box>
  );
};
