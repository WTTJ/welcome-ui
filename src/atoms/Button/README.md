Start with a simple button using [colors from the palette](/#!/Colors) or passing through a valid HTML color (e.g. `red` or `#FF0000`). You can then add `size`, `icon` etc to customise it.

There are also `LinkButton`, `HrefButton` and `InlineLink` variants (if you need a `react-router` link or regular `<a />` link)

### Normal button

```js
<Button>Default</Button>
<Button mode="light">Light</Button>
<Button mode="dark">Dark</Button>
<Button mode="linkedin">LinkedIn</Button>
<Button mode="neutral">Neutral</Button>
<Button mode="danger">Danger</Button>
<Button mode="primary">Primary</Button>
```

### Different sizes

```js
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="full">Full</Button>
```

### Rounded border

```js
<Button borderRounded>Don't panic Janice</Button>
```

### Round buttons

Rounded buttons are used for icons

```js
const generateIcon = require('icons/generate').default;
const TwitterIcon = generateIcon('twitter');

<Button rounded>
  <TwitterIcon width={24} height={24} />
</Button>
```

And they can pulse…

```js
const generateIcon = require('icons/generate').default;
const TwitterIcon = generateIcon('twitter');

<Button rounded pulsing>
  <TwitterIcon width={24} height={24} />
</Button>
```

### Button with icon
```js
const generateIcon = require('icons/generate').default;
const TwitterIcon = generateIcon('twitter');
const ButtonIcon = require('./button.styled').ButtonIcon;
const ButtonLabel = require('./button.styled').ButtonLabel;

<Button withIcon>
  <ButtonIcon>
    <TwitterIcon />
  </ButtonIcon>
  <ButtonLabel>
    Dreams are important…
  </ButtonLabel>
</Button>
```

## LinkButton

Has the same props as `<Button />` but used for `react-router` `<Link />`s.

```js
const Router = require('react-router-dom').MemoryRouter;
const LinkButton = require('./button.styled').LinkButton;

<Router>
  <LinkButton to="#nowhere" mode="light">
    Link Button
  </LinkButton>
</Router>
```

## InlineLink

Has the same props as `<Button />` but used for `react-router` `<Link />`s.

```js
const Router = require('react-router-dom').MemoryRouter;
const InlineLink = require('./button.styled').InlineLink;

<Router>
  <InlineLink to="#nowhere" mode="light">
    Inline Link
  </InlineLink>
</Router>
```

## InlineHref

Has the same props as `<Button />` but used for normal links e.g. `<a href="#external_url" />`.

```js
const Router = require('react-router-dom').MemoryRouter;
const InlineHref = require('./button.styled').InlineHref;

<Router>
  <InlineHref href="#nowhere" mode="light">
    Inline Href (for external_urls)
  </InlineHref>
</Router>
```

## HrefButton

Has the same props as `<Button />` but used for normal links e.g. `<a href="#nowhere" />`.

```js
const HrefButton = require('./button.styled').HrefButton;

<HrefButton href="#nowhere" mode="light">
  Href Button
</HrefButton>
```
