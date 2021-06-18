type Flatten<T> = T extends Array<infer U> ? U : never
 
type T0 = [string, number]
type T1 = Flatten<T0> // string | number