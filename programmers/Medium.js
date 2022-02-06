{
  // JadenCase 문자열 만들기

  function solution(s) {
    return s
      .split(' ')
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      )
      .join(' ');
  }

  let s = '3people unFollowed me';

  // console.log(solution(s));
}

{
  // 행렬의 곱셈
  function solution(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
      let arr = arr1[i];
      for (let j = 0; j < arr.length; j++) {
        let num = arr[j];
      }
    }
  }

  let arr1 = [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ];
  let arr2 = [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ];

  // console.log(solution(arr1, arr2));
}
{
  // 양궁대회

  function solution(A, B) {
    let min = 0;

    A.sort((A, B) => A - B);
    B.sort((A, B) => B - A);

    min = A.reduce((acc, current, index) => {
      return (acc += current * B[index]);
    }, 0);

    return min;
  }

  let a = [1, 4, 2];
  let b = [5, 4, 4];

  // console.log(solution(a, b));
}
{
  // 피보나치 수
  function fibonacci(num) {
    if (num < 2) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
