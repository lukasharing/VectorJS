# VectorJS
Tired of non-complete Vector Class? Here you have, a rich vector class!

It works with different types, and checks for them!
+ `new Vector([number, ..., number])` Arrays!
+ `new Vector(number, ..., number)` Arguments!
+ `new Vector(new Vector(...))` Vectors It self!

Access it components using:
+ `vector.x(), vector.w()` By one component!
+ `vector.get("xy")` By more components!
+ `vector.get("xxxx")` Like GLSL!

Operations:
+ `add` Add!
+ `mult` Scale!
+ `dot` Dot Product!


Rich Operations:
+ `vector.add(1)` Adds one to all components!
+ `vector.add([1,2])` Sum of 2 vectors bi-dimensional, vector + array!
+ `vector.add(vector1, ..., vectorN)` Sum of N vectors!
