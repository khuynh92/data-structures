const maximumDepth = (bst) => {
  return checkDepth(bst.root);
};

function checkDepth(node) {
  if(!node) {
    return 0;
  }

  let depth = 1;

  let left = depth + checkDepth(node.left);
  let right = depth + checkDepth(node.right);

  return left > right ? left : right;

}

export default maximumDepth;