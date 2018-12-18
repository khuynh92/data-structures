function breadthFirstTraversal(bst) {
  let queue = [];
  let answer = [];
  
  if(bst.root) {
    queue.push(bst.root);
  } else {
    return answer;
  }

  while(queue.length) {
    let node = queue.shift();
    answer.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return answer;
}


export default breadthFirstTraversal