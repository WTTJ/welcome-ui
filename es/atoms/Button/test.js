import React from 'react';
import { render } from '../../utils/tests';
import { Button, LinkButton, HrefButton } from './styles';
test('<Button> renders correctly and has white text by default', function () {
  var button = render(React.createElement(Button, null, "Test button")).toJSON();
  expect(button).toMatchSnapshot();
  expect(button.children).toContain('Test button');
  expect(button).toHaveStyleRule('color', '#FFFFFF');
  expect(button).toHaveStyleRule('background', '#00C29A');
});
test('<Button> has correct colour for mode light', function () {
  var button = render(React.createElement(Button, {
    mode: "light"
  }, "Test button")).toJSON();
  expect(button).toHaveStyleRule('color', '#C3C3C6');
  expect(button).toHaveStyleRule('background', '#FFFFFF');
});
test('<Button> has correct colour for mode dark', function () {
  var button = render(React.createElement(Button, {
    mode: "dark"
  }, "Test button")).toJSON();
  expect(button).toHaveStyleRule('color', '#FFFFFF');
  expect(button).toHaveStyleRule('background', '#2C2D34');
});
test('<Button> has correct colour for mode neutral', function () {
  var button = render(React.createElement(Button, {
    mode: "neutral"
  }, "Test button")).toJSON();
  expect(button).toHaveStyleRule('color', '#373942');
  expect(button).toHaveStyleRule('background', '#D7D7D9');
});
test('<Button> has correct colour for mode danger', function () {
  var button = render(React.createElement(Button, {
    mode: "danger"
  }, "Test button")).toJSON();
  expect(button).toHaveStyleRule('color', '#F35454');
  expect(button).toHaveStyleRule('background', '#FFFFFF');
});
test('<Button> has correct colour for mode linkedin', function () {
  var button = render(React.createElement(Button, {
    mode: "linkedin"
  }, "Test button")).toJSON();
  expect(button).toHaveStyleRule('color', '#FFFFFF');
  expect(button).toHaveStyleRule('background', '#0077B5');
});
test('<LinkButton> renders correctly', function () {
  var button = render(React.createElement(LinkButton, {
    to: "#nowhere"
  }, "Link button")).toJSON();
  expect(button.children).toContain('Link button');
  expect(button).toHaveStyleRule('color', '#FFFFFF');
});
test('<HrefButton> renders correctly', function () {
  var button = render(React.createElement(HrefButton, {
    href: "#nowhere"
  }, "Href button")).toJSON();
  expect(button.children).toContain('Href button');
  expect(button).toHaveStyleRule('color', '#FFFFFF');
});