import { keyframes, css, createGlobalStyle } from 'styled-components';
import get from 'lodash.get';
import concat from 'lodash.concat';
import merge from 'lodash.merge';

const resetAutofill = keyframes`
  0% {
    background: inherit;
  }
  100% {
    background: rgba(0, 194, 154, 0.07);
  }
`;

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    overflow: hidden;
  }
  input {
    appearance: none;
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  input,
  textarea,
  select {
    &:-webkit-autofill {
      animation: ${resetAutofill} 0.2s linear both;
    }
  }
  :focus {
    outline: none;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    padding-top: 1px;
    margin-top: -1px;
  }
`;

const createUrl = (url, extension) => {
  return `url('${url}.${extension}') format('${extension === 'ttf' ? 'truetype' : extension}')`
};

const createSrc = font => {
  return font.extensions.map(extension => createUrl(font.url, extension)).join(', ')
};

const getFontFace = (name, font) => {
  return `
    @font-face {
      font-family: '${name}';
      src: ${createSrc(font)};
      ${font.weight ? `font-weight: ${font.weight};` : ''}
      ${font.style ? `font-style: ${font.style};` : ''}
    }
  `
};

const fontFace = theme => {
  return Object.entries(theme.fonts)
    .map(([name, variations]) => variations.map(font => getFontFace(name, font)).join(''))
    .join('')
};

const DEFAULT_FONT_SIZE = 50;
const DEFAULT_FONT_FAMILY = 'welcomeweb';
const HEADING_FONT_FAMILY = 'welcomeweb';

const coreTheme = (options = {}) => {
  let {
    defaultFontSize = DEFAULT_FONT_SIZE,
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    headingFontFamily = HEADING_FONT_FAMILY,
    ...rest
  } = options;

  const toEm = px => `${px / defaultFontSize}em`;
  const toRem = px => `${px / defaultFontSize}rem`;
  const getFontSizes = unit => {
    const convert = unit === 'em' ? toEm : toRem;
    return {
      html: `${defaultFontSize}px`,
      body: convert(16),
      xs: convert(11),
      sm: convert(13),
      default: convert(14),
      md: convert(16),
      mdlg: convert(18),
      lg: convert(19),
      xl: convert(22),
      xxl: convert(32),
      xxxl: convert(50)
    }
  };

  let theme = {};

  theme.color = {
    richblack: '#050506', //#050506
    smokyblack: '#0B0B0D', //#0B0B0D
    licorice: '#101013', //#101013
    eerieblack: '#16161A', //#16161A
    moodyblack: '#1B1C20', //#1B1C20
    raisinblack: '#212227', //#212227
    charcoal: '#26272E', //#26272E
    gunmetal: '#2C2D34', //#2C2D34
    metal: '#31333B', //#31333B
    onyx: '#373942', //#373942
    darkliver: '#4B4D55', //#4B4D55
    granite: '#5F6067', //#5F6067
    battleship: '#73747B', //#73747B
    steel: '#87888D', //#87888D
    silverchalice: '#AFAFB3', //#AFAFB3
    silver: '#C3C3C6', //#C3C3C6
    timberwolf: '#D7D7D9', //#D7D7D9
    isabelline: '#EEEEEE', //#EEEEEE
    snow: '#F9F9F9', //#F9F9F9
    white: '#FFFFFF', //#FFFFFF

    iceberg: '#71A6DE', //#71A6DE
    lightcyan: '#E1F0FF', //#E1F0FF

    pastelorange: '#FFAF51', //#FFAF51
    lemonchiffon: '#FFF2E3', //#FFF2E3

    seafoamblue: '#00C29A', //#00C29A
    carribeangreen: '#66C8AB', //#66C8AB
    pastelmint: '#E3F8F4', //#E3F8F4

    alabamacrimson: '#F35454', //#F35454
    mistryrose: '#FEE6E6', //#FEE6E6

    linkedin: '#0077B5' // #0077B5
  };

  theme.text = {
    primary: {
      size: 'md',
      weight: 'regular'
    },
    secondary: {
      size: 'xs',
      weight: 'medium',
      transform: 'none'
    },
    label: {
      size: 'md',
      weight: 'bold'
    },
    button: {
      size: 'xs',
      weight: 'bold',
      transform: 'uppercase',
      spacing: 'md'
    },
    button_small: {
      size: 'xs',
      weight: 'regular',
      transform: 'uppercase',
      spacing: 'md'
    }
  };

  theme.borderWidth = {
    input: '1px'
  };

  theme.fontSize = getFontSizes('rem');

  theme.fontSizeEm = getFontSizes('em');

  theme.letterSpacing = {
    sm: '0.5px',
    md: '1px',
    lg: '2px'
  };

  theme.padding = {
    xxxs: '0.1em',
    xxs: '0.3em',
    xs: '0.5em',
    sm: '0.8125em',
    md: '1em',
    lg: '1.5em',
    mdx2: '2em',
    xl: '3.125em',
    xxl: '4em',
    xxxl: '6.875em'
  };

  theme.gutter = {
    xxxs: toRem(1.6),
    xxs: toRem(4.8),
    xs: toRem(8),
    sm: toRem(13),
    md: toRem(16),
    lg: toRem(24),
    mdx2: toRem(32),
    xl: toRem(50),
    xxl: toRem(64),
    xxxl: toRem(110)
  };

  theme.fontFamily = {
    texts: defaultFontFamily,
    headings: headingFontFamily,
    icons: 'Material-design-iconic-font'
  };

  theme.fontWeight = {
    regular: '400',
    medium: '500',
    bold: '600',
    black: '700'
  };

  theme.transition = {
    sm: 'all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    md: 'all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)',
    lg: 'all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)'
  };

  theme.centeredContainerWidth = {
    sm: toRem(640),
    md: toRem(896),
    mdlg: toRem(1029),
    lg: toRem(1248),
    movies: {
      md: toRem(1024)
    }
  };

  theme.ratio = {
    '720p': 1280 / 720
  };

  theme.shareButtonSize = {
    sm: 16,
    md: 32,
    lg: 46
  };

  theme.roundedButtonSize = {
    xs: toRem(19),
    sm: toRem(26),
    md: toRem(35),
    lg: toRem(70)
  };

  theme.buttonIconWidth = toRem(46);

  theme.modalSize = {
    xs: toRem(480),
    sm: toRem(640),
    md: toRem(800),
    lg: toRem(960)
  };

  theme.radius = {
    sm: '3px',
    md: '5px',
    lg: '10px'
  };

  theme.boxShadow = {
    xs: '0 1px 2px rgba(0,0,0,.1)',
    sm: '0 2px 2px rgba(0,0,0,.1)',
    md: '0 3px 10px rgba(0,0,0,.08)',
    lg: '0 4px 15px rgba(0,0,0,.2)',
    xl: '0 8px 20px rgba(0,0,0,.2)',
    xxl: '0 20px 50px rgba(0,0,0,.7)'
  };

  theme.breakpoint = {
    widescreen: '1650px',
    mediumscreen: '1300px',
    smallscreen: '1100px',
    tablet: '900px',
    mobile: '670px'
  };

  theme.checkboxSize = {
    desktop: toRem(16),
    mobile: toRem(22)
  };

  theme.fonts = {};

  return merge(theme, rest)
};

let theme = coreTheme();

const createTheme = options => {
  theme = coreTheme(options);
  return theme
};

var theme$1 = theme;

const getHexValueAtLocation = (value, start, count) => {
  return parseInt(value.substring(start, count), 16)
};

const isValidHex = hex => /(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{3}$)/.test(hex);

const hexToRGB = hex => {
  if (!hex) {
    return
  }

  hex = hex.replace('#', '');
  if (!isValidHex(hex)) {
    return
  }

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const hexToR = hex => getHexValueAtLocation(hex, 0, 2);
  const hexToG = hex => getHexValueAtLocation(hex, 2, 4);
  const hexToB = hex => getHexValueAtLocation(hex, 4, 6);

  return `${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)}`
};

let helpers = Object.keys(theme$1).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (...path) => props => {
      if (!props.theme) {
        props = { ...props, theme: theme$1 };
      }
      const value = get(props, ['theme', key, ...path]);
      if (process.env.NODE_ENV === 'development' && value === undefined) {
        console.warn(`${key}[${[...path]}] is not available in this theme`);
      }

      return value
    }
  }
}, {});

helpers.rgba = (...args) => {
  return props => {
    const opacity = args[args.length - 1];
    const path = args.slice(0, -1);
    const color = get(props, ['theme', 'color', ...path]) || args[0]; // Handle rgba('#COFFEE', 0.3)

    return `rgba(${hexToRGB(color)}, ${opacity})`
  }
};

helpers.centeredContainerWidth = (...path) => {
  return props => {
    const basename = ['theme', 'centeredContainerWidth'];
    const pathname = props.width || (path.length && [...path]) || 'lg';
    return get(props, concat(basename, pathname))
  }
};

helpers.textStyles = key => {
  return props => {
    const value = get(props, ['theme', 'text', key]);
    const { size, weight, transform, spacing } = value;
    return css`
      font-size: ${size ? helpers.fontSize(size) : 'inherit'};
      font-weight: ${weight ? helpers.fontWeight(weight) : 'inherit'};
      text-transform: ${transform ? transform : null};
      letter-spacing: ${spacing ? helpers.letterSpacing(spacing) : null};
    `
  }
};

const transition = helpers.transition;
const textStyles = helpers.textStyles;
const roundedButtonSize = helpers.roundedButtonSize;
const rgba = helpers.rgba;
const letterSpacing = helpers.letterSpacing;
const radius = helpers.radius;
const gutter = helpers.gutter;
const color = helpers.color;
const fontSize = helpers.fontSize;
const fontFamily = helpers.fontFamily;
const fontWeight = helpers.fontWeight;
const breakpoint = helpers.breakpoint;
const boxShadow = helpers.boxShadow;

const baseResponsiveStyles = css`
  @media (max-width: 1200px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 1300px) and (max-height: 700px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 16px;
    }
  }
`;

const getBaseStyles = theme => createGlobalStyle`
  ${reset}

  ${fontFace(theme)}

  html {
    font-size: ${fontSize('html')({ theme })};
  }

  body {
    font-family: ${[fontFamily('texts')({ theme }), 'sans-serif'].join(', ')};
    -webkit-font-smoothing: antialiased;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${[
      fontFamily('headings')({ theme }),
      fontFamily('texts')({ theme }),
      'serif'
    ].join(', ')};
  }

  h1, h2, h3{
    line-height: 1.3;
  }

  h4, h5, h6, p, li{
    line-height: 1.4;
  }

  ::selection {
    background-color: ${color('seafoamblue')};
    color: ${color('white')};
  }

  ${baseResponsiveStyles}
`;

// export { default as Button } from './atoms/Button'

export { createTheme, getBaseStyles };
