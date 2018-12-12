import {BinarySearchTree} from '../../src/binary_trees/binarySearchTree.js';
import fizzBuzzTree from '../../src/binary_trees/fizzBuzzTree.js';

describe('fizzBuzztree()', () => {

  let BST;
  beforeEach(() => {
    BST = new BinarySearchTree();
  });

  it('should not modify the tree if nothing is divisible by 3 or 5', () => {
    BST.insert(7);
    BST.insert(2);
    BST.insert(8);
    BST.insert(11);
    expect(fizzBuzzTree(BST)).toBe(BST);
  });

  it('should  modify values of the tree if values are divisible by 3 AND 5', () => {
    BST.insert(30);
    BST.insert(15);
    BST.insert(60);
    BST.insert(45);

    let fizzBuzz = fizzBuzzTree(BST);
    expect(fizzBuzz.root.val).toBe('FizzBuzz');
    expect(fizzBuzz.root.left.val).toBe('FizzBuzz');
    expect(fizzBuzz.root.right.val).toBe('FizzBuzz');
  });

  it('should  modify values of the tree if values are divisible by 3 only', () => {
    BST.insert(12);
    BST.insert(6);
    BST.insert(3);
    BST.insert(18);

    let fizzBuzz = fizzBuzzTree(BST);
    expect(fizzBuzz.root.val).toBe('Fizz');
    expect(fizzBuzz.root.left.val).toBe('Fizz');
    expect(fizzBuzz.root.right.val).toBe('Fizz');
  });

  it('should  modify values of the tree if values are divisible by 5 only', () => {
    BST.insert(20);
    BST.insert(25);
    BST.insert(10);
    BST.insert(5);

    let fizzBuzz = fizzBuzzTree(BST);
    expect(fizzBuzz.root.val).toBe('Buzz');
    expect(fizzBuzz.root.left.val).toBe('Buzz');
    expect(fizzBuzz.root.right.val).toBe('Buzz');
  });

  it('should  modify/not modify values of a mixed tree', () => {
    BST.insert(22);
    BST.insert(30);
    BST.insert(10);
    BST.insert(4);
    BST.insert(3);
    BST.insert(23);

    let fizzBuzz = fizzBuzzTree(BST);
    expect(fizzBuzz.root.val).toBe(22);
    expect(fizzBuzz.root.left.val).toBe('Buzz');
    expect(fizzBuzz.root.right.val).toBe('FizzBuzz');
    expect(fizzBuzz.root.left.left.val).toBe(4);
    expect(fizzBuzz.root.left.left.left.val).toBe('Fizz');
  });

});