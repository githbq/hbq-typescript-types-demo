```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type person6 = Record<'name' | 'age', string>
// person6 === {name: string; age: string}

```