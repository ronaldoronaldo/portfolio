export const fontWeights = {
  bold: 700,
  semiBold: 600,
  regular: 400
}

const lightness = 5

export const colors = {
  portGreen: '#3EECB4',
  portBlack: '#282828',

  primary: `hsl(174, 60%, 54%)`,
  primaryDark: `hsl(174, 60%, ${54 - lightness}%)`,
  primaryLight: `hsl(174, 60%, ${54 + lightness}%)`,

  primary1: `hsl(173, 60%, 91%)`,

  idGreen: `hsl(89, 69%, 57%)`,
  idGreenDark: `hsl(89, 69%, ${57 - lightness}%)`,
  idGreenLight: `hsl(89, 69%, ${57 + lightness}%)`,

  blue: `hsl(188, 50%, 51%)`,
  blueDark: `hsl(188, 50%, ${51 - lightness}%)`,
  blueLight: `hsl(188, 50%, ${51 + lightness}%)`,

  black6: `hsl(240, 1%, 18%)`,
  black6Dark: `hsl(240, 1%, ${18 - lightness}%)`,
  black6Light: `hsl(240, 1%, ${18 + lightness}%)`,
  black5: `hsl(220, 2%, 35%)`,
  black5Dark: `hsl(220, 2%, ${35 - lightness}%)`,
  black5Light: `hsl(220, 2%, ${35 + lightness}%)`,
  black4: `hsl(228, 2%, 54%)`,
  black4Dark: `hsl(228, 2%, ${54 - lightness}%)`,
  black4Light: `hsl(228, 2%, ${54 + lightness}%)`,
  black3: `hsl(223, 5%, 71%)`,
  black3Dark: `hsl(223, 5%, ${71 - lightness}%)`,
  black3Light: `hsl(223, 5%, ${71 + lightness}%)`,
  black2: `hsl(218, 14%, 89%)`,
  black2Dark: `hsl(218, 14%, ${89 - lightness}%)`,
  black2Light: `hsl(218, 14%, ${89 + lightness}%)`,
  black1: `hsl(220, 69%, 97%)`,
  black1Dark: `hsl(220, 69%, ${97 - lightness}%)`,
  black1Light: `hsl(220, 69%, ${97 + lightness}%)`,

  red3: `hsl(0, 93%, 65%)`,
  red3Dark: `hsl(0, 93%, ${65 - lightness}%)`,
  red3Light: `hsl(0, 93%, ${65 + lightness}%)`,
  red2: `hsl(0, 100%, 82%)`,
  red2Dark: `hsl(0, 100%, ${82 - lightness}%)`,
  red2Light: `hsl(0, 100%, ${82 + lightness}%)`,
  red1: `hsl(0, 86%, 97%)`,
  red1Dark: `hsl(0, 86%, ${97 - lightness}%)`,
  red1Light: `hsl(0, 86%, ${97 + lightness}%)`,

  purple3: `hsl(271, 47%, 66%)`,
  purple3Dark: `hsl(271, 47%, ${66 - lightness}%)`,
  purple3Light: `hsl(271, 47%, ${66 + lightness}%)`,
  purple2: `hsl(271, 66%, 84%)`,
  purple2Dark: `hsl(271, 66%, ${84 - lightness}%)`,
  purple2Light: `hsl(271, 66%, ${84 + lightness}%)`,
  purple1: `hsl(273, 100%, 96%)`,
  purple1Dark: `hsl(273, 100%, ${96 - lightness}%)`,
  purple1Light: `hsl(273, 100%, ${96 + lightness}%)`,

  orange3: `hsl(17, 100%, 74%)`,
  orange3Dark: `hsl(17, 100%, ${74 - lightness}%)`,
  orange3Light: `hsl(17, 100%, ${74 + lightness}%)`,
  orange2: `hsl(17, 100%, 89%)`,
  orange2Dark: `hsl(17, 100%, ${89 - lightness}%)`,
  orange2Light: `hsl(17, 100%, ${89 + lightness}%)`,
  orange1: `hsl(17, 100%, 97%)`,
  orange1Dark: `hsl(17, 100%, ${97 - lightness}%)`,
  orange1Light: `hsl(17, 100%, ${97 + lightness}%)`,

  green3: `hsl(161, 64%, 39%)`,
  green2: `hsl(161, 50%, 76%)`,
  green1: `hsl(142, 100%, 95%)`,

  yellow3: `hsl(45, 100%, 55%)`,
  yellow2: `hsl(38, 100%, 85%)`,
  yellow1: `hsl(38, 100%, 96%)`,

  white: `hsl(0, 0%, 100%)`,
  whiteDark: `hsl(0, 0%, ${100 - lightness}%)`
}

export const sizes = {
  radius: 3,
  padding: 16,
  text: 16,
  smScreen: 480,
  mdScreen: 768,
  lgScreen: 992,
  xlgScreen: 1200,
  xxlgScreen: 1400,
  h: {
    1: { size: 56, lineHeight: 70 },
    2: { size: 40, lineHeight: 50 },
    3: { size: 32, lineHeight: 40 },
    4: { size: 24, lineHeight: 30 },
    5: { size: 20, lineHeight: 30 }
  },
  label: 12,
  buttonText: { size: 15, lineHeight: 22, letterSpacing: 1 },
  bodySmall: { size: 13, lineHeight: 22, letterSpacing: 1 },
  inputSizes: {
    xSmall: 24,
    small: 32,
    medium: 40, // default size
    large: 48,
    xLarge: 64
  },
  buttonSizes: {
    xSmall: 24,
    small: 32,
    medium: 40, // default size
    large: 48,
    xLarge: 64
  }
}

export const spacing = {
  xSmall: 8,
  mSmall: 12,
  small: 16,
  medium: 32,
  large: 56
}
