```ts
type Person = { name:string}

type Partial<T> = {
    [P in keyof T]?: T[P];
}; 

type person2 = Partial<Person>; 
```