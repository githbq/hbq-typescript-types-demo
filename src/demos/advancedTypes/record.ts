type Recordx<K extends keyof any, T> = {
  [P in K]: T;
};

interface xx {
  a: string;
}

let x: Recordx<number, xx> = { 1: { a: "3" } };

 
