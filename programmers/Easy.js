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

  console.log(solution(n, arr1, arr2));
}
