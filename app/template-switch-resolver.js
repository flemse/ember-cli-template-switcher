import Resolver from 'ember/resolver';


export default Resolver.extend({
  resolveTemplate: function(name) {
    var media = name.root.registry.resolve('responsive:media');
    var screen = media.get('classNames').replace('media-', '');
    var lookup = this._super(this.addSuffix(name, screen));
    if(lookup) {
      return lookup;
    } else {
      this._super(name);
    }
  },
  addSuffix: function(obj, suffix) {
    var tmp = Object.create(obj);
    if(suffix) {
      tmp.fullName += '-' + suffix;
      tmp.fullNameWithoutType += '-' + suffix;
    }
    return tmp;
  }
});
