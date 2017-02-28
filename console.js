function customConsole() {
  window.emv = function(id) {
    if (!isNaN(id) || id.indexOf('ember') === -1) {
      id = 'ember' + id
    }
    return Ember.View.views[id];
  };
  window.emkeys = function(obj, includeUnderscore) {
    let meta = obj['__ember_meta__'];
    let keys = [];

    let desc = meta && meta.descs;
    if (desc) {
      for (key in desc) {
        keys.push(key);
      }
    }

    keys = keys.concat(Object.keys(obj));
    ret = [];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (!includeUnderscore && key.startsWith('_')) {
        continue;
      }
      if (typeof(obj.get(key)) !== 'function') {
        ret.push(key);
      }
    }
    return ret;
  };
  window.emkeysAll = function(obj) {
    return window.emkeys(obj, true);
  };
  window.emshow = function(obj) {
    let keys = window.emkeys(obj);
    let ret = {};
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      ret[key] = obj.get(key);
    }
    return ret;
  }
  window.emp = function(id) {
    return window.emv(id) + '';
  };
}

var script = document.createElement('script'),
    code   = document.createTextNode('(' + customConsole + ')();');
script.appendChild(code);
(document.body || document.head || document.documentElement).appendChild(script);
