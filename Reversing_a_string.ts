function reverseString(str: any) {
  const stack = [];
  let start = 0;
  let end = str.length - 1;
  str = str.split('');
  while (end > start) {
    stack.push(str[start]);
    str[start] = str[end];
    start++;
    end--;
  }

  while (stack.length !== 0) {
    str[start] = stack.pop();
    start++;
  }

  str = str.join('');

  console.log(str, stack);
}

reverseString('abcd');
