const fizzBuzzTree = (bst) => {
  fizzBuzz(bst.root);
  return bst;
};


function fizzBuzz(node) {
  node.val = changeValue(node.val);
  if(node.right) {
    fizzBuzz(node.right);
  } 
  if(node.left) {
    fizzBuzz(node.left);
  }
  return node;
}


function changeValue(val) {
  if(val % 3 === 0 && val % 5 === 0 ) {
    return 'FizzBuzz';
  } else if (val % 3 === 0) {
    return 'Fizz';
  } else if (val % 5 === 0) {
    return 'Buzz';
  } else {
    return val;
  }
}

export default fizzBuzzTree;