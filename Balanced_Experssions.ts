const balancedExpression = (str: string) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (isLeftBracket(str[i])) {
      stack.push(str[i]);
    }

    if (isRightBracket(str[i])) {
      if (stack.length === 0) return false;
      const top = stack.pop();
      console.log(top);
      if (!isBracketMatch(top, str[i])) return false;
    }
  }
  if (stack.length !== 0) {
    return false;
  }

  return true;
};

const leftBrackets = ['<', '[', '(', '{'];
const rightBrackets = ['>', ']', ')', '}'];
function isLeftBracket(ch: string) {
  const isFound = leftBrackets.find(char => char === ch);
  return isFound;
}
function isRightBracket(ch: string) {
  const isFound = rightBrackets.find(char => char === ch);
  return isFound;
}

function isBracketMatch(left, right) {
  return leftBrackets.indexOf(left) === rightBrackets.indexOf(right);
}

console.log(balancedExpression('(({}))'));
