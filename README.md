# Ember-cli-template-switcher

Allows you to write templates specific to the current screensize.
The detection of screensizes is based on [ember-responsive](https://github.com/freshbooks/ember-responsive).
## Installation

## Usage

Examples:
```
application.mobile.hbs
```
```
application.desktop.hbs
```
```
application.hbs
```

the extensions are directly related to the names given in [app/breakpoints.js](https://github.com/freshbooks/ember-responsive#getting-started) and can be overriden.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

Thanks to the author of ember-responsive for providing primitives for this addon.
