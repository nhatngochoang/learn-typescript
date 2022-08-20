// infer pulls a type from example, a function.

type ExtractReturnType<T> = T extends (...args: any) => infer R ? R : never;

// this type above takes the return type of a function (there's already a built-in one called ReturnType) so if i do:

declare function generateUUID(): string;
declare const uuid: ExtractReturnType<typeof generateUUID>;
// const uuid: string;
