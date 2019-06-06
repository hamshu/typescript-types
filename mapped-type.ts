//Mapped Types
// default readonly type application
interface Point {
    x: number;
    y: number;
  }
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
};
// applying a map type
type ReadonlyPoint = Readonly<Point>;
type ReadonlyPoint = {
    readonly [P in keyof Point]: Point[P]
};
type ReadonlyPoint = {
    readonly [P in "x" | "y"]: Point[P]
};
type ReadonlyPoint = {
    readonly x: Point["x"];
    readonly y: Point["y"];
};
type ReadonlyPoint = {
    readonly x: number;
    readonly y: number;
};

//removal of types
type Mutable<T> = {
    -readonly[P in keyof T]: T[P];
};
type MutablePoint = Mutable<ReadonlyPoint>;
type MutablePoint = {
    -readonly [P in keyof ReadonlyPoint]: ReadonlyPoint[P]
};
type MutablePoint = {
    -readonly [P in "x" | "y"]: ReadonlyPoint[P]
};
type MutablePoint = {
    x: ReadonlyPoint["x"];
    y: ReadonlyPoint["y"];
};
type MutablePoint = {
    x: number;
    y: number;
};