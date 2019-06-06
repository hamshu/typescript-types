// Unknown is typesafe version of any

let value: unknown;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK
value = Symbol("type");   // OK

// unknown can't be reassigned
let value1: unknown = value;   // OK
let value2: any = value;       // OK
let value3: boolean = value;   // Error
let value4: number = value;    // Error
let value5: string = value;    // Error
let value6: object = value;    // Error
let value7: any[] = value;     // Error
let value8: Function = value;  // Error

// Unknown prevents access of the member as well, the main benefit is type safety over any
value.foo.bar;  // Error
value.trim();   // Error
value();        // Error
new value();    // Error
value[0][1];    // Error

if(typeof value === 'function') {
    value();
} else if(value instanceof Date) {
    value.toISOString();
} else {
    value();
    value.toISOString();
}