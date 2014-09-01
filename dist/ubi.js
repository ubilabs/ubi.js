/*! ubi - v0.0.0
 *  Release on: 2014-09-01
 *  Copyright (c) 2014 Ubilabs
 *  Licensed MIT */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.ubi = factory();
  }

}(this, function () {
  'use strict';

  // code goes here
  var ubi = function (options) {
    console.log(options);
  };

  return ubi;
}));
