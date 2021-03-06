(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.ubi = factory();
  }

}(this, function() {
  'use strict';

  // code goes here
  var ubi = function(options) {
    console.log(options);
  };

  return ubi;
}));
