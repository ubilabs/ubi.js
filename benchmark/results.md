# Tag: 0.0.0

Node.js v0.10.29

>  {lat, lng}              x 45,113,776 ops/sec ±7.49% (69 runs sampled)
>  [lat, lng]              x 44,985,740 ops/sec ±5.44% (75 runs sampled)
>  this.x                  x 27,652,023 ops/sec ±1.58% (82 runs sampled)
>  this[0]                 x  7,354,062 ops/sec ±0.60% (91 runs sampled)
>  this["x"]               x 27,459,041 ops/sec ±2.29% (83 runs sampled)
>  this[Point.X = "x"]     x  3,819,149 ops/sec ±2.00% (57 runs sampled)
>  this[Point.X = "0"]     x  2,701,053 ops/sec ±1.72% (76 runs sampled)
>  this[Point.X = 0]       x  7,115,258 ops/sec ±0.75% (95 runs sampled)
>  this.coords = [x, y]    x 25,356,121 ops/sec ±1.41% (89 runs sampled)
>  this.coords = arguments x 22,915,119 ops/sec ±1.38% (85 runs sampled)

Chrome 37

> {lat, lng}               x 43,481,943 ops/sec ±0.90% (94 runs sampled)
> [lat, lng]               x 42,429,432 ops/sec ±0.93% (92 runs sampled)
> this.x                   x 26,234,546 ops/sec ±4.41% (65 runs sampled)
> this[0]                  x  3,970,499 ops/sec ±0.96% (92 runs sampled)
> this["x"]                x 28,866,523 ops/sec ±0.87% (93 runs sampled)
> this[Point.X = "x"]      x 24,229,672 ops/sec ±0.86% (89 runs sampled)
> this[Point.X = "0"]      x  2,754,183 ops/sec ±0.89% (94 runs sampled)
> this[Point.X = 0]        x  3,920,693 ops/sec ±0.94% (91 runs sampled)
> this.coords = [x, y]     x 28,300,431 ops/sec ±1.06% (78 runs sampled)
> this.coords = arguments  x 21,834,303 ops/sec ±1.15% (93 runs sampled)
