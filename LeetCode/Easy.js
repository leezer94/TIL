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
  // console.log(removeDuplicates(nums));
}
{
  const strStr = function (haystack, needle) {
    if (haystack.includes(needle)) {
      return haystack.indexOf(needle);
    } else if (needle.length === 0) {
      return 0;
    } else {
      return -1;
    }
  };

  let haystack = '';
  let needle = '';
  // console.log(strStr(haystack, needle));
}
{
  const searchInsert = function (nums, target) {
    if (nums.includes(target)) {
      return nums.indexOf(target);
    } else {
      nums.push(target);
      nums.sort((a, b) => a - b);
      return nums.indexOf(target);
    }
  };

  let nums = [1, 3, 5, 6];
  let target = 0;

  // console.log(searchInsert(nums, target));
}
{
  var maxSubArray = function (nums) {
    if (nums.length === 1) return nums;
    nums = [...new Set(nums)];
    console.log(nums);
  };
  let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  // console.log(maxSubArray(nums));
}
{
  const lengthOfLastWord = function (s) {
    const newArr = s.trim().split(' ');
    const len = newArr.length - 1;
    return newArr[len].length;
  };

  let s = '   fly me   to   the moon  ';
  // console.log(lengthOfLastWord(s));
}
{
  const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i] = digits[i] + 1;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
    //  [9,9] => [1,0,0]
    digits.unshift(1);
    return digits;
  };

  let digits = [1, 2, 9];
  // console.log(plusOne(digits));
}
{
  const addBinary = function (a, b) {
    // this print bigger than the primitive type numer 2^53-1
    // 0b is the Python prefix for the representation of binary numbers.
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
  };
  let a =
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
  let b =
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';
  // console.log(addBinary(a, b));
}
{
  const mySqrt = function (x) {
    x = Math.sqrt(x);
    return Math.floor(x);
  };
  let x = 8;
  // console.log(mySqrt(x));
}
{
  const climbStairs = function (n) {
    // related algorithm = fibonacci sequence
    // (for examply 3 stpes yields 3 combinations to mae it to the third step)
    // this is simply the sim of te previous two step combinations
    // if( n === 2 )return 2,  if (n === 3) return 3, if( n === 4 ) return 5;
    // Base Case
    // if (n <= 1) return 1;
    // otherwise this is basically fibonacci sequence f(n) = f(n-1) + f(n-2)
    // return climbStairs(n - 1) + climbStairs(n - 2);
    // time out

    const cache = {
      0: 1,
      1: 1,
    };
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
  };
  let n = 45;
  // console.log(climbStairs(n));
}
{
  var isPalindrome = function (s) {
    let newStr = s.toLowerCase().match(/[a-z0-9]/g);

    if ([...new Set(newStr)].length === 1) {
      return true;
    }
    if (newStr === null) {
      return true;
    }
    const len = Math.floor(newStr.length / 2);
    const front = newStr.slice(0, len).reverse().join('');
    const end = newStr.slice(len, newStr.length).join('');
    const frontString = newStr.slice(0, len).reverse().join('');
    const endString = newStr.slice(len + 1, newStr.length).join('');

    if (frontString === endString || front === end) {
      return true;
    } else {
      return false;
    }
  };

  let s = 'A man, a plan, a canal: Panama';
  // let s = '        ';
  // let s = 'abba';
  // console.log(isPalindrome(s));
}
{
  const singleNumber = function (nums) {
    // needs to be revised
    // stands for hashTable
    const ht = {}; //{1000:4 , 4: 2200}

    for (const num of nums) {
      // this single line code will create tali count?
      ht[num] = ht[num] + 1 || 1;
    }

    for (const key in ht) {
      if (ht[key] === 1) {
        return key;
      }
    }
  };

  let nums = [4, 1, 2, 1, 2];
  // console.log(singleNumber(nums));
}
{
  // greedy algorithms

  const getGreedy = (a, b) => {
    let count = 0;
    
    if (a % b === 0) {
      return a / b;
    } else {

      let n = a - 1;
      n %= b;
      count++;
    }
    return count;
  };

  let a = 21;
  let b = 5;

  console.log(getGreedy(a, b));
}
