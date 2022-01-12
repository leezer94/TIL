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
