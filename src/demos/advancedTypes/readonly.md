```ts
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type person4 = Readonly<Person>;
// person4 === {
//        readonly name: string;
//        readonly age?: number;
//  }

```