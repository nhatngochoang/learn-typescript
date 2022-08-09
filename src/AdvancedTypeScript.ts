// REMOVE a member of a Union Type
type Letters = "a" | "b" | "c";

type RemoveC<T> = T extends "c" ? never : T;

type WithoutC = RemoveC<Letters>;
