/* globals Benchmark, benchmarks */


var  IS_NODE = typeof require === 'function';

if (IS_NODE) {
  Benchmark = require('benchmark');
  benchmarks = require('beautify-benchmark');
}

var suite = new Benchmark.Suite('Point Constructors');

function generator() {
  var p = new Point(Math.random(), Math.random());
}


suite.add('{lat, lng}', function() {
  var p = {
    lat: Math.random(),
    lng: Math.random()
  };
});

suite.add('[lat, lng]', function() {
  var p = [
    Math.random(),
    Math.random()
  ];
});

var tests = {

  'this.x': function() {
    var Point = function(x, y) {
      this.x = x;
      this.y = y;
    };
  },

  'this[0]': function() {
    var Point = function(x, y) {
      this[0] = x;
      this[1] = y;
    };
  },

  'this["x"]': function() {
    var Point = function(x, y) {
      this['x'] = x;
      this['y'] = y;
    };
  },

  'this[Point.X = "x"]': function() {
    var Point = function(x, y) {
      this[Point.X] = x;
      this[Point.Y] = y;
    };

    Point.X = 'x';
    Point.Y = 'y';
  },

  'this[Point.X = "0"]': function() {
    var Point = function(x, y) {
      this[Point.X] = x;
      this[Point.Y] = y;
    };

    Point.X = '0';
    Point.Y = '1';
  },

  'this[Point.X = 0]': function() {
    var Point = function(x, y) {
      this[Point.X] = x;
      this[Point.Y] = y;
    };

    Point.X = 0;
    Point.Y = 1;
  },

  'this.coords = [x, y]': function() {
    var Point = function(x, y) {
      this.coords = [x, y];
    };
  },

  'this.coords = arguments': function() {
    var Point = function() {
      this.coords = arguments;
    };
  }
};

for (var label in tests) {
  suite.add(label, generator, {
    setup: tests[label]
  });
}

console.log('Running suite ...');

function cycle(event) {
  if (IS_NODE) {
    benchmarks.add(event.target);
  } else {
    console.log(String(event.target));
  }
}

function complete() {
  if (IS_NODE) {
    benchmarks.log();
  } else {
    console.log(arguments);
  }
}

suite
  .on('cycle', cycle)
  .on('complete', complete)
  .run({ 'async': true });