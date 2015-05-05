/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-template-switcher',
  included: function template_swithcer_included(app) {
    this._super.included.apply(this, arguments);

    app._podTemplatePatterns = function() {
      return this.registry.extensionsForType('template').map(function(extension) {
        return new RegExp('template.*.' + extension + '$');
      });
    };
  }
};
