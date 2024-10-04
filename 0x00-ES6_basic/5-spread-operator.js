export default function concatArrays(array1, array2, string) {
  const combined = [...array1, ...array2, ...string];
  return combined;
}
