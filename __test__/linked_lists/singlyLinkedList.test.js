import {SinglyLinkedList, Node} from '../../src/linked_lists/singlyLinkedList.js'

describe('Node', () => {

  it('should create a node when a single argument is given', () => {
    let node = new Node(5);

    expect(node.val).toBe(5);
    expect(node.next).toBeNull();

  });

});
describe('class SinglyLinkedList', () => {
  let sll;

  beforeEach(() => {
    sll = new SinglyLinkedList();
  });

  it('should create a new linked list with an empty head', () => {
    expect(sll.head).toBeNull();
  });

  it('should create the head when adding the first value', () => {
    sll.add(5);
    expect(sll.head.val).toBe(5);
    expect(sll.head.next).toBeNull();

  });

  it('should create additional nodes', () => {
    sll.add(5);
    sll.add(10);
    sll.add(15);

    expect(sll.head.val).toBe(5);
    expect(sll.head.next.val).toBe(10);
    expect(sll.head.next.next.val).toBe(15);
    expect(sll.head.next.next.next).toBeNull();

  });
});