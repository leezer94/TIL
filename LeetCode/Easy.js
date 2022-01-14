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
  const removeDuplicates = function (nums) {};

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
  const maxSubArray = function (nums) {
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
  // const isPalindrome = function (s) {
  //   let newStr = s.toLowerCase().match(/[a-z0-9]/g);

  //   if ([...new Set(newStr)].length === 1) {
  //     return true;
  //   }
  //   if (newStr === null) {
  //     return true;
  //   }
  //   const len = Math.floor(newStr.length / 2);
  //   const front = newStr.slice(0, len).reverse().join('');
  //   const end = newStr.slice(len, newStr.length).join('');
  //   const frontString = newStr.slice(0, len).reverse().join('');
  //   const endString = newStr.slice(len + 1, newStr.length).join('');

  //   if (frontString === endString || front === end) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  function isPalindrome(s) {
    // Sanitize the input string
    s = s.toLowerCase().replace(/[\W_]/g, '');

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }

      left++;
      right--;
    }
    return true;
  }
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

  // console.log(getGreedy(a, b));
}
{
  const convertToTitle = function (n) {
    let string = '';
    let key = [
      'Z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
    ];
    // using modulo

    if (n <= 0) {
      return string;
    }

    while (n > 0) {
      let place = n % 26;
      string = key[place] + string;

      n = place === 0 ? Math.floor(n / 26) - 1 : Math.floor(n / 26);
    }

    return string;
  };

  let columnNumber = 701;
  // console.log(convertToTitle(columnNumber));
}
{
  const intersection = function (num1, num2) {
    let intersec = [];

    num1.map((num) => {
      if (num2.includes(num)) {
        intersec.push(num);
      }
    });

    intersec = [...new Set(intersec)];

    return intersec;
  };

  const num1 = [1, 2, 2, 1];
  const num2 = [2, 2];

  // console.log(intersection(num1, num2));
}
{
  const maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let sell = 1; sell < prices.length; sell++) {
      let sellPrice = prices[sell];
      console.log(sellPrice);
      let profit = sellPrice - minPrice;

      console.log(
        `sellPrice : ${sellPrice} -  minPrice : ${minPrice} = ${profit}`
      );

      maxProfit = Math.max(maxProfit, profit);

      if (sellPrice < minPrice) minPrice = sellPrice;
    }

    return maxProfit;
  };

  let prices = [7, 3, 5, 1, 6, 4];
  // console.log(maxProfit(prices));
}
{
  const twoSum = function (nums, target) {
    const previousValues = {};

    for (let i = 0; i < nums.length; i++) {
      const curretNumber = nums[i];
      const neededValue = target - curretNumber;
      const index2 = previousValues[neededValue];

      if (index2 in previousValues) {
        return [index2, i];
      } else {
        previousValues[curretNumber] = i;
      }
    }
  };

  let nums = [2, 7, 11, 15];
  let target = 9;

  // console.log(twoSum(nums, target));
}
{
  const maxSubArray = function (nums) {
    let localMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
      localMax = Math.max(nums[i], localMax + nums[i]);

      if (localMax > globalMax) {
        globalMax = localMax;
      }
    }

    return globalMax;
  };

  // let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let nums = [1];
  // let nums = [5, 4, -1, 7, 8];
  // let nums = [1, 2, -1, -2, 2, 1, -2, 1];

  // console.log(maxSubArray(nums));
}
{
  var majorityElement = function (nums) {
    const counts = {};
    const majorityNum = Math.floor(nums.length / 2);

    for (const num of nums) {
      if (!counts[num]) {
        counts[num] = 0;
      }

      counts[num]++;
    }

    for (const key in counts) {
      if (counts[key] > majorityNum) {
        return key;
      }
    }
  };

  // let nums = [3, 2, 3]; // 3
  let nums = [2, 2, 1, 1, 1, 2, 2]; // 2
  // console.log(majorityElement(nums));
}
{
  var containsDuplicate = function (nums) {
    const len = nums.length;
    const removedDupLen = [...new Set(nums)].length;

    return len === removedDupLen ? false : true;
  };

  let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  // console.log(containsDuplicate(nums));
}
{
  var isAnagram = function (s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    return s === t ? true : false;
  };

  let s = 'anagram';
  let t = 'nagaram';
  // console.log(isAnagram(s, t));
}
{
  var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const len = nums.length;

    for (let i = 0; i <= len; i++) {
      if (i !== nums[i]) return i;
    }
  };
  let nums = [3, 0, 1];
  // let nums = [1];
  // let nums = [0, 1];
  // let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

  // console.log(missingNumber(nums));
}
{
  const intersect = function (nums1, nums2) {
    const obj = {};
    let result = [];

    for (const num of nums1) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    }

    for (const num of nums2) {
      if (obj[num]) {
        result.push(num);
        obj[num]--;
      }

      console.log(obj);
    }

    return result;
  };

  let nums1 = [1, 2, 2, 1];
  // let nums1 = [4, 9, 5];
  let nums2 = [2, 2];
  // let nums2 = [9, 4, 9, 8, 4];
  // let nums1 = [1, 2];
  // let nums2 = [1, 1];

  // console.log(intersect(nums1, nums2));
}
{
  var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    return nums1.sort((a, b) => a - b);
  };
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;

  // console.log(merge(nums1, m, nums2, n));
}
{
  var findTheDifference = function (s, t) {
    s = s.split('').sort();
    t = t.split('').sort();

    for (let i = 0; i < t.length; i++) {
      if (s[i] !== t[i]) {
        return t[i];
      }
    }
  };
  let s =
    'ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor';
  let t =
    'qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj';

  // console.log(findTheDifference(s, t));
}
{
  var thirdMax = function (nums) {
    nums = nums.sort((a, b) => a - b);
    nums = [...new Set(nums)];
    const len = nums.length;

    let max = Math.max(...nums);
    let maxNums = [];

    while (nums.length > 0)
      for (const num of nums) {
        if (num === max) {
          maxNums.push(num);
          nums.pop();
          max = Math.max(...nums);
        }
      }

    return len < 3 ? maxNums[0] : maxNums[2];
  };
  //   var thirdMax = function(nums) {
  //     nums = Array.from(new Set(nums));
  //     var len = nums.length;
  //     if(len<=2){
  //     	return Math.max(...nums);
  //     }
  //     if(len===3){
  //     	return Math.min(...nums);
  //     }
  //     nums = nums.sort((a,b)=>{return b-a;})
  //     return nums[2];
  // };

  let nums = [2, 2, 3, 1];
  // let nums = [2, 1];
  // console.log(thirdMax(nums));
}
{
  var findContentChildren = function (g, s) {};
  let g = [1, 2, 3];
  let s = [1, 1];

  // console.log(findContentChildren(g, s));
}
{
  var findRelativeRanks = function (score) {
    let ascending = score.slice().sort((a, b) => b - a);
    const [gold, silver, bronze] = ascending;

    for (let i = 0; i < score.length; i++) {
      if (score[i] === gold) {
        score[i] = 'Gold Medal';
      } else if (score[i] === silver) {
        score[i] = 'Silver Medal';
      } else if (score[i] === bronze) {
        score[i] = 'Bronze Medal';
      } else {
        score[i] = String(ascending.indexOf(score[i]) + 1);
      }
    }

    return score;
  };
  let score = [10, 3, 8, 9, 4];

  // console.log(findRelativeRanks(score));
}
{
  var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = 0;

    for (let i = 0; i < nums.length; i += 2) {
      result += nums[i];
    }

    return result;
  };

  // let nums = [1, 4, 3, 2];
  let nums = [6, 2, 6, 5, 1, 2];

  // console.log(arrayPairSum(nums));
}
{
  var findLHS = function (nums) {
    let obj = {},
      result = 0;

    for (let num of nums) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    }

    for (let key in obj) {
      if (obj[parseInt(key) + 1]) {
        result = Math.max(result, obj[key] + obj[parseInt(key) + 1]);
      }
    }

    return result;
  };

  let nums = [1, 3, 2, 2, 5, 2, 3, 7];
  // let nums = [1, 2, 3, 4];
  // let nums = [1, 1, 1, 1];

  // console.log(findLHS(nums));
}
{
  var findErrorNums = function (nums) {
    let obj = {};
    let duplicated;

    for (const num of nums) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    }

    for (const key in obj) {
      if (obj[key] > 1) {
        duplicated = parseInt(key);
      }
    }
    function isSortedArr(nums) {
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
          return false;
        } else {
          return true;
        }
      }
    }
    console.log(nums.sort((a, b) => a - b) === [1, 3, 3]);

    if (!isSortedArr(nums)) {
      nums = nums.sort((a, b) => a - b);
      if (nums.indexOf(duplicated) !== duplicated - 1) {
        return [duplicated, nums.indexOf(duplicated) + 1];
      } else {
        let sliced = nums.slice(duplicated, nums.length);
        return [duplicated, sliced[0] + 1];
      }
    } else {
      if (nums.indexOf(duplicated) !== duplicated - 1) {
        return [duplicated, nums.indexOf(duplicated) + 1];
      } else {
        let sliced = nums.slice(duplicated, nums.length);
        return [duplicated, sliced[0] + 1];
      }
    }
  };
  // let nums = [1, 2, 2, 4];
  // let nums = [1, 1];
  // let nums = [2, 2];
  // let nums = [3, 2, 2];
  let nums = [];
  // let nums = [1, 2, 3, 4, 3, 6];
  // let nums = [3, 2, 3, 4, 5, 6];

  // console.log(findErrorNums(nums));
}
{
  var dominantIndex = function (nums) {
    if (nums.length === 1) return 0;
    const max = Math.max(...nums);
    let newArr = [];
    newArr = nums.filter((num) => num !== max);
    const isBiggerThanMax = newArr.every((num) => num * 2 <= max);
    return isBiggerThanMax ? nums.indexOf(max) : -1;
  };

  let nums = [3, 6, 1, 0]; // 1
  // let nums = [1, 2, 3, 4]; // -1
  // let nums = [1]; // 0

  // console.log(dominantIndex(nums));
}
{
  var fairCandySwap = function (aliceSizes, bobSizes) {
    let longer;
    let shorter;
    let result = [];

    if (aliceSizes.length >= bobSizes.length) {
      longer = aliceSizes;
      shorter = bobSizes;
    } else {
      longer = bobSizes;
      shorter = aliceSizes;
    }

    while (shorter.length < longer.length) {
      shorter.push(0);
    }
    let sumA = longer.reduce((a, b) => a + b);
    let sumB = shorter.reduce((a, b) => a + b);
    console.log(longer);
    console.log(shorter);

    let difference = sumA - aliceSizes[0];
    console.log(difference);
    for (let i = 0; i < longer.length; i++) {
      if (longer[i] > difference) {
        result[1] = longer[i];
      }
    }
    result[0] = aliceSizes[0];

    console.log(result);
  };

  // let aliceSizes = [1, 1];
  // let bobSizes = [2, 2];
  let aliceSizes = [1, 2];
  let bobSizes = [2, 3];
  // let aliceSizes = [2];
  // let bobSizes = [1, 3];

  // console.log(fairCandySwap(aliceSizes, bobSizes));
}
{
  var sortArrayByParity = function (nums) {
    let oddNums = [];
    let evenNums = [];

    nums.filter((num) => {
      if (num % 2 === 0) {
        evenNums.push(num);
      } else {
        oddNums.push(num);
      }
    });

    return evenNums.concat(oddNums);
  };

  let nums = [3, 1, 2, 4];
  // let nums = [0];

  // console.log(sortArrayByParity(nums));
}
{
  var sortArrayByParityII = function (nums) {
    let oddNums = [];
    let evenNums = [];
    let result = [];

    nums.filter((num) => {
      if (num % 2 === 0) {
        evenNums.push(num);
      } else {
        oddNums.push(num);
      }
    });

    for (let i = 0; i < nums.length / 2; i++) {
      result.push(evenNums[i], oddNums[i]);
    }

    return result;
  };
  let nums = [4, 2, 5, 7];
  // let nums = [2,3]

  // console.log(sortArrayByParityII(nums));
}
{
  var largestPerimeter = function (nums) {
    const hash = {};
    let newArr = [];
    let num;

    for (const num of nums) {
      if (!hash[num]) {
        hash[num] = 1;
      } else {
        hash[num]++;
      }
    }

    for (const key in hash) {
      if (hash[key] === 2) {
        num = key;
      } else {
        newArr.push(parseInt(key));
      }
    }
    const max = Math.max(...newArr);
    const min = Math.min(...newArr);

    if (max < num * 2) {
      return num * 2 + parseInt(max);
    } else if (min < num * 2) {
      return num * 2 + parseInt(min);
    } else {
      return 0;
    }
  };
  let nums = [2, 1, 2];

  // console.log(largestPerimeter(nums));
}
{
  var sortedSquares = function (nums) {
    let result = [];

    for (const num of nums) {
      result.push(Math.floor(Math.pow(num, 2)));
    }

    return result.sort((a, b) => a - b);
  };
  let nums = [-4, -1, 0, 3, 10];
  // let nums = [-7, -3, 2, 3, 11];

  // console.log(sortedSquares(nums));
}
{
  var largestSumAfterKNegations = function (nums, k) {
    nums = nums.sort((a, b) => b - a);
    let poped = [];

    for (let i = 0; i < k; i++) {
      poped.push(nums.pop());
    }

    console.log(poped);
    for (let i = 0; i < poped.length; i++) {
      if (poped[i] === 0) {
        poped[i + 1] *= -1;
      }
      poped[i] *= -1;
    }
    const result = nums.concat(poped);
    console.log(result);

    return result.reduce((a, b) => a + b);
  };
  // let nums = [4, 2, 3]; // 5
  // let k = 1;
  // let nums = [3, -1, 0, 2]; // 6
  // // let k = 3;
  // let nums = [2, -3, -1, 5, -4]; // 13
  // let k = 2;
  let nums = [-2, 5, 0, 2, -2];
  let k = 3;

  // console.log(largestSumAfterKNegations(nums, k));
}
{
  // 409. Longest Palindrome

  var longestPalindrome = function (s) {};

  // let s = 'abccccdd';
  let s = 'ababababa';
  // let s = 'a';
  // let s = 'bb';
  // let s = 'ccc';
  // let s = 'bananas';
  // console.log(longestPalindrome(s));
}
