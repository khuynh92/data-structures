const isPalindrome = (str) => {
  
  let cleanStr = str.replace(/[^\dA-za-z]/g, '').toLowerCase();
  
  if(cleanStr.length <= 1) {
    return cleanStr;
  }
  
  if(cleanStr[0] === cleanStr[cleanStr.length - 1]){
    let newStr = cleanStr.slice(1, cleanStr.length - 1);
    return isPalindrome(newStr);
  } else {
    return false;
  }
};

export default isPalindrome;