// Mapped Conditional types
// A mapped type + a conditional type
type NonNullablePropertyKeys<T> = {
    [P in keyof T]: null extends T[P] ? never : P
}[keyof T];
// another sample type and applied
type User = {
    name: string;
    email: string | null;
};

type NonNullableUserPropertyKeys = NonNullablePropertyKeys<User>;
//resolve the type
type NonNullableUserPropertyKeys = {
    [P in keyof User]: null extends User[P] ? never : P
}[keyof User];
// resolve the map
type NonNullableUserPropertyKeys = {
    [P in "name" | "email"]: null extends User[P] ? never : P
}[keyof User];
// expand the map
type NonNullableUserPropertyKeys = {
    name: null extends User["name"] ? never : "name";
    email: null extends User["email"] ? never : "email";
}[keyof User];
// resolve the ingested type
type NonNullableUserPropertyKeys = {
    name: null extends string ? never : "name";
    email: null extends string | null ? never : "email";
}[keyof User];
// apply the conditional
type NonNullableUserPropertyKeys = {
    name: "name";
    email: never;
}[keyof User];
// resolve the keyof
type NonNullableUserPropertyKeys = {
    name: "name";
    email: never;
}["name" | "email"];
// resolve the union
type NonNullableUserPropertyKeys =
  | { name: "name"; email: never }["name"]
  | { name: "name"; email: never }["email"];
// resolve the conditional blocks
type NonNullableUserPropertyKeys =
  | "name"
  | never;
// compress the type
type NonNullableUserPropertyKeys = "name";