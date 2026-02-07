function zipList<T, V>(array1: T[], array2: V[]): unknown[] | -1 {
  if (array1.length !== array2.length) {
    return -1;
  }

  const result: unknown[] = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
  }
  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
