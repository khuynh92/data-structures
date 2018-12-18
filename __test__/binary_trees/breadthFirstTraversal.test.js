import {BinarySearchTree} from '../../src/binary_trees/binarySearchTree.js';
import breadthfirstTraversal from '../../src/binary_trees/breadthFirstTraversal.js';

describe('breadthFirstTraversal()', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('should work on empty trees', () => {
    expect(breadthfirstTraversal(bst)).toEqual([]);
  });

  it('should work on 1 node trees', () => {
    bst.insert(5);
    expect(breadthfirstTraversal(bst).length).toEqual(1);
    expect(breadthfirstTraversal(bst)).toEqual([5]);

  });

  it('should work on large trees', () => {
    bst.insert(15);
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);
    bst.insert(3);
    bst.insert(25);
    bst.insert(30);
    bst.insert(13);

    expect(breadthfirstTraversal(bst).length).toEqual(8);
    expect(breadthfirstTraversal(bst)).toEqual([15, 10, 20, 5, 13, 25, 3, 30]);


  });
});