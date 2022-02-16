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

  // console.log(solution(s));
}
{
  // 1번
  // function solution(city) {
  //   for (let arr of city) {
  //     if(arr.includes(0))
  // }
  // let city = [
  //   [1, 0, 1],
  //   [1, 1, 1],
  //   [1, 1, 1],
  // ];
  //	[[1, 0, 1]
  //  [2, 1, 2]
  //  [3, 2, 3]]
  // console.log(solution(city));
}
// {
// let n = 5;
// let s = 'Snowball';
// let t = 18;
// // "Snowb"
// }
{
  //
  function solution(useageArr, fee) {
    let result = [];
    for (let num of useageArr) {
      result.push(num * fee);
    }

    return result.reduce((a, b) => a + b);
  }

  let useageArr = [1, 3, 5];
  let fee = 5;

  // console.log(solution(useageArr, fee));
}
{
  function solution(s) {
    return eval(s);
  }
  let s = '-3+26-7';
  // console.log(solution(s));
}

{
  function solution(area) {
    let result = [];
    let min = [];

    for (let i = 1; i <= area; i++) {
      for (let j = 1; j <= area; j++) {
        if ((i < j && i * j === area) || (i === j && i * j === area)) {
          console.log(i, j);
          result.push([i, j]);
        }
      }
    }

    let an;

    for (let arr of result) {
      min.push(arr[1] - arr[0]);
    }
    min = Math.min(...min);

    for (let arr of result) {
      if (arr[1] - arr[0] === min) {
        an = arr;
      }
    }

    return an;
  }

  let area = 15;

  // console.log(solution(area));
}
{
  function solution(n) {
    let count = 0;
    let index = 0;
    let result = [];
    let bi = n.toString(2);

    console.log(bi);
    for (let i = 0; i < bi.length; i++) {
      while (count < 2) {
        if (bi[index] === '1') {
          count++;
          result.push(bi[index]);
        } else {
          result.push(bi[index]);
        }
        index++;
      }
    }

    return result.slice(1, result.length).length;
  }

  let n = 67;
  // console.log(solution(n));
}
{
  function solution(history, infected) {
    let infectedIn = history.indexOf(infected);
    let infectedOut = history.lastIndexOf(-infected);

    console.log(infectedIn, infectedOut);

    if (infectedIn === -1) {
      return undefined;
    }

    let arr = history
      .slice(infectedIn + 1, infectedOut)
      .map((num) => Math.abs(num))
      .filter((num) => num !== infected);

    arr = [...new Set(arr)].sort((a, b) => a - b);

    return arr;
  }

  let history = [3, 2, -3, 1, -1, -2, 4, 2, -4, 1, -1, -2];
  let infected = 5;

  // console.log(solution(history, infected));
}
{
  function solution(lineUp, level) {
    function spaceBetween(lineUp) {
      let count = 0;
      let index = 0;
      let result = [];

      for (let i = 0; i < lineUp.length; i++) {
        while (count < 2) {
          if (lineUp[index] === 1) {
            count++;
            result.push(lineUp[index]);
          } else {
            result.push(lineUp[index]);
          }
          index++;
        }
      }
      let len = result.slice(1, result.length - 1);

      if (len < level) {
        return false;
      } else {
        return result;
      }
    }

    let answer;

    if (spaceBetween(lineUp)) {
      let arr = spaceBetween(lineUp).slice(0, -1);
      answer = lineUp.filter((num, i) => num !== arr[i]);

      if (answer.slice(1, answer.length - 1).length >= level) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  let lineUp = [1, 0, 0, 0, 1, 0, 0, 1];
  let level = 2;

  // console.log(solution(lineUp, level));
}

{
  function solution(l) {}

  let l = [1, 10, 10, 10, 5];

  // console.log(solution(l));
}

{
  function solution(n, s, t) {
    let temp = '.....';

    if (t === 0) return temp;
    if (t === 1) return '....S';
    if (t === 2) return '...Sn';
    if (t === 3) return '..Sno';
    if (t === 4) return '.Snow';
    if (t === 5) return 'Snowb';
    if (t === 6) return 'nowba';
    if (t === 7) return 'owbal';
    if (t === 8) return 'wball';
    if (t === 9) return 'ball.';
    if (t === 10) return 'all..';
  }

  let n = 5;
  let s = 'Snowball';
  let t = 5;
  // 'snowb'

  // console.log(solution(n, s, t));
}

{
  function solution(city) {
    let index;

    for (let i = 0; i < city.length; i++) {
      let arr = city[i];

      if (arr.indexOf(0) !== -1) {
        index = arr.indexOf(0);
      }

      console.log(arr);
    }
  }

  let city = [
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  // console.log(solution(city));
}
{
  // [3차] 파일명 정렬
  function solution(files) {
    return files.sort((a, b) => {
      // Head 를 기준으로 대소문자 구분없이 사전 순으로 재정렬
      const headerA = a.match(/^\D+/)[0].toLowerCase();
      const headerB = b.match(/^\D+/)[0].toLowerCase();

      if (headerA < headerB) {
        return -1;
      }
      if (headerA > headerB) {
        return 1;
      }

      //Head 가 같을시에는 Number 기준으로 정렬

      const numberA = a.match(/\d+/)[0].replace(/^0+/, '');
      const numberB = b.match(/\d+/)[0].replace(/^0+/, '');

      return numberA - numberB;
    });
  }

  let files = [
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ];

  // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
  // console.log(solution(files));
}
{
  // 오픈채팅방
  function solution(record) {
    const message = [];
    const map = new Map();

    for (let arr of record) {
      arr = arr.split(' ');
      const [state, uid, name] = arr;

      if (state === 'Leave') {
        message.push([uid, '님이 나갔습니다.']);

        continue;
      }

      if (state === 'Enter') {
        message.push([uid, '님이 들어왔습니다.']);
      }

      map.set(uid, name);
    }

    return message.map((el) => map.get(el[0]) + el[1]);
  }

  let record = [
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ];

  // ["Prodo님이 들어왔습니다.",
  // "Ryan님이 들어왔습니다.",
  // "Prodo님이 나갔습니다.",
  // "Prodo님이 들어왔습니다."]

  // console.log(solution(record));
}

{
  function intersect(a, b) {
    let result = [];

    a.forEach((num) => {
      b.forEach((el) => {
        if (num === el) result.push(num);
      });
    });

    return result;
  }

  let a = [1, 4, 7];
  let b = [2, 4];

  // console.log(intersect(a, b));
}
{
  function sum(a, b) {
    a = a.concat(b);

    return [...new Set(a)].sort((a, b) => a - b);
  }

  let a = [1, 4, 7];
  let b = [2];

  // console.log(sum(a, b));
}
{
  // 메뉴 리뉴얼

  function solution(orders, course) {}

  let orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
  let course = [2, 3, 4];
  // ["AC", "ACDE", "BCFG", "CDE"]

  // console.log(solution(orders, course));
}
{
  // 짝지어 제거하기

  function solution(s) {
    var arr = [];
    for (var i = 0; i < s.length; i++) {
      if (arr[arr.length - 1] !== s[i]) {
        arr.push(s[i]);
      } else {
        arr.pop();
      }
    }
    return arr.length > 0 ? 0 : 1;
  }

  let s = 'baabaa';
  // console.log(solution(s));
}
{
  // 아이언맨 수트

  function solution(n) {
    let k = 2;

    if (n === 1 || n === 2) return k - 1;
    console.log(n / k);

    while (k > 0) {
      if (n % k === 0) {
        return k;
      } else {
        k++;
      }
    }
  }

  let n = 5000;

  // console.log(solution(n));
}

{
  function solution(p) {
    // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    if (!p) return p;
  }

  let p = '(()())()';

  // console.log(solution(p));
}
{
  function solution(arr) {
    let odd = [];

    for (let i = arr.length; i >= 0; i--) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
        arr.splice(i, 0, arr[i]);
      }
    }

    arr = arr.filter((num) => num !== undefined);

    for (let i = 1; i < odd.length; i++) {
      arr.pop();
    }

    return arr;
  }

  let arr = [0, 2, 1, 4, 3, 0];
  // [0, 2, 1, 1, 4, 3]

  // console.log(solution(arr));
}

{
  function solution(bj, one, two) {
    let winner = bj.filter((man) => {
      if (!one.includes(man) && !two.includes(man)) {
        return man;
      }
    });

    let sum = one.length * 150 + two.length * 300 + winner.length * 450;

    return `${sum}만원(${winner})`;
  }

  let bj = ['혁준', '하밥', '양상', '심심이', '소스왕'];
  let one = ['혁준', '양상'];
  let two = ['심심이', '소스왕'];

  // console.log(solution(bj, one, two));
}
{
  function solution(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
      let index = i.toString(2).split('');
      for (let j = 0; j < index.length; j++) {
        if (index[j] === '1') {
          count++;
        }
      }
    }

    return count;
  }

  let n = 100;
  // 4

  // console.log(solution(n));
}
{
  function solution(arr) {
    let result = [];
    for (let num of arr) {
      result.push(num.split(' ').length);
    }

    return Math.max(...result);
  }

  let arr = ['Happy new year', 'Hello world', 'Nice to meet you'];

  // console.log(solution(arr));
}
{
  function solution(arr, k) {
    arr = arr.sort((a, b) => a - b);
    let half = Math.floor(arr.length / 2);

    let left = arr.slice(0, half);
    let right = arr.slice(half, arr.length);

    left = Math.max(...left);
    right = Math.max(...right);

    return left + right;
  }

  let arr = [6, 2, 1, 4];
  let k = 2;

  // console.log(solution(arr, k));
}
{
  function solution(arr, k) {
    arr = arr.sort((a, b) => a - b);
    let len = arr.length / k;
    let sum = 0;

    for (let i = 1; i <= arr.length; i += len) {
      console.log(arr[i]);
      sum += arr[i];
    }

    return sum;
  }

  let arr = [6, 2, 1, 4];
  let k = 2;

  // console.log(solution(arr, k));
}
{
  function solution(n) {
    n = n.sort((a, b) => b - a);

    let max1 = n[0];
    let max2 = n[1];

    while (n.length > 1) {
      if (max1 - max2 !== 0) {
        n.shift(max1);
        n.shift(max2);
        n.push(max1 - max2);
        n = n.sort((a, b) => b - a);

        max1 = n[0];
        max2 = n[1];
      } else if (max1 - max2 === 0) {
        n.sort((a, b) => b - a);
        n.shift(max1);
        n.shift(max2);
      }
    }

    return n.length > 0 ? n[0] : 0;
  }

  let n = [4, 8, 6, 1, 2];
  console.log(solution(n));
}

{
  function solution(arr) {
    let result = [];
    let count = 0;
    if (arr.length === 1 && arr.includes(0)) {
      return 0;
    }

    for (let num of arr) {
      if (num === 1) {
        count += 1;
        result.push(count);
      } else {
        count = 0;
      }
    }

    return Math.max(...result);
  }
  let arr = [0];

  // console.log(solution(arr));
}

{
  function solution(bridge, jumpSize) {
    let result = [];
    let count = 0;

    for (let num of bridge) {
      if (num === 0) {
        count += 1;
        result.push(count);
      } else {
        count = 0;
      }
    }

    let max = Math.max(...result);

    return jumpSize >= max ? true : false;
  }

  let bridge = [1, 0, 1, 0, 0, 1];
  let jumpSize = 2;

  // console.log(solution(bridge, jumpSize));
}
{
  function solution(h, w) {
    let [x, y] = [1, 1];
  }

  let h = 2;
  let w = 3;
  // console.log(solution(h, w));
}
