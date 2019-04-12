import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import StaticRouter from 'react-router-dom/StaticRouter';
import 'jest-styled-components';
import theme from '../theme/core';
export var render = function render(children) {
  return renderer.create(React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(StaticRouter, {
    context: {}
  }, children)));
};