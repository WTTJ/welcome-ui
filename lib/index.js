!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("styled-components"),require("lodash.get"),require("lodash.concat"),require("lodash.merge")):"function"==typeof define&&define.amd?define(["exports","styled-components","lodash.get","lodash.concat","lodash.merge"],t):t((e=e||self)["jungle-ui"]={},e.styledComponents,e.get,e.concat,e.merge)}(this,function(e,t,n,i,o){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n,i=i&&i.hasOwnProperty("default")?i.default:i,o=o&&o.hasOwnProperty("default")?o.default:o;const a=t.keyframes`
  0% {
    background: inherit;
  }
  100% {
    background: rgba(0, 194, 154, 0.07);
  }
`,l=t.css`
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
      animation: ${a} 0.2s linear both;
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
`,r=50,s="welcomeweb",m="welcomeweb",d=(e={})=>{let{defaultFontSize:t=r,defaultFontFamily:n=s,headingFontFamily:i=m,...a}=e;const l=e=>`${e/t}em`,d=e=>`${e/t}rem`,c=e=>{const n="em"===e?l:d;return{html:`${t}px`,body:n(16),xs:n(11),sm:n(13),default:n(14),md:n(16),mdlg:n(18),lg:n(19),xl:n(22),xxl:n(32),xxxl:n(50)}};let h={color:{richblack:"#050506",smokyblack:"#0B0B0D",licorice:"#101013",eerieblack:"#16161A",moodyblack:"#1B1C20",raisinblack:"#212227",charcoal:"#26272E",gunmetal:"#2C2D34",metal:"#31333B",onyx:"#373942",darkliver:"#4B4D55",granite:"#5F6067",battleship:"#73747B",steel:"#87888D",silverchalice:"#AFAFB3",silver:"#C3C3C6",timberwolf:"#D7D7D9",isabelline:"#EEEEEE",snow:"#F9F9F9",white:"#FFFFFF",iceberg:"#71A6DE",lightcyan:"#E1F0FF",pastelorange:"#FFAF51",lemonchiffon:"#FFF2E3",seafoamblue:"#00C29A",carribeangreen:"#66C8AB",pastelmint:"#E3F8F4",alabamacrimson:"#F35454",mistryrose:"#FEE6E6",linkedin:"#0077B5"},text:{primary:{size:"md",weight:"regular"},secondary:{size:"xs",weight:"medium",transform:"none"},label:{size:"md",weight:"bold"},button:{size:"xs",weight:"bold",transform:"uppercase",spacing:"md"},button_small:{size:"xs",weight:"regular",transform:"uppercase",spacing:"md"}},borderWidth:{input:"1px"}};return h.fontSize=c("rem"),h.fontSizeEm=c("em"),h.letterSpacing={sm:"0.5px",md:"1px",lg:"2px"},h.padding={xxxs:"0.1em",xxs:"0.3em",xs:"0.5em",sm:"0.8125em",md:"1em",lg:"1.5em",mdx2:"2em",xl:"3.125em",xxl:"4em",xxxl:"6.875em"},h.gutter={xxxs:d(1.6),xxs:d(4.8),xs:d(8),sm:d(13),md:d(16),lg:d(24),mdx2:d(32),xl:d(50),xxl:d(64),xxxl:d(110)},h.fontFamily={texts:n,headings:i,icons:"Material-design-iconic-font"},h.fontWeight={regular:"400",medium:"500",bold:"600",black:"700"},h.transition={sm:"all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)",md:"all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)",lg:"all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)"},h.centeredContainerWidth={sm:d(640),md:d(896),mdlg:d(1029),lg:d(1248),movies:{md:d(1024)}},h.ratio={"720p":1280/720},h.shareButtonSize={sm:16,md:32,lg:46},h.roundedButtonSize={xs:d(19),sm:d(26),md:d(35),lg:d(70)},h.buttonIconWidth=d(46),h.modalSize={xs:d(480),sm:d(640),md:d(800),lg:d(960)},h.radius={sm:"3px",md:"5px",lg:"10px"},h.boxShadow={xs:"0 1px 2px rgba(0,0,0,.1)",sm:"0 2px 2px rgba(0,0,0,.1)",md:"0 3px 10px rgba(0,0,0,.08)",lg:"0 4px 15px rgba(0,0,0,.2)",xl:"0 8px 20px rgba(0,0,0,.2)",xxl:"0 20px 50px rgba(0,0,0,.7)"},h.breakpoint={widescreen:"1650px",mediumscreen:"1300px",smallscreen:"1100px",tablet:"900px",mobile:"670px"},h.checkboxSize={desktop:d(16),mobile:d(22)},h.fonts={},o(h,a)};let c=d();var h=c;const g=(e,t,n)=>parseInt(e.substring(t,n),16);let p=Object.keys(h).reduce((e,t)=>({...e,[t]:(...e)=>i=>{i.theme||(i={...i,theme:h});const o=n(i,["theme",t,...e]);return"development"===process.env.NODE_ENV&&void 0===o&&console.warn(`${t}[${[...e]}] is not available in this theme`),o}}),{});p.rgba=((...e)=>t=>{const i=e[e.length-1],o=e.slice(0,-1);return`rgba(${(e=>{if(!e)return;if(!(e=>/(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{3}$)/.test(e))(e=e.replace("#","")))return;3===e.length&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`);return`${(e=>g(e,0,2))(e)}, ${(e=>g(e,2,4))(e)}, ${(e=>g(e,4,6))(e)}`})(n(t,["theme","color",...o])||e[0])}, ${i})`}),p.centeredContainerWidth=((...e)=>t=>{const o=t.width||e.length&&[...e]||"lg";return n(t,i(["theme","centeredContainerWidth"],o))}),p.textStyles=(e=>i=>{const o=n(i,["theme","text",e]),{size:a,weight:l,transform:r,spacing:s}=o;return t.css`
      font-size: ${a?p.fontSize(a):"inherit"};
      font-weight: ${l?p.fontWeight(l):"inherit"};
      text-transform: ${r||null};
      letter-spacing: ${s?p.letterSpacing(s):null};
    `});p.transition,p.textStyles,p.roundedButtonSize,p.rgba,p.letterSpacing,p.radius,p.gutter;const x=p.color,b=p.fontSize,u=p.fontFamily,f=(p.fontWeight,p.breakpoint,p.boxShadow,t.css`
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
`);e.createTheme=(e=>c=d(e)),e.getBaseStyles=(e=>t.createGlobalStyle`
  ${l}

  ${(e=>Object.entries(e.fonts).map(([e,t])=>t.map(t=>((e,t)=>`\n    @font-face {\n      font-family: '${e}';\n      src: ${(e=>e.extensions.map(t=>((e,t)=>`url('${e}.${t}') format('${"ttf"===t?"truetype":t}')`)(e.url,t)).join(", "))(t)};\n      ${t.weight?`font-weight: ${t.weight};`:""}\n      ${t.style?`font-style: ${t.style};`:""}\n    }\n  `)(e,t)).join("")).join(""))(e)}

  html {
    font-size: ${b("html")({theme:e})};
  }

  body {
    font-family: ${[u("texts")({theme:e}),"sans-serif"].join(", ")};
    -webkit-font-smoothing: antialiased;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${[u("headings")({theme:e}),u("texts")({theme:e}),"serif"].join(", ")};
  }

  h1, h2, h3{
    line-height: 1.3;
  }

  h4, h5, h6, p, li{
    line-height: 1.4;
  }

  ::selection {
    background-color: ${x("seafoamblue")};
    color: ${x("white")};
  }

  ${f}
`)});
