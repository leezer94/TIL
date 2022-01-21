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

  console.log(solution(id_list, report, k));
}
