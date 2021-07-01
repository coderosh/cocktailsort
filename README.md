# cocktailsort

> Cocktail Sort (bidirectional bubble sort) extends bubble sort by operating in two directions. It improves on bubble sort by more quickly moving items to the beginning of the list.

<a href="https://npmjs.com/package/cocktailsort"><img alt="NPM" src="https://img.shields.io/npm/v/cocktailsort" /></a>
<a href="https://github.com/coderosh/cocktailsort"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
<a href="#"><img alt="CI" src="https://img.shields.io/github/workflow/status/coderosh/cocktailsort/CI"></a>
<a href="https://github.com/coderosh/cocktailsort"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>

## Installation

```sh
npm install cocktailsort

# OR with yarn
yarn add cocktailsort
```

## Usage

```js
const sort = require('cocktailsort')
// OR import sort from 'cocktailsort'

// ascending
sort([4, 2, 0, -1, 9]) // [-1, 0, 2, 4, 9]

// descending
sort([4, 2, 0, -1, 9], (a, b) => b - a) // [9, 5, 2, 0, -1]

// array of objects as input
sort([{ i: 10 }, { i: 2 }, { i: 9 }], (a, b) => a.i - b.i) // [{i: 2}, {i: 9}, {i: 10}]
```
