```ts
type Required<T> = {
    [P in keyof T]-?: T[P];
};

type person3 = Required<Person>;
// person3 === {name: string; age: number}
```