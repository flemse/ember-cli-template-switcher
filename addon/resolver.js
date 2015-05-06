import Resolver from 'ember/resolver';
import Ember from 'ember';

export default Resolver.reopen({
  moduleNameLookupPatterns: Ember.computed(function(){
    var arr = this._super();
    arr.unshift(this.suffixedPodTemplates);
    arr.unshift(this.suffixedTemplates);
    return arr;
  }),

  suffixedTemplates: function(parsedName) {
    if (parsedName.type === 'template') {
      return this.defaultModuleName(parsedName) + this.screenType(parsedName);
    }
  },
  suffixedPodTemplates: function(parsedName) {
    if (parsedName.type === 'template') {
      return this.podBasedModuleName(parsedName) + this.screenType(parsedName);
    }
  },
  screenType: function(parsedName) {
    var media = parsedName.root.registry.resolve('responsive:media');
    return '.' + media.get('matches.firstObject');
  }
});
