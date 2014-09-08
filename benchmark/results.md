# Tag: 0.0.0

Node.js v0.10.29

```
{lat, lng}              x 46,270,957 ops/sec ±7.52% (67 runs sampled)
[lat, lng]              x 44,391,656 ops/sec ±5.30% (75 runs sampled)
Float64Array            x    138,336 ops/sec ±2.15% (82 runs sampled)
Float32Array            x    137,204 ops/sec ±2.00% (86 runs sampled)
this.x                  x 27,937,238 ops/sec ±2.76% (82 runs sampled)
this[0]                 x  7,124,366 ops/sec ±0.84% (91 runs sampled)
this["x"]               x 25,621,212 ops/sec ±2.66% (77 runs sampled)
this[Point.X = "x"]     x  4,017,639 ops/sec ±0.81% (67 runs sampled)
this[Point.X = "0"]     x  4,363,098 ops/sec ±0.53% (95 runs sampled)
this[Point.X = 0]       x  6,940,152 ops/sec ±0.80% (92 runs sampled)
this.coords = [x, y]    x 23,640,556 ops/sec ±2.33% (83 runs sampled)
this.coords = arguments x 19,271,931 ops/sec ±1.38% (87 runs sampled)
```

Chrome 37

```
{lat, lng}              x 44,629,757 ops/sec ±0.78% (95 runs sampled)
[lat, lng]              x 43,349,852 ops/sec ±0.67% (95 runs sampled)
Float64Array            x  3,135,901 ops/sec ±0.70% (93 runs sampled)
Float32Array            x  3,107,350 ops/sec ±0.71% (94 runs sampled)
this.x                  x 24,466,811 ops/sec ±0.73% (95 runs sampled)
this[0]                 x  3,938,281 ops/sec ±0.70% (92 runs sampled)
this["x"]               x 25,682,593 ops/sec ±0.66% (81 runs sampled)
this[Point.X = "x"]     x 20,731,120 ops/sec ±2.28% (91 runs sampled)
this[Point.X = "0"]     x  2,729,310 ops/sec ±0.78% (92 runs sampled)
this[Point.X = 0]       x  3,912,656 ops/sec ±0.72% (94 runs sampled)
this.coords = [x, y]    x 23,634,167 ops/sec ±0.78% (84 runs sampled)
this.coords = arguments x 18,039,964 ops/sec ±0.79% (95 runs sampled)
```

