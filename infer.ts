// infer keyword
type ReturnType<T> =
  T extends (...args: any[]) => infer R
    ? R
    : any;

type A = ReturnType<() => string>;         // string
type B = ReturnType<() => () => any[]>;    // () => any[]
type C = ReturnType<typeof Math.random>;   // number
type D = ReturnType<typeof Array.isArray>; // boolean

type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>;  // string
type T11 = Foo<{ a: string, b: number }>;  // string | number
