{
  const addTwoNumbers = function (l1, l2) {
    let result = 0;
    function reverse(arr) {
      let reversed = [];
      while (arr.length) {
        reversed.push(arr.pop());
      }
      return reversed;
    }
    l1 = reverse(l1).join('');
    l2 = reverse(l2).join('');

    result += Number(l1) + Number(l2);

    return result
      .toString()
      .split('')
      .map((x) => Number(x))
      .reverse();
  };
  let l1 = [0];
  let l2 = [0];

  // console.log(addTwoNumbers(l1, l2));
}

{
  const isPalindrome = function (x) {
    let reverse = x.toString().split('').reverse().join('');

    if (x < 0 || x !== Number(reverse)) {
      return false;
    } else if (x === Number(reverse)) {
      return true;
    }
  };

  let x = 10;
  // console.log(isPalindrome(x));
}
{
  const romanToInt = function (s) {
    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const current = roman[s[i]];
      const next = roman[s[i + 1]];
      if (current < next) {
        result += next - current;
        i++;
      } else {
        result += current;
      }
    }
    return result;
  };
  let s = 'III';
  // console.log(romanToInt(s));
}
{
  const longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters fo the first string
    for (let i = 0; i <= strs[0].length; i++) {
      // Loop through the other strings
      for (let j = 0; j < strs.length; j++) {
        // Check if this character is also present in the same position of each string
        if (strs[0][i] !== strs[j][i]) {
          return strs[0].slice(0, i);
        }
      }
    }
    return strs[0];
  };

  let strs = ['flower', 'flow', 'flight'];
  // console.log(longestCommonPrefix(strs));
}
{
  const isValid = function (s) {
    // Create a Stack
    let stack = [];
    // Loop through each element in the String
    for (let i = 0; i < s.length; i++) {
      let char = stack[stack.length - 1];

      // If you encounter a starting bracket, push it onto the stack
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
        console.log(s[i]);
        console.log(char);
        // Pop the opening bracket off the stack,
        // If there is a corresponding closing bracket in the String
      } else if (
        (char === '(' && s[i] === ')') ||
        (char === '{' && s[i] === '}') ||
        (char === '[' && s[i] === ']')
      ) {
        stack.pop();
      } else return false;
    }
    console.log(stack);
    // Check empty stack
    return stack.length ? false : true;
  };

  let s = '[{()}]';
  // console.log(isValid(s));
}
{
  const removeDuplicates = function (nums) {
    let uniqueCursor = 1;

    // Loop through the array of number
    for (let i = 1; i < nums.length; i++) {
      // Find unique values
      if (nums[i] !== nums[i - 1]) {
        // Move unique values to follow the last unique value found
        nums[uniqueCursor] = nums[i];

        // Move the unique value cursor onward
        uniqueCursor++;
      }
    }
    return uniqueCursor;
  };

  let nums = [1, 1, 2];
  console.log(removeDuplicates(nums));
}
