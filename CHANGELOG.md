# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.14.3](https://github.com/WTTJ/welcome-ui/compare/v0.14.2...v0.14.3) (2019-07-10)


### Bug Fixes

* **tabs:** fix tab overflow ([#176](https://github.com/WTTJ/welcome-ui/issues/176)) ([f3793a3](https://github.com/WTTJ/welcome-ui/commit/f3793a3))



### [0.14.2](https://github.com/WTTJ/welcome-ui/compare/v0.14.1...v0.14.2) (2019-07-09)


### Bug Fixes

* export FilePreviewImage ([#168](https://github.com/WTTJ/welcome-ui/issues/168)) ([2eabf1f](https://github.com/WTTJ/welcome-ui/commit/2eabf1f))
* replace window check for ssr ([#175](https://github.com/WTTJ/welcome-ui/issues/175)) ([a6d9f76](https://github.com/WTTJ/welcome-ui/commit/a6d9f76))
* simplify icons in Select ([#169](https://github.com/WTTJ/welcome-ui/issues/169)) ([fe434b1](https://github.com/WTTJ/welcome-ui/commit/fe434b1))



### [0.14.1](https://github.com/WTTJ/welcome-ui/compare/v0.14.0...v0.14.1) (2019-07-05)


### Bug Fixes

* rewrite tooltip using reakit's tooltip ([#166](https://github.com/WTTJ/welcome-ui/issues/166)) ([a3c6069](https://github.com/WTTJ/welcome-ui/commit/a3c6069)), closes [#157](https://github.com/WTTJ/welcome-ui/issues/157)
* styles on tags now stick to the mockups ([#165](https://github.com/WTTJ/welcome-ui/issues/165)) ([155478f](https://github.com/WTTJ/welcome-ui/commit/155478f))



## [0.14.0](https://github.com/WTTJ/welcome-ui/compare/v0.13.0...v0.14.0) (2019-07-04)


### Bug Fixes

* adds default size (lg) on InputText component ([#154](https://github.com/WTTJ/welcome-ui/issues/154)) ([9d06df9](https://github.com/WTTJ/welcome-ui/commit/9d06df9))
* forward ref on button ([#163](https://github.com/WTTJ/welcome-ui/issues/163)) ([ba15da3](https://github.com/WTTJ/welcome-ui/commit/ba15da3)), closes [#153](https://github.com/WTTJ/welcome-ui/issues/153)
* use rem instead of px for icons ([#160](https://github.com/WTTJ/welcome-ui/issues/160)) ([c826451](https://github.com/WTTJ/welcome-ui/commit/c826451)), closes [#159](https://github.com/WTTJ/welcome-ui/issues/159)


### Features

* input with tags ([#149](https://github.com/WTTJ/welcome-ui/issues/149)) ([36aecc6](https://github.com/WTTJ/welcome-ui/commit/36aecc6)), closes [#74](https://github.com/WTTJ/welcome-ui/issues/74) [#156](https://github.com/WTTJ/welcome-ui/issues/156)


### refactor

* refactor tabs ([#161](https://github.com/WTTJ/welcome-ui/issues/161)) ([cd4ad6e](https://github.com/WTTJ/welcome-ui/commit/cd4ad6e)), closes [#158](https://github.com/WTTJ/welcome-ui/issues/158)


### BREAKING CHANGES

* Tabs now stick to reakit API



## [0.13.0](https://github.com/WTTJ/welcome-ui/compare/v0.12.0...v0.13.0) (2019-07-03)


### Bug Fixes

*  styles on radioTabs and selects after merge of pr [#147](https://github.com/WTTJ/welcome-ui/issues/147) ([#150](https://github.com/WTTJ/welcome-ui/issues/150)) ([0a3fba0](https://github.com/WTTJ/welcome-ui/commit/0a3fba0))
* add missing menu icon ([#148](https://github.com/WTTJ/welcome-ui/issues/148)) ([b05ebb8](https://github.com/WTTJ/welcome-ui/commit/b05ebb8)), closes [#142](https://github.com/WTTJ/welcome-ui/issues/142)
* allow null values for datetimepicker ([#140](https://github.com/WTTJ/welcome-ui/issues/140)) ([8e8ab56](https://github.com/WTTJ/welcome-ui/commit/8e8ab56))
* lineheight problem on fields ([#152](https://github.com/WTTJ/welcome-ui/issues/152)) ([34a7ff3](https://github.com/WTTJ/welcome-ui/commit/34a7ff3))
* shape prop set to square was buggy ([#151](https://github.com/WTTJ/welcome-ui/issues/151)) ([1b2d64c](https://github.com/WTTJ/welcome-ui/commit/1b2d64c))
* use correct ref to fix FileUpload ([#138](https://github.com/WTTJ/welcome-ui/issues/138)) ([1ac7895](https://github.com/WTTJ/welcome-ui/commit/1ac7895))


### Features

* accessible & controlled pagination ([376ddd8](https://github.com/WTTJ/welcome-ui/commit/376ddd8))
* add size prop to give sizes to field components ([#147](https://github.com/WTTJ/welcome-ui/issues/147)) ([067ac6d](https://github.com/WTTJ/welcome-ui/commit/067ac6d))
* remove activeBar on tabs when had only one item ([#133](https://github.com/WTTJ/welcome-ui/issues/133)) ([dd1e0d8](https://github.com/WTTJ/welcome-ui/commit/dd1e0d8))
* replace Select with new one built on Downshift ([#146](https://github.com/WTTJ/welcome-ui/issues/146)) ([7d3e0c7](https://github.com/WTTJ/welcome-ui/commit/7d3e0c7))



## [0.12.0](https://github.com/WTTJ/welcome-ui/compare/v0.11.0...v0.12.0) (2019-06-27)


### Features

* use reakit on buttons ([#135](https://github.com/WTTJ/welcome-ui/issues/135)) ([3f11e39](https://github.com/WTTJ/welcome-ui/commit/3f11e39))


### refactor

* don't play with font-size ([0cd4022](https://github.com/WTTJ/welcome-ui/commit/0cd4022))


### BREAKING CHANGES

* `rounded` (boolean) prop does not exist and is now replaced by `shape="circle"`.
It affects every `Tag`, `Shape` and `Button` components.
Also fix warnings by filtering props to prevent them of being sent to the dom element

Signed-off-by: Paul-Xavier Ceccaldi <pix@wttj.co>
* - base font size is now the one defined in browser and no longer fixed by welcome-ui
- expose `GlobalStyle` instead of `getBaseStyles`
- use normalize instead of reset, cleaner approach



## [0.11.0](https://github.com/WTTJ/welcome-ui/compare/v0.10.0...v0.11.0) (2019-06-25)


### Bug Fixes

* style on ios safari ([5346029](https://github.com/WTTJ/welcome-ui/commit/5346029))


### Features

* add Reakit to Tabs component ([1543c07](https://github.com/WTTJ/welcome-ui/commit/1543c07))



## [0.10.0](https://github.com/WTTJ/welcome-ui/compare/v0.9.3...v0.10.0) (2019-06-24)


### Features

* add markdown editor ([#124](https://github.com/WTTJ/welcome-ui/issues/124)) ([5787e21](https://github.com/WTTJ/welcome-ui/commit/5787e21))
* add markdown icons ([#128](https://github.com/WTTJ/welcome-ui/issues/128)) ([fe896c2](https://github.com/WTTJ/welcome-ui/commit/fe896c2))



### [0.9.3](https://github.com/WTTJ/welcome-ui/compare/v0.9.2...v0.9.3) (2019-06-20)



### [0.9.2](https://github.com/WTTJ/welcome-ui/compare/v0.9.1...v0.9.2) (2019-06-20)


### Bug Fixes

* add reset style when baseStyle is not called ([#121](https://github.com/WTTJ/welcome-ui/issues/121)) ([b512674](https://github.com/WTTJ/welcome-ui/commit/b512674)), closes [#117](https://github.com/WTTJ/welcome-ui/issues/117)
* tab component styles broken ([b9fdd81](https://github.com/WTTJ/welcome-ui/commit/b9fdd81)), closes [#111](https://github.com/WTTJ/welcome-ui/issues/111)



### [0.9.1](https://github.com/WTTJ/welcome-ui/compare/v0.9.0...v0.9.1) (2019-06-19)


### Bug Fixes

* add missing copy icon ([73144d3](https://github.com/WTTJ/welcome-ui/commit/73144d3))



## [0.9.0](https://github.com/WTTJ/welcome-ui/compare/v0.8.5...v0.9.0) (2019-06-19)


### Features

* add Shape component ([3d00ffd](https://github.com/WTTJ/welcome-ui/commit/3d00ffd))



### [0.8.5](https://github.com/WTTJ/welcome-ui/compare/v0.8.3...v0.8.5) (2019-06-18)



### [0.8.4](https://github.com/WTTJ/welcome-ui/compare/v0.8.3...v0.8.4) (2019-06-18)



### [0.8.3](https://github.com/WTTJ/welcome-ui/compare/v0.8.1...v0.8.3) (2019-06-18)


### Bug Fixes

* margin-bottom on Field components ([688b140](https://github.com/WTTJ/welcome-ui/commit/688b140)), closes [#92](https://github.com/WTTJ/welcome-ui/issues/92)


### Tests

* add tests on Growl and GrowTitle ([c6c8981](https://github.com/WTTJ/welcome-ui/commit/c6c8981))
* Tag ([c123a57](https://github.com/WTTJ/welcome-ui/commit/c123a57))
* Text ([fef8f08](https://github.com/WTTJ/welcome-ui/commit/fef8f08))
* Toggle ([0e3148b](https://github.com/WTTJ/welcome-ui/commit/0e3148b))



### [0.8.2](https://github.com/WTTJ/welcome-ui/compare/v0.8.1...v0.8.2) (2019-06-18)


### Bug Fixes

* margin-bottom on Field components ([688b140](https://github.com/WTTJ/welcome-ui/commit/688b140)), closes [#92](https://github.com/WTTJ/welcome-ui/issues/92)


### Tests

* add tests on Growl and GrowTitle ([c6c8981](https://github.com/WTTJ/welcome-ui/commit/c6c8981))
* Tag ([c123a57](https://github.com/WTTJ/welcome-ui/commit/c123a57))
* Text ([fef8f08](https://github.com/WTTJ/welcome-ui/commit/fef8f08))
* Toggle ([0e3148b](https://github.com/WTTJ/welcome-ui/commit/0e3148b))



### [0.8.1](https://github.com/WTTJ/welcome-ui/compare/v0.8.0...v0.8.1) (2019-06-17)


### Bug Fixes

* wrong exported component ([fb419b0](https://github.com/WTTJ/welcome-ui/commit/fb419b0))



## [0.8.0](https://github.com/WTTJ/welcome-ui/compare/v0.7.0...v0.8.0) (2019-06-17)


### Bug Fixes

* add missing onKeyDown on inputs ([e19226e](https://github.com/WTTJ/welcome-ui/commit/e19226e))


### Features

* add missing date icon ([7279b4f](https://github.com/WTTJ/welcome-ui/commit/7279b4f))


### Tests

* add tests on Label ([07366f9](https://github.com/WTTJ/welcome-ui/commit/07366f9))



## [0.7.0](https://github.com/WTTJ/welcome-ui/compare/v0.6.4...v0.7.0) (2019-06-17)


### Features

* add tiny button ([#90](https://github.com/WTTJ/welcome-ui/issues/90)) ([358566d](https://github.com/WTTJ/welcome-ui/commit/358566d))



### [0.6.4](https://github.com/WTTJ/welcome-ui/compare/v0.6.3...v0.6.4) (2019-06-17)


### Bug Fixes

* rebase package json ([86e6dac](https://github.com/WTTJ/welcome-ui/commit/86e6dac))



### [0.6.3](https://github.com/WTTJ/welcome-ui/compare/v0.6.2...v0.6.3) (2019-06-17)


### Bug Fixes

* add search type for input ([#82](https://github.com/WTTJ/welcome-ui/issues/82)) ([c45d14f](https://github.com/WTTJ/welcome-ui/commit/c45d14f))
* forward onKeyDown on Field ([b4c2c33](https://github.com/WTTJ/welcome-ui/commit/b4c2c33))


### Tests

* add tests on Badge ([#83](https://github.com/WTTJ/welcome-ui/issues/83)) ([38db99a](https://github.com/WTTJ/welcome-ui/commit/38db99a))
* add tests on Box ([#84](https://github.com/WTTJ/welcome-ui/issues/84)) ([db04ce2](https://github.com/WTTJ/welcome-ui/commit/db04ce2))
* add tests on Hint ([056fd07](https://github.com/WTTJ/welcome-ui/commit/056fd07))
