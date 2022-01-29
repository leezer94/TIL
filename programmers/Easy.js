{
  // 신고 결과 받기
  function solution(id_list, report, k) {
    let hash = {};
    let result = Array(id_list.length).fill(0);

    id_list.map((user) => {
      hash[user] = [];
    });

    report.map((user) => {
      const [user_id, report_id] = user.split(' ');

      if (!hash[report_id].includes(user_id)) {
        hash[report_id].push(user_id);
      }
    });

    for (const key in hash) {
      if (hash[key].length >= 2) {
        hash[key].map((user) => {
          result[id_list.indexOf(user)]++;
        });
      }
    }

    return result;
  }
  let id_list = ['muzi', 'frodo', 'apeach', 'neo'];
  let report = [
    'muzi frodo',
    'apeach frodo',
    'frodo neo',
    'muzi neo',
    'apeach muzi',
  ];
  let k = 2;
  // [2,1,1,0]

  // console.log(solution(id_list, report, k));
}
{
  // 체육복
  function solution(n, lost, reserve) {
    const realLost = lost.filter((num) => !reserve.includes(num));
    let realReserve = reserve.filter((num) => !lost.includes(num));

    return (
      n -
      realLost.filter((lost) => {
        const lend = realReserve.find(
          (reserve) => Math.abs(reserve - lost) === 1
        );

        if (!lend) return lost;

        realReserve.filter((reserve) => reserve !== lend).length;
      })
    );
  }

  let n = 5;
  let lost = [2, 4];
  let reserve = [1, 3, 5];

  // console.log(solution(n, lost, reserve));
}
{
  // let result = [];
  // let newArr = [];
  // //   console.log(arr.slice(1,5))
  // for (let i = 0; i < commands.length; i++) {
  //   newArr = arr.slice(commands[i][0] - 1, commands[i][1]);
  //   newArr = newArr.sort((a, b) => a - b);
  //   console.log(newArr);
  //   result.push(newArr[commands[i][2] - 1]);
  // }
  // // result = [...new Set(result)]
  // return result;
}
{
  // 가운데 글자 가져오기
  function solution(s) {
    let len = Math.floor(s.length / 2);

    let slice = s.slice(len - 1, len + 1);

    return s.length % 2 === 0 ? slice : s[len];
  }
  // let s = 'abcde';
  let s = 'qwer';

  // console.log(solution(s));
}
{
  //  부족한 금액 계산하기
  function solution(price, money, count) {
    let sum = 0;

    for (let i = 0; i < count; i++) {
      sum += price * (i + 1);
    }
    return sum > money ? sum - money : 0;
  }

  let price = 3;
  let money = 20;
  let count = 4;

  // console.log(solution(price, money, count));
}
{
  // 나머지가 1 이 되는 수  찾ㅣ
  function solution(n) {
    for (let i = 0; i < n; i++) {
      if (n % i === 1) {
        return i;
      }
    }
  }

  // let n = 10;
  let n = 12;

  // console.log(solution(n));
}
{
  // 최소 직사각형
  function solution(sizes) {
    const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
    console.log(rotated);
    let length = [];
    let width = [];

    for (let i = 0; i < rotated.length; i++) {
      width.push(rotated[i][0]);
      length.push(rotated[i][1]);
    }

    return Math.max(...length) * Math.max(...width);
  }

  let sizes = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]; // 4000

  // let sizes = [
  //   [14, 4],
  //   [19, 6],
  //   [6, 16],
  //   [18, 7],
  //   [7, 11],
  // ]; // 133

  // console.log(solution(sizes));
}
{
  // 2016년
  function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(2016, a - 1, b);
    const index = date.getDay();

    return day[index];
  }
  let a = 5;
  let b = 24;

  // console.log(solution(a, b));
}
{
  // [1차]비밀지도
  function solution(n, arr1, arr2) {
    let result = [];
    arr1 = arr1.map((num) => num.toString(2).padStart(n, 0));
    arr2 = arr2.map((num) => num.toString(2).padStart(n, 0));

    for (let i = 0; i < arr1.length; i++) {
      result.push(Number(arr1[i]) + Number(arr2[i]));
    }

    result = result
      .map((num) => num.toString().padStart(n, 0))
      .join(',')
      .replace(/0/g, ' ')
      .replace(/[1-2]/g, '#')
      .split(',');

    return result;
  }

  let n = 6;
  let arr1 = [46, 33, 33, 22, 31, 50];
  let arr2 = [27, 56, 19, 14, 14, 10];
  //["######", "### #", "## ##", " #### ", " #####", "### # "]

  // console.log(solution(n, arr1, arr2));
}
{
  // 두개 뽑아서 더하기
  function solution(numbers) {
    let index = 0;
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        result.push(numbers[index] + numbers[j]);
      }
      index++;
    }
    result = [...new Set(result)];

    return result.sort((a, b) => a - b);
  }
  let numbers = [2, 1, 3, 4, 1];

  // console.log(solution(numbers));
}
{
  // 예산
  function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    console.log(d);
    let count = 0;
    let sum = d.reduce((a, b) => a + b);

    if (sum < budget) {
      return d.length;
    }

    for (let i = 0; i < d.length; i++) {
      budget -= d[i];
      count++;

      if (budget === 0) return count;
      if (budget < 0) return count - 1;
    }
  }

  // let d = [1, 3, 2, 5, 4];
  // let budget = 9;
  let d = [2, 2, 3];
  let budget = 10;

  // console.log(solution(d, budget));
}
{
  // 약수의 개수와 덧셈
  function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++;
      }
      if (count % 2) answer -= i;
      else answer += i;
    }

    return answer;
  }

  let left = 13;
  let right = 17; // 43
  // console.log(solution(left, right));
}
{
  // 실패율
  function solution(n, stages) {
    let hash = {};
    let participants = stages.length;
    let arr = [];

    for (let i = 1; i <= n; i++) {
      if (!hash[i]) hash[i] = 0;
    }

    for (let key in hash) {
      for (let i = 0; i < stages.length; i++) {
        if (stages[i] === Number(key)) hash[key]++;
      }
      arr.push(hash[key] / participants);
      participants = participants - hash[key];
    }

    for (let i = 0; i < arr.length; i++) {
      hash[i + 1] = arr[i];
    }

    return Object.keys(hash)
      .sort((a, b) => hash[b] - hash[a])
      .map((num) => Number(num));
  }

  let n = 5;
  let stages = [2, 1, 2, 6, 2, 4, 3, 3];

  // console.log(solution(n, stages));
}
{
  // 폰켓몬
  function solution(nums) {
    let nonDup = [...new Set(nums)].length;
    let max = nums.length / 2;

    return nonDup > max ? max : nonDup;
  }
  // let nums = [3, 1, 2, 3]; // 2 [1,2,3]
  let nums = [3, 3, 3, 2, 2, 4]; // 3 [3,2,4]
  // let nums = [3, 3, 3, 2, 2, 2]; // 2 [3,2]

  // console.log(solution(nums));
}
{
  // 모의고사
  function solution(answers) {
    const par1 = [1, 2, 3, 4, 5];
    const par2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const par3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let participants = [1, 2, 3];

    let hash = {};
    let arr = [];
    let result = [];

    for (let num of participants) {
      if (!hash[num]) {
        hash[num] = 0;
      }
    }

    for (let i = 0; i < answers.length; i++) {
      if (par1[i] === answers[i]) {
        hash[1]++;
      }
      if (par2[i] === answers[i]) {
        hash[2]++;
      }
      if (par3[i] === answers[i]) {
        hash[3]++;
      }
    }
    console.log(hash);

    for (let key in hash) {
      arr.push(hash[key]);
    }
    const max = Math.max(...arr);

    for (let key in hash) {
      if (hash[key] === max) {
        result.push(Number(key));
      }
    }

    return result;
  }
  // let answers = [1, 2, 3, 4, 5];
  // let answers = [1, 3, 2, 4, 2];
  // let answers = [3, 3, 2, 1, 5];
  // let answers = [5, 5, 4, 2, 3];
  let answers = [1, 3, 2, 4, 5];

  // console.log(solution(answers));
}
{
  // k번째수
  function solution(arr, commands) {
    let result = [];

    for (let i = 0; i < commands.length; i++) {
      let i1 = commands[i][0];
      let i2 = commands[i][1];
      let i3 = commands[i][2];
      let dumb = arr.slice(i1 - 1, i2).sort((a, b) => a - b)[i3 - 1];
      result.push(dumb);
    }

    return result;
  }
  let array = [1, 5, 2, 6, 3, 7, 4];
  let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ];

  // console.log(solution(array, commands));
}
{
  // 위장
  function solution(clothes) {
    let hash = {};

    for (let list of clothes) {
      if (!hash[list[1]]) {
        hash[list[1]] = [list[0]];
      } else {
        // Object.assign(list[], hash);
      }
    }

    console.log(hash);
  }

  let clothes = [
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ];
  // let clothes = [
  //   ['crowmask', 'face'],
  //   ['bluesunglasses', 'face'],
  //   ['smoky_makeup', 'face'],
  // ];

  // console.log(solution(clothes));
}

{
  // 완주하지 못한 선수
  //   function solution(participant, completion) {
  //     participant.sort()
  //     completion.sort()
  //     for(let i=0; i<participant.length; i++) {
  //         if(participant[i] !== completion[i])
  //             return participant[i]
  //     }
  // }
}
{
  // 내적
  function solution(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      result.push(a[i] * b[i]);
    }
    return result.reduce((a, b) => a + b);
  }
  let a = [1, 2, 3, 4];
  let b = [-3, -1, 0, 2];

  // console.log(solution(a, b));
}
{
  // 음양 더하기
  function solution(a, b) {
    for (let i = 0; i < b.length; i++) {
      b[i] ? (a[i] = a[i]) : (a[i] = -a[i]);
    }
    return a.reduce((a, b) => a + b);
  }

  let a = [4, 7, 12];
  let b = [true, false, true];

  // console.log(solution(a, b));
}
{
  // 없는 숫자 더하기
  function solution(nums) {
    nums.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i <= 9; i++) {
      arr.push(i);
    }
    let result = arr
      .filter((num) => !nums.includes(num))
      .reduce((a, b) => a + b);

    return result;
  }

  let nums = [1, 2, 3, 4, 6, 7, 8, 0];
  console.log(solution(nums));
}
