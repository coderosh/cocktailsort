// https://www.geeksforgeeks.org/cocktail-sort/

const fn = (a: any, b: any) => a - b

const swap = (arr: any[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * Cocktail sort
 * @param arr - Input Array
 * @param cmpFn  - Compare Function
 */
function sort<T = any>(arr: T[], cmpFn: (a: T, b: T) => number = fn) {
  let swapped = true
  let begin = 0
  let end = arr.length

  while (swapped) {
    swapped = false
    for (let i = begin; i < end - 1; ++i) {
      if (cmpFn(arr[i], arr[i + 1]) > 0) {
        swap(arr, i, i + 1)
        swapped = true
      }
    }

    if (!swapped) break

    swapped = false
    end--

    for (let i = end - 1; i >= begin; i--) {
      if (cmpFn(arr[i], arr[i + 1]) > 0) {
        swap(arr, i, i + 1)
        swapped = true
      }
    }

    begin++
  }

  return arr
}

export default sort
