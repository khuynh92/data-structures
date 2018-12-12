import {BinarySearchTree} from '../../src/binary_trees/binarySearchTree.js';
import maximumDepth from '../../src/binary_trees/maximimDepth.js';

describe('maximumDepth()', () => {
  
  let BST;
  beforeEach(() => {
    BST = new BinarySearchTree();
  });

  it('should return 0 if the root node is null', () => {
    expect(maximumDepth(BST)).toBe(0);
  });

  it('should return the maximum depth for a tree of a single depth', () => {
    BST.insert(5);
    expect(maximumDepth(BST)).toBe(1);
  });

  it('should return the maximum depth for a tree, even left/right heights test', () => {
    BST.insert(20);
    BST.insert(30);
    BST.insert(15);
    BST.insert(35);
    BST.insert(7);
    BST.insert(17);
    expect(maximumDepth(BST)).toBe(3);
  });

  it('should return the maximum depth for a tree, random tree test', () => {
    BST.insert(20);
    BST.insert(30);
    BST.insert(15);
    BST.insert(35);
    BST.insert(37);
    BST.insert(39);
    BST.insert(17);
    BST.insert(16);
    BST.insert(100);
    expect(maximumDepth(BST)).toBe(6);
  });

});