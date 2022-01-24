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

  console.log(solution(n, lost, reserve));
}
{
  let result = [];
  let newArr = [];
  //   console.log(arr.slice(1,5))
  for (let i = 0; i < commands.length; i++) {
    newArr = arr.slice(commands[i][0] - 1, commands[i][1]);
    newArr = newArr.sort((a, b) => a - b);
    console.log(newArr);
    result.push(newArr[commands[i][2] - 1]);
  }
  // result = [...new Set(result)]
  return result;
}
