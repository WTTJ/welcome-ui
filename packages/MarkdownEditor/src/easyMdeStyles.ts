import { css } from '@wttj/xstyled-styled-components'

export const easyMdeStyles = css`
  /**
 * easymde v2.10.1
 * Copyright Jeroen Akkerman
 * @link https://github.com/ionaru/easy-markdown-editor
 * @license MIT
 */
  .CodeMirror {
    font-family: monospace;
    height: 300px;
    color: #000;
    direction: ltr;
  }
  .CodeMirror-lines {
    padding: 4px 0;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4px;
  }
  .CodeMirror-gutter-filler,
  .CodeMirror-scrollbar-filler {
    background-color: #fff;
  }
  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }
  .CodeMirror-guttermarker {
    color: #000;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }
  .CodeMirror-cursor {
    border-left: 1px solid #000;
    border-right: none;
    width: 0;
  }
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }
  @-moz-keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  @keyframes blink {
    50% {
      background-color: transparent;
    }
  }
  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }
  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }
  .cm-s-default .cm-header {
    color: #00f;
  }
  .cm-s-default .cm-quote {
    color: #090;
  }
  .cm-negative {
    color: #d44;
  }
  .cm-positive {
    color: #292;
  }
  .cm-header,
  .cm-strong {
    font-weight: 700;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }
  .cm-s-default .cm-keyword {
    color: #708;
  }
  .cm-s-default .cm-atom {
    color: #219;
  }
  .cm-s-default .cm-number {
    color: #164;
  }
  .cm-s-default .cm-def {
    color: #00f;
  }
  .cm-s-default .cm-variable-2 {
    color: #05a;
  }
  .cm-s-default .cm-type,
  .cm-s-default .cm-variable-3 {
    color: #085;
  }
  .cm-s-default .cm-comment {
    color: #a50;
  }
  .cm-s-default .cm-string {
    color: #a11;
  }
  .cm-s-default .cm-string-2 {
    color: #f50;
  }
  .cm-s-default .cm-meta {
    color: #555;
  }
  .cm-s-default .cm-qualifier {
    color: #555;
  }
  .cm-s-default .cm-builtin {
    color: #30a;
  }
  .cm-s-default .cm-bracket {
    color: #997;
  }
  .cm-s-default .cm-tag {
    color: #170;
  }
  .cm-s-default .cm-attribute {
    color: #00c;
  }
  .cm-s-default .cm-hr {
    color: #999;
  }
  .cm-s-default .cm-link {
    color: #00c;
  }
  .cm-s-default .cm-error {
    color: red;
  }
  .cm-invalidchar {
    color: red;
  }
  .CodeMirror-composing {
    border-bottom: 2px solid;
  }
  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }
  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: #fff;
  }
  .CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -30px;
    margin-right: -30px;
    padding-bottom: 30px;
    height: 100%;
    outline: 0;
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }
  .CodeMirror-gutter-filler,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-vscrollbar {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0;
    bottom: 0;
  }
  .CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -30px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: 0 0 !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
  }
  .CodeMirror-gutter-wrapper ::-moz-selection {
    background-color: transparent;
  }
  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: 0 0;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }
  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }
  .CodeMirror-rtl pre {
    direction: rtl;
  }
  .CodeMirror-code {
    outline: 0;
  }
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber,
  .CodeMirror-scroll,
  .CodeMirror-sizer {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre {
    position: static;
  }
  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }
  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }
  .CodeMirror-selected {
    background: #d9d9d9;
  }
  .CodeMirror-focused .CodeMirror-selected {
    background: #d7d4f0;
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background: #d7d4f0;
  }
  .CodeMirror-line::-moz-selection,
  .CodeMirror-line > span::-moz-selection,
  .CodeMirror-line > span > span::-moz-selection {
    background: #d7d4f0;
  }
  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, 0.4);
  }
  .cm-force-border {
    padding-right: 0.1px;
  }
  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }
  .cm-tab-wrap-hack:after {
    content: '';
  }
  span.CodeMirror-selectedtext {
    background: 0 0;
  }
  .CodeMirror {
    box-sizing: border-box;
    height: auto;
    border: 1px solid #ddd;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px;
    font: inherit;
    z-index: 0;
    word-wrap: break-word;
  }
  .CodeMirror-scroll {
    cursor: text;
  }
  .CodeMirror-fullscreen {
    background: #fff;
    position: fixed !important;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    z-index: 8;
    border-right: none !important;
    border-bottom-right-radius: 0 !important;
  }
  .CodeMirror-sided {
    width: 50% !important;
  }
  .CodeMirror-placeholder {
    opacity: 0.5;
  }
  .CodeMirror-focused .CodeMirror-selected {
    background: #d9d9d9;
  }
  .editor-toolbar {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    padding: 0 10px;
    border-top: 1px solid #bbb;
    border-left: 1px solid #bbb;
    border-right: 1px solid #bbb;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .editor-toolbar:after,
  .editor-toolbar:before {
    display: block;
    content: ' ';
    height: 1px;
  }
  .editor-toolbar:before {
    margin-bottom: 8px;
  }
  .editor-toolbar:after {
    margin-top: 8px;
  }
  .editor-toolbar.fullscreen {
    width: 100%;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    background: #fff;
    border: 0;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 9;
  }
  .editor-toolbar.fullscreen::before {
    width: 20px;
    height: 50px;
    background: -moz-linear-gradient(left, #fff 0, rgba(255, 255, 255, 0) 100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, #fff),
      color-stop(100%, rgba(255, 255, 255, 0))
    );
    background: -webkit-linear-gradient(left, #fff 0, rgba(255, 255, 255, 0) 100%);
    background: -o-linear-gradient(left, #fff 0, rgba(255, 255, 255, 0) 100%);
    background: -ms-linear-gradient(left, #fff 0, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(to right, #fff 0, rgba(255, 255, 255, 0) 100%);
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
  .editor-toolbar.fullscreen::after {
    width: 20px;
    height: 50px;
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0, #fff 100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0, rgba(255, 255, 255, 0)),
      color-stop(100%, #fff)
    );
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0, #fff 100%);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0, #fff 100%);
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0, #fff 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
  }
  .editor-toolbar .easymde-dropdown,
  .editor-toolbar button {
    background: 0 0;
    display: inline-block;
    text-align: center;
    text-decoration: none !important;
    height: 30px;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .editor-toolbar button {
    width: 30px;
  }
  .editor-toolbar button.active,
  .editor-toolbar button:hover {
    background: #fcfcfc;
    border-color: #95a5a6;
  }
  .editor-toolbar i.separator {
    display: inline-block;
    width: 0;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #fff;
    color: transparent;
    text-indent: -10px;
    margin: 0 6px;
  }
  .editor-toolbar button:after {
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 65%;
    vertical-align: text-bottom;
    position: relative;
    top: 2px;
  }
  .editor-toolbar button.heading-1:after {
    content: '1';
  }
  .editor-toolbar button.heading-2:after {
    content: '2';
  }
  .editor-toolbar button.heading-3:after {
    content: '3';
  }
  .editor-toolbar button.heading-bigger:after {
    content: '▲';
  }
  .editor-toolbar button.heading-smaller:after {
    content: '▼';
  }
  .editor-toolbar.disabled-for-preview button:not(.no-disable) {
    opacity: 0.6;
    pointer-events: none;
  }
  @media only screen and (max-width: 700px) {
    .editor-toolbar i.no-mobile {
      display: none;
    }
  }
  .editor-statusbar {
    padding: 8px 10px;
    font-size: 12px;
    color: #959694;
    text-align: right;
  }
  .editor-statusbar span {
    display: inline-block;
    min-width: 4em;
    margin-left: 1em;
  }
  .editor-statusbar .lines:before {
    content: 'lines: ';
  }
  .editor-statusbar .words:before {
    content: 'words: ';
  }
  .editor-statusbar .characters:before {
    content: 'characters: ';
  }
  .editor-preview-full {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 7;
    overflow: auto;
    display: none;
    box-sizing: border-box;
  }
  .editor-preview-side {
    position: fixed;
    bottom: 0;
    width: 50%;
    top: 50px;
    right: 0;
    z-index: 9;
    overflow: auto;
    display: none;
    box-sizing: border-box;
    border: 1px solid #ddd;
    word-wrap: break-word;
  }
  .editor-preview-active-side {
    display: block;
  }
  .editor-preview-active {
    display: block;
  }
  .editor-preview {
    padding: 10px;
    background: #fafafa;
  }
  .editor-preview > p {
    margin-top: 0;
  }
  .editor-preview pre {
    background: #eee;
    margin-bottom: 10px;
  }
  .editor-preview table td,
  .editor-preview table th {
    border: 1px solid #ddd;
    padding: 5px;
  }
  .cm-s-easymde .cm-tag {
    color: #63a35c;
  }
  .cm-s-easymde .cm-attribute {
    color: #795da3;
  }
  .cm-s-easymde .cm-string {
    color: #183691;
  }
  .cm-s-easymde .cm-header-1 {
    font-size: 200%;
    line-height: 200%;
  }
  .cm-s-easymde .cm-header-2 {
    font-size: 160%;
    line-height: 160%;
  }
  .cm-s-easymde .cm-header-3 {
    font-size: 125%;
    line-height: 125%;
  }
  .cm-s-easymde .cm-header-4 {
    font-size: 110%;
    line-height: 110%;
  }
  .cm-s-easymde .cm-comment {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
  }
  .cm-s-easymde .cm-link {
    color: #7f8c8d;
  }
  .cm-s-easymde .cm-url {
    color: #aab2b3;
  }
  .cm-s-easymde .cm-quote {
    color: #7f8c8d;
    font-style: italic;
  }
  .editor-toolbar .easymde-dropdown {
    position: relative;
    background: linear-gradient(to bottom right, #fff 0, #fff 84%, #333 50%, #333 100%);
    border-radius: 0;
    border: 1px solid #fff;
  }
  .editor-toolbar .easymde-dropdown:hover {
    background: linear-gradient(to bottom right, #fff 0, #fff 84%, #333 50%, #333 100%);
  }
  .easymde-dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    padding: 8px;
    z-index: 2;
    top: 30px;
  }
  .easymde-dropdown:active .easymde-dropdown-content,
  .easymde-dropdown:focus .easymde-dropdown-content {
    display: block;
  }
  .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word) {
    background: rgba(255, 0, 0, 0.15);
  }
`
