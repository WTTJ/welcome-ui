import { getTags, ThemeTags } from "../components/Tag/theme";
import { colors, ThemeColors, SecondaryColors } from "./colors";
import { borderWidths, ThemeBorderWidths } from "./borders";
import { screens, ThemeScreens } from "./screens";
import { getSpace, ThemeSpace } from "./space";
import { getRadii, ThemeRadii } from "./radii";
import {
  ThemeTimingFunction,
  ThemeTransitions,
  timingFunction,
  transitions,
} from "./transitions";
import { shadows, ThemeShadows } from "./shadows";
import { fontFaces, ThemeFontFaces } from "./fonts";
import {
  fontWeights,
  getFonts,
  getFontSizes,
  getLetterSpacings,
  getLineHeights,
  getTextFontColors,
  getTextsFontFamily,
  getTextsFontWeights,
  getTextsTextTransform,
  ThemeFonts,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeLetterSpacings,
  ThemeLineHeights,
  ThemeTextsFontColors,
  ThemeTextsFontFamily,
  ThemeTextsFontWeights,
  ThemeTextsTextTransform,
} from "./typography";
import { mergeDeepRight } from "../../utils/mergeDeepRight";
import {
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme,
} from "@xstyled/styled-components";

type OverrideKeys =
  | "colors"
  | "radii"
  | "borderWidths"
  | "fontSizes"
  | "lineHeights"
  | "fontWeights"
  | "letterSpacings"
  | "fonts"
  | "sizes"
  | "screens"
  | "space"
  | "shadows"
  | "texts";

type XStyledTheme = Omit<XStyledDefaultTheme, OverrideKeys>;
type StyledComponentsTheme = Omit<StyledComponentDefaultTheme, OverrideKeys>;

export interface ThemeValues extends XStyledTheme, StyledComponentsTheme {
  borderWidths: ThemeBorderWidths;
  defaultLetterSpacing: string;
  defaultLineHeight: number;
  colors: ThemeColors;
  inset: ThemeSpace;
  radii: ThemeRadii;
  textsFontColors: ThemeTextsFontColors;
  fontFaces: ThemeFontFaces;
  fontSizes: ThemeFontSizes;
  fontWeights: ThemeFontWeights;
  fonts: ThemeFonts;
  fontsUrl: ThemeFontsUrl;
  transitions: ThemeTransitions;
  screens: ThemeScreens;
  timingFunction: ThemeTimingFunction;
  space: ThemeSpace;
  tags: ThemeTags;
  textsFontFamily: ThemeTextsFontFamily;
  textsFontWeights: ThemeTextsFontWeights;
  textsTextTransform: ThemeTextsTextTransform;
  toEm: (int: number) => string;
  toPx: (int?: number) => string;
  toRem: (int?: number) => string;
  shadows: ThemeShadows;
  letterSpacings: ThemeLetterSpacings;
  lineHeights: ThemeLineHeights;
}

export type ThemeFontsUrl =
  | "https://cdn.welcome-ui.com/fonts"
  | "https://cdn.welcometothejungle.com/fonts"
  | string;

export type ThemeOptions = {
  [param: string]: unknown;
  defaultFontFamily?: string;
  defaultFontSize?: number;
  defaultLetterSpacing?: string;
  defaultLineHeight?: number;
  fontsUrl?: ThemeFontsUrl;
  headingFontFamily?: string;
  iconFontFamily?: string;
};

const DEFAULT_FONT_FAMILY = "work-sans";
const DEFAULT_FONT_SIZE = 16;
const DEFAULT_LETTER_SPACING = "-0.019rem";
const DEFAULT_LINE_HEIGHT = 1.15;
const FONTS_URL = "https://cdn.welcome-ui.com/fonts";
const HEADING_FONT_FAMILY = "welcome-font";
const ICON_FONT_FAMILY = "welcome-icon-font";

export const createTheme = (options: ThemeOptions): ThemeValues => {
  const {
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    defaultFontSize = DEFAULT_FONT_SIZE,
    defaultLetterSpacing = DEFAULT_LETTER_SPACING,
    defaultLineHeight = DEFAULT_LINE_HEIGHT,
    fontsUrl = FONTS_URL,
    headingFontFamily = HEADING_FONT_FAMILY,
    iconFontFamily = ICON_FONT_FAMILY,
    ...rest
  } = options;

  let theme = {} as ThemeValues;

  // convertors
  theme.toEm = (px) => `${px / defaultFontSize}em`;
  theme.toRem = (px) => `${px / defaultFontSize}rem`;
  theme.toPx = (rem) => `${rem * defaultFontSize}px`;

  // base
  theme.borderWidths = borderWidths;
  theme.colors = colors;
  theme.inset = theme.space;
  theme.radii = getRadii(theme);
  theme.screens = screens;
  theme.shadows = shadows;
  theme.space = getSpace(theme);
  theme.timingFunction = timingFunction;
  theme.transitions = transitions;

  // fonts
  theme.defaultLetterSpacing = defaultLetterSpacing as string;
  theme.defaultLineHeight = defaultLineHeight as number;
  theme.fontFaces = fontFaces(theme);
  theme.fonts = getFonts(defaultFontFamily, headingFontFamily, iconFontFamily);
  theme.fontSizes = getFontSizes("rem", theme);
  theme.fontsUrl = fontsUrl;
  theme.fontWeights = fontWeights;
  theme.letterSpacings = getLetterSpacings(theme);
  theme.lineHeights = getLineHeights(theme);

  // merge custom theme
  theme = mergeDeepRight(theme, rest) as ThemeValues;

  // this entries depend on colors and fontSizes
  theme.textsFontWeights = getTextsFontWeights(theme);
  theme.textsFontFamily = getTextsFontFamily(theme);
  theme.textsFontColors = getTextFontColors(theme);
  theme.textsTextTransform = getTextsTextTransform();

  // components
  theme.tags = getTags(theme);

  return theme;
};

export { SecondaryColors };
