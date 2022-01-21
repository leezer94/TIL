{
  //704. Binary Search

  const search = function (nums, target) {
    return nums.indexOf(target);
  };

  //   let nums = [-1, 0, 3, 5, 9, 12];
  //   let target = 9;
  let nums = [-1, 0, 3, 5, 9, 12];
  let target = 2;

  //   console.log(search(nums, target));
}
{
  // 278. First Bad Version
  var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
      for (let i = 1; i <= n; i++) {
        if (isBadVersion(i)) {
          return i;
        }
      }
    };
  };

  let n = 5;
  let bad = 4;

  // solution(n, bad);
}
{
  // 35. Search Insert Position
  const searchInsert = function (nums, target) {
    const hasTarget = nums.includes(target);

    if (hasTarget) {
      return nums.indexOf(target);
    } else {
      nums.push(target);
      nums.sort((a, b) => a - b);
      return nums.indexOf(target);
    }
  };
  let nums = [1, 3, 5, 6];
  let target = 5;
  // let target = 2;
  // let target = 7;

  // console.log(searchInsert(nums, target));
}
{
  // 189. Rotate Array
  const rotate = function (nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
  };

  const reverse = (nums, start, end) => {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start++;
      end--;
    }
  };

  let nums = [1, 2, 3, 4, 5, 6, 7];

  let k = 3;

  // console.log(rotate(nums, k));
}
{
  // 283. Move Zeroes
  var moveZeroes = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] === 0) {
        nums.push(0);
        nums.splice(i, 1);
      }
    }
    return nums;
  };

  // let nums = [0, 1, 0, 3, 12];
  // let nums = [2, 1];
  // let nums = [0];
  let nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];

  // console.log(moveZeroes(nums));
}
{
  var twoSum = function (nums, target) {
    let hash = [];
    for (let i = 0; i < nums.length; i++) {
      const n = target - nums[i];
      if (hash[n] !== undefined) {
        return [hash[n] + 1, i + 1];
      }
      hash[nums[i]] = i;
    }
    return [];
  };

  // let nums = [2, 7, 11, 15]; // [1,2]
  // let target = 9;
  // let nums = [2, 3, 4]; // [1,3]
  // let target = 6;
  // let nums = [-1, 0]; // [1,2]
  // let target = -1;
  let nums = [1, 3, 5, 6, 7, 8, 9, 10];
  let target = 13;

  // console.log(twoSum(nums, target));
}
{
  // 344. Reverse String
  var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      let leftOne = s[left];
      s[left] = s[right];
      s[right] = leftOne;
      left++;
      right--;
    }

    return s;
  };

  let s = ['h', 'e', 'l', 'l', 'o'];
  // console.log(reverseString(s));
}
{
  // 557. Reverse Words in a String III
  var reverseWords = function (s) {
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
      s[i] = s[i].split('').reverse().join('');
    }
    return s.join(' ');
  };

  let s = "Let's take LeetCode contest";

  // console.log(reverseWords(s));
}
{
  // 77. Combinations
  const combine = function (n, k) {
    let result = [];

    for (let i = 1; i <= n; i++) {
      while (i <= k) {
        result.push([i]);
        i++;
      }
    }

    return result;
  };

  let n = 1;
  let k = 1;

  console.log(combine(n, k));
}
