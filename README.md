# Data Structures and Algorithms

### Purpose
This repository is to practice data structures, along with test driven development using Jest.

### How to install
npm is required to run the tests on this project. if you do not have npm, visit the npm website (link below)

run  the command `npm i` to download the project dependencies.

### View Tests

run the command `npm test` to view test acceptance and coverage.

## Data Structures

### Binary Search Trees
-----------------------

example of the structure of the binary tree

```
{

root Node {
  val: 5,
  right: Node {
    val: 10,
    left: null,
    right: null,
  },
  left: Node {
    val: 2,
    left: null,
    right: null,
  }
}

}
```

#### methods

- `.insert(value)`

Inserts a new node into the binary search tree

#### additional functions

- `isBST(binarySearchTree)`  

Checks if a binary tree is a binary search tree.

__output__

- __*must input a binary tree*__ if input is not a binary tree
- __*false*__ if input is not a binary search tree
- __*true*__ if input is a binary search tree

- `fizzBuzzTree(binarySearchTree)`  

Converts a Binary Tree's values. If the value is divisible by 3, the value will be turned to 'Fizz', If the value is divisible by 5, the value will be turned to 'Buzz', if the value is divisible both by 3 and 5, the value is changed to 'FizzBuzz'.

__input__

- __*ordinary binary tree*__

__output__

- __*converted binary tree*__



### Sorting
-----------
There are current 4 different sort methods. Each take a single argument of an array

1. bubbleSort()
1. selectionSort()
1. mergeSort()
1. quickSort()

### Technologies Used

[npm](https://www.npmjs.com/)
[Jest](https://jestjs.io/)
[Wallaby JS](https://wallabyjs.com/)
