import { style } from '@vanilla-extract/css'

import { sprinkles, themeVars, vars } from '../../nft/css/sprinkles.css'

export const hover = style([
  sprinkles({
    transition: '250',
    borderRadius: '12',
  }),
  {
    ':hover': {
      background: vars.color.lightGrayOverlay,
    },
  },
])

export const MenuRow = style([
  hover,
  sprinkles({
    color: 'textPrimary',
    paddingY: '8',
    paddingX: '8',
    width: 'full',
    whiteSpace: 'nowrap',
  }),
  {
    lineHeight: '24px',
    textDecoration: 'none',
  },
])

export const MenuRowA = style([
  {
    ':hover': {
      background: "#38393c!important",
    },
  },
  {
    padding: "16px",
    borderRadius: "4px",
    fontSize: 14,
    fontWeight: 400,
    // lineHeight: ,
    letterSpacing: .25,
    color: "white",
    width: "100%"
    // padding: 16px!important;
    // border-radius: 4px!important;
    // font-size: 14px!important;
    // font-weight: 400!important;
    // line-height: 20px!important;
    // letter-spacing: .25px!important;
    // color: #fff!important;
  }
])

export const PrimaryText = style([
  {
    lineHeight: '24px',
  },
])

export const SecondaryText = style([
  hover,
  sprinkles({
    paddingY: '8',
    paddingX: '8',
    color: 'textSecondary',
    width: 'full',
  }),
  {
    lineHeight: '20px',
  },
])

export const Separator = style([
  sprinkles({
    height: '0',
    marginX: '16',
  }),
  {
    borderTop: 'solid',
    borderColor: themeVars.colors.backgroundOutline,
    borderWidth: '1px',
  },
])

export const IconRow = style([
  sprinkles({
    paddingX: '16',
    justifyContent: { sm: 'center', md: 'flex-start' },
  }),
])
