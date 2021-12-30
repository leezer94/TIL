const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false,
    },
  },
];

//
const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');

  for (const game of games) {
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);

    console.log(getScoreLine(game));

    console.log(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');

    ulParent.appendChild(gameLi);
  }

  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;

  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLines;

  if (aPoints > hPoints) {
    scoreLines = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scoreLines = `${aPoints} - <b>${hPoints}</b>`;
  }

  return `${teamNames}  ${scoreLines}`;
};

const userInput = () => {
  const input = document.querySelector('#input').value;
  console.log(input);
  return input.toLowerCase();
};

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const gsSection = document.querySelector('#gs');
  const hrSection = document.querySelector('#hr');
  const chart1 = makeChart(warriorsGames, 'Houston');
  const chart2 = makeChart(warriorsGames, 'Golden State');

  if (userInput() === 'houston') {
    hrSection.append(chart1);
  } else {
    gsSection.append(chart2);
  }
});
