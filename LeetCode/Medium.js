{
  function longestPalindrome(s) {
    let startIndex = 0;
    let maxLength = 1; // because the longest palindromic has to be length '1'

    // helper function
    function expandAroundMiddle(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        // till the left, right meets the end and s[index] and s[index] is the same
        const currentPalLength = right - left + 1; // size of the palindrome
        // adding 1 because array indicies start from 0

        if (currentPalLength > maxLength) {
          maxLength = currentPalLength;
          startIndex = left;
        }
        left -= 1; // we want to expand left pointer to the left
        right += 1; // and right pointer to the right
      }
    }

    for (let i = 0; i < s.length; i++) {
      expandAroundMiddle(i - 1, i + 1); //
      expandAroundMiddle(i, i + 1); // this makes imaginary space in between indexes
    }

    return s.slice(startIndex, startIndex + maxLength);
  }

  let s = 'babad';
  // let s = 'cbbd';

  // console.log(longestPalindrome(s));
}
{
  function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
      const endChar = s[i]; // current character
      // console.log(endChar);

      console.log(windowCharsMap);

      if (windowCharsMap[endChar] >= windowStart) {
        // console.log(windowCharsMap);

        windowStart = windowCharsMap[endChar] + 1;
        console.log(`   windowStart ${windowStart}`);
      }

      windowCharsMap[endChar] = i;
      maxLength = Math.max(maxLength, i - windowStart + 1);
      console.log(`       maxLength : ${maxLength}`);
    }

    return maxLength;
  }

  let s = 'abcabcbb';
  // console.log(lengthOfLongestSubstring(s));
}
{
  //11. Container With Most Water
  var maxArea = function (height) {
    let left = 0,
      right = height.length - 1,
      maxArea = 0;
    while (left < right) {
      let width = right - left;
      if (height[left] > height[right]) {
        maxArea = Math.max(maxArea, width * height[right]);
        right--;
      } else {
        maxArea = Math.max(maxArea, width * height[left]);
        left++;
      }
    }
    return maxArea;
  };

  // let height = [4, 3, 2, 1, 4];
  let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  // let height = [1, 2, 1];
  console.log(maxArea(height));
}
