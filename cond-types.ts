//Conditional Types
// T extends U ? X : Y
type NeverNull<T> = T extends null | undefined ? never : T;
// Quick Sample Type
type EmailAddress = string | string[] | null | undefined;
// Applying the NeverNull type to the sample type
type NonNullableEmailAddress = NeverNull<EmailAddress>;
//expand email
type NonNullableEmailAddress = NeverNull<
  | string
  | string[]
  | null
  | undefined
>;
//Map type wrap
type NonNullableEmailAddress =
  | NeverNull<string>
  | NeverNull<string[]>
  | NeverNull<null>
  | NeverNull<undefined>;
// Apply the conditional type
type NonNullableEmailAddress =
  | (string extends null | undefined ? never : string)
  | (string[] extends null | undefined ? never : string[])
  | (null extends null | undefined ? never : null)
  | (undefined extends null | undefined ? never : undefined);
//resolve the conditional type
type NonNullableEmailAddress =
  | string
  | string[]
  | never
  | never;
//compressed
type NonNullableEmailAddress = string | string[];

//predefined conditional type
type NonNullableEmailAddress = NonNullable<EmailAddress>;

type ExtractArrayEmail = Extract<EmailAddress, any[]>;

type ExcludeArrayEmail = Exclude<EmailAddress, any[]>;

type EmailTypes = ReturnType<() => string>;

type addFunction = (a: number, b: number, c:number) => number;
let d: addFunction = (a, b, c) => {
    return a + b + c
}
type dParams = Parameters<typeof d>;

type functionConstructorParms = ConstructorParameters<FunctionConstructor>;

type functionConstructor = InstanceType<FunctionConstructor>;