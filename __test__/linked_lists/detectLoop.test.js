import {SinglyLinkedList, Node} from '../../src/linked_lists/singlyLinkedList.js'
import detectLoop from '../../src/linked_lists/detectLoop.js';

describe('detect loop', () => {

  let SLL;
  beforeEach(() => {
    SLL = new SinglyLinkedList();
  });

  it('should return false for an empty LL', () => {
    expect(detectLoop(SLL)).toBeFalsy();
  });


  it('should return false for an LL with length of 1', () => {
    SLL.add(1);

    expect(detectLoop(SLL)).toBeFalsy();
  });

  it('should return false for a Long LL', () => {
    SLL.add(1);
    SLL.add(2);
    SLL.add(3);
    SLL.add(4);
    SLL.add(5);
    SLL.add(6);
    SLL.add(7);
    SLL.add(8);

    expect(detectLoop(SLL)).toBeFalsy();
  });

  it('should return true for a Loop', () => {
    SLL.add(1);
    SLL.add(2);
    SLL.add(3);
    SLL.add(4);
    
    SLL.head.next.next.next = SLL.head; 

    expect(detectLoop(SLL)).toBeTruthy();
  });
});

