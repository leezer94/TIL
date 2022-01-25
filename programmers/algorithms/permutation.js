{
  // 순열
  // count 는 전역에 위치
  let count = 0;

  function permutation(arr, s, r) {
    // 1. 재귀 함수를 멈춰야 할 조건

    if (s === r) {
      count++;
      console.log(arr);
      return;
    }

    // 2. 재귀를 돌면서 변경되어야 할 부분/ 메인로직

    for (let i = s; i < arr.length; i++) {
      // Swap
      [arr[s], arr[i]] = [arr[i], arr[s]];

      // 재귀
      permutation(arr, s + 1, r);

      // 원상복귀
      [arr[s], arr[i]] = [arr[i], arr[s]];
    }

    return count;
  }

  let arr = ['a', 'b', 'c'];
  let s = 0;
  let r = 2;
  //   console.log(permutation(arr, s, r));
}
{
  // 조합
  let count = 0;
  let result = [];

  function combination(arr, data, s, idx, r) {
    if (s === r) {
      count++;
      console.log(data);
      console.log(count);

      return;
    }

    for (let i = idx; arr.length - i >= r - s; i++) {
      data[s] = arr[i];
      combination(arr, data, s + 1, i + 1, r);
    }
  }

  let arr = [1, 2, 3, 4];
  //   console.log(combination(arr, result, 0, 0, 2));
}
{
  // 점화식
  let result;
  function forloop(s, t, number) {
    let acc = 0;
    for (let i = 1; i <= number; i++) {
      if (i === 1) {
        acc += s;
      } else {
        acc += t;
      }
      console.log(i, acc);
    }
    return acc;
  }

  result = forloop(3, 2, 5);
  console.log(result);
}
{
  // 점화식 재귀
  let result;
  function recursive(s, t, number) {
    // 멈추는 조건
    if (number === 1) {
      return s;
    }

    //반복할 코드
    return recursive(s, t, number - 1) + t;
  }
  // number : 5 recursive(s, t, 4) + 2
  // number : 4 recursive(s, t, 3) + 2
  // number : 3 recursive(s, t, 2) + 2
  // number : 2 recursive(s, t, 1) + 2
  // number : 1  + 2 = 3
  result = forloop(3, 2, 5);
  console.log(result);
}
