function reverseString(str: any) {
  const stack = [];
  let start = 0;
  let end = str.length - 1;
  // convert to an array
  str = str.split('');
  while (end > start) {
    
    stack.push(str[start]);
    // get the end elment a head 
    str[start] = str[end];
    start++;
    end--;
  }
 // compelte reversing 
  while (stack.length !== 0) {
    str[start] = stack.pop();
    start++;
  }

  str = str.join('');

  console.log(str, stack);
}

reverseString('abcd');
