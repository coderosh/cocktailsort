import sort from '../src/'

describe('sort', () => {
  it('should sort the array of numbers(ascending)', () => {
    expect(sort([4, 90, 2, 41, -1, 0])).toEqual([-1, 0, 2, 4, 41, 90])
  })

  it('should sort the array of numbers(descending)', () => {
    expect(sort([1, 9, 20, 2, 3], (a, b) => b - a)).toEqual([20, 9, 3, 2, 1])
  })
})
