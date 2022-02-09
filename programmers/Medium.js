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
  // function fibonacci(num) {
  //   if (num < 2) return num;
  //   return fibonacci(num - 1) + fibonacci(num - 2);
  // }
}
{
  // 주차요금
  function solution(fees, records) {
    let recordsHash = {};
    let feeHash = {
      기본시간: fees[0],
      기본요금: fees[1],
      단위시간: fees[2],
      단위요금: fees[3],
    };
    let result = {};
    for (let arr of records) {
      const detail = arr.split(' ');

      if (!recordsHash[detail[1]]) {
        recordsHash[detail[1]] = [detail[0]];
      } else {
        recordsHash[detail[1]].push(detail[0]);
      }
    }

    for (let key in recordsHash) {
      if (recordsHash[key].length % 2 !== 0) {
        recordsHash[key].push('23:59');
      }
    }

    for (let key in recordsHash) {
      for (let i = 0; i < recordsHash[key].length; i++) {
        recordsHash[key][i] = recordsHash[key][i]
          .split(':')
          .map((num, i) => {
            if (i !== 0) {
              num = Number(num);
            } else {
              num = Number(num) * 60;
            }
            return num;
          })
          .reduce((a, b) => a + b);
      }

      recordsHash[key] = recordsHash[key]
        .map((num, i) => {
          if (i % 2 === 0) {
            num *= -1;
          }

          return num;
        })
        .reduce((a, b) => a + b);
    }

    for (let key in recordsHash) {
      recordsHash[key] = recordsHash[key] - feeHash.기본시간;

      if (recordsHash[key] <= 0) {
        result[key] = feeHash.기본요금;
      } else {
        result[key] =
          Math.ceil(recordsHash[key] / feeHash.단위시간) * feeHash.단위요금 +
          feeHash.기본요금;
      }
    }

    let arr = [];
    for (let key in result) {
      arr.push(Number(key));
    }
    arr.sort((a, b) => a - b);

    for (let key in result) {
      for (let i = 0; i < arr.length; i++) {
        if (Number(key) === arr[i]) {
          arr[i] = result[key];
        }
      }
    }

    return arr;
  }

  let fees = [180, 5000, 10, 600];
  let records = [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ];

  // let fees = [120, 0, 60, 591];
  // let records = [
  //   '16:00 3961 IN',
  //   '16:00 0202 IN',
  //   '18:00 3961 OUT',
  //   '18:00 0202 OUT',
  //   '23:58 3961 IN',
  // ];

  // console.log(solution(fees, records));
}
{
  // 땅따먹기
  function solution(land) {
    return Math.max(
      ...land.reduce(
        (a, c) => {
          return [
            c[0] + Math.max(a[1], a[2], a[3]),
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
          ];
        },
        [0, 0, 0, 0]
      )
    );
  }
  let land = [
    [1, 2, 3, 6],
    [5, 6, 7, 3],
    [4, 3, 7, 5],
    [3, 4, 5, 6],
  ];
  // [6,7,5,5]
  // console.log(solution(land));
}
{
  // 튜플
  function solution(s) {
    let numArr = [];
    const hash = {};
    s = s
      .replace('{{', '')
      .replace('}}', '')
      .split('},{')
      .map((num) => numArr.push(num.split(',')));

    numArr = numArr
      .sort((a, b) => a.length - b.length)
      .map(
        (numArr) =>
          (numArr = numArr.map((num) => Number(num)).sort((a, b) => a - b))
      );

    for (let arr of numArr) {
      for (let num of arr) {
        if (!hash[num]) {
          hash[num] = 1;
        } else {
          hash[num]++;
        }
      }
    }
    let result = [];
    console.log(hash);
    for (let key in hash) {
      result.push(hash[key]);
    }

    result.sort((a, b) => b - a);
    let answer = [];
    for (let num of result) {
      for (let key in hash) {
        if (num === hash[key]) {
          answer.push(Number(key));
        }
      }
    }

    return answer;
  }

  let s = '{{1,2,3},{2,1},{1,2,4,3},{2}}'; // [2,1,3,4]

  console.log(solution(s));
}
