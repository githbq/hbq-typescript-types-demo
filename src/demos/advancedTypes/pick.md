```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type person5 = Pick<Person, "name">;
// person5 === {name: string}
```