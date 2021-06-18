function extend<T, U>(first: T, second: U): T & U {
  for (const key in second) {
    (first as T & U)[key] = second[key] as any;
  }
  return first as T & U;
}
