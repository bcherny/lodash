/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see mapKeys
 * @example
 *
 * const users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * }
 *
 * mapValue(users, ({ age }) => age)
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValue<T extends object, K extends keyof T, U>(
  object: T,
  iteratee: (value: T[K], key: K, object: T) => U
): Record<K, U> {
  object = Object(object)
  const result: Record<K, U> = {} as any

  Object.keys(object).forEach((key: K) => {
    result[key] = iteratee(object[key], key, object)
  })
  return result
}

export default mapValue
