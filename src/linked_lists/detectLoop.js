export default function (list) {
  if (list.head && list.head.next) {
    let turtle = list.head;
    let rabbit = list.head.next;
    while (turtle.val !== rabbit.val) {
      if (!rabbit.next || !rabbit.next.next || !turtle.next) {
        return false;
      }
      turtle = turtle.next;
      rabbit = rabbit.next.next;
    }
    return true;
  } else {
    return false;
  }
}


