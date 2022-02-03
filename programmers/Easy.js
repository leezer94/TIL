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
  // console.log(solution(nums));
}
{
  // 크레인 인형뽑기 게임
  function solution(board, moves) {
    let stack = [];
    let count = 0;
    let temp = 0;

    for (let i = 0; i < moves.length; i++) {
      let index = moves[i];
      for (let j = 0; j < board.length; j++) {
        let arr = board[j];
        if (arr[index - 1] !== 0) {
          if (temp === arr[index - 1]) {
            count += 2;
            if (stack.length > 0) {
              stack.pop();
              temp = stack[stack.length - 1];
            } else {
              temp = 0;
            }
          } else {
            stack.push(arr[index - 1]);
            temp = arr[index - 1];
          }
          arr[index - 1] = 0;
          break;
        }
      }
    }

    return count;
  }

  let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  let moves = [1, 5, 3, 5, 1, 2, 1, 4];

  // console.log(solution(board, moves));
}
{
  // 숫자 문자열과 영단어
  function solution(s) {
    s = s
      .replace(/zero/g, '0')
      .replace(/one/g, '1')
      .replace(/two/g, '2')
      .replace(/three/g, '3')
      .replace(/four/g, '4')
      .replace(/five/g, '5')
      .replace(/six/g, '6')
      .replace(/seven/g, '7')
      .replace(/eight/g, '8')
      .replace(/nine/g, '9');

    return Number(s);
  }

  // let s = 'one4seveneight';
  // let s = '2three45sixsevenzero';
  let s = '1zerotwozero3zero';

  // console.log(solution(s));
}
{
  // 신규 아이디 추천

  function solution(new_id) {
    // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    new_id = new_id.toLowerCase();
    // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    new_id = new_id
      .split('')
      .filter(
        (cha) =>
          cha === '-' || cha === '.' || cha === '_' || cha.match(/[a-z]/g)
      )
      .join('');
    // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    new_id = new_id.replace(/\.+/g, '.');
    // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    if (new_id[0] === '.') {
      new_id = new_id.slice(1, new_id.length);
    }
    if (new_id[new_id.length - 1] === '.') {
      new_id = new_id.slice(new_id.length);
    }

    // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if (new_id === '') {
      new_id = 'a';
    }
    // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    if (new_id.length >= 16) {
      new_id = new_id.slice(0, 15);
    }
    if (new_id[new_id.length - 1] === '.') {
      new_id = new_id.slice(new_id.length);
    }

    // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

    if (new_id.length <= 2) {
      while (new_id.length === 3) {
        new_id.push(new_id[new_id.length - 1]);
      }
    }

    return new_id;

    //     const answer = new_id
    //     .toLowerCase() // 1
    //     .replace(/[^\w-_.]/g, '') // 2
    //     .replace(/\.+/g, '.') // 3
    //     .replace(/^\.|\.$/g, '') // 4
    //     .replace(/^$/, 'a') // 5
    //     .slice(0, 15).replace(/\.$/, ''); // 6
    // const len = answer.length;
    // return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
  }
  let new_id = '...!@BaT#*..y.abcdefghijklm';

  // console.log(solution(new_id));
}
{
  // 로또 최고 순위와 최저순위
  function solution(lottos, win_nums) {
    let min = [];
    let max = lottos.filter((num) => num === 0);
    let map = { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1, 6: 0 };
    let result = [];

    for (let num of lottos) {
      for (let nums of win_nums) {
        if (num === nums) {
          min.push(num);
        }
      }
    }

    max = min.length + max.length;

    for (let num in map) {
      if (max === map[num]) {
        result.push(Number(num));
      } else if (max === undefined) {
        result.push(6);
      }
      if (min.length === map[num]) {
        result.push(Number(num));
      }
    }
    return result;
  }
  let lottos = [44, 1, 0, 0, 31, 25];
  let win_nums = [31, 10, 45, 1, 6, 19];

  // console.log(solution(lottos, win_nums));
}
{
  // 신고 결과 받기
  function solution(id_list, report, k) {
    const hash = {};
    const jail = {};
    const blocked = [];
    const result = Array(id_list.length).fill(0);

    // put reported ones into the hash map
    for (let id of report) {
      let arr = id.split(' ');
      if (!hash[arr[0]]) {
        hash[arr[0]] = [arr[1]];
      } else {
        hash[arr[0]].push(arr[1]);
      }
    }

    for (let key in hash) {
      hash[key] = [...new Set(hash[key])];
    }

    for (let key in hash) {
      for (let id of hash[key]) {
        if (!jail[id]) {
          jail[id] = 1;
        } else {
          jail[id]++;
        }
      }
    }

    // find who is actually blocked
    for (let key in jail) {
      if (jail[key] >= k) {
        blocked.push(key);
      }
    }

    for (let key in hash) {
      for (let id of blocked) {
        if (hash[key].includes(id)) {
          result[id_list.indexOf(key)] += 1;
        }
      }
    }

    return result;
  }

  // let id_list = ['muzi', 'frodo', 'apeach', 'neo'];
  let id_list = ['con', 'ryan'];

  // let report = [
  //   'muzi frodo',
  //   'apeach frodo',
  //   'frodo neo',
  //   'muzi neo',
  //   'apeach muzi',
  // ];
  let report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
  // let k = 2;
  let k = 3;
  // [2,1,1,0]
  // [0,0]
  console.log(solution(id_list, report, k));
}
