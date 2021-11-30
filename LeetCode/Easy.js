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
    l1 = reverse(l1).join("");
    l2 = reverse(l2).join("");

    result += Number(l1) + Number(l2);

    return result
      .toString()
      .split("")
      .map((x) => Number(x))
      .reverse();
  };
  let l1 = [0];
  let l2 = [0];

  // console.log(addTwoNumbers(l1, l2));
}

{
  const isPalindrome = function (x) {
    let reverse = x.toString().split("").reverse().join("");

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
  let s = "III";
  // console.log(romanToInt(s));
}
