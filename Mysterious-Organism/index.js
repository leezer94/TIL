// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,

    get specimenNum() {
      return this._specimenNum;
    },

    get dna() {
      return this._dna;
    },

    set specimenNum(specimenNum) {
      return this._specimenNum = specimenNum;
    },

    set dna (dna) {
      return this._dna = dna;
    },

    mutate() {
      let randomBase = Math.floor(Math.random() * 15);
      let randomBaseAmong3 = Maht.floor(Math.random() * 3)
      let dnaBasesNoA = ['T','C','G'];
      let dnaBasesNoT = ['A','C','G'];
      let dnaBasesNoC = ['A','T','G'];
      let dnaBasesNoG = ['A','C','T'];
      if(dna[randomBase] === 'A'){
        dna[randomBase] === dnaBasesNoA[randomBaseAmong3];
      }else if(dna[randomBase] === 'C') {
        dna[randomBase] === dnaBasesNoC[randomBaseAmong3];
      }else if(dna[randomBase] === 'G') {
        dna[randomBase] === dnaBasesNoC[randomBaseAmong3];
      }else if(dna[randomBase] === 'T') {
        dna[randomBase] === dnaBasesNoC[randomBaseAmong3];
      }

      return dna;
    },

    compareDNA (pAequor) {
      let commonality = 0;
      for(let i = 0; i < pAequor['dna'].length; i++) {
        if(pAequor.dna[i] === dna[i]){
          commonality ++;
        }
      }
      percentCommonality = ((commonality / dna.length) * 100).toFixed(2);
      console.log(`Specimen #${specimenNum} and Specimen #${pAequor['specimenNum']} have ${percentCommonality}% DNA in common`)
    },

    willLikelySurvive () {
      cAndGCounter = 0;
      for(let i = 0; i < dna.length; i++) {
        if(dna[i] === 'C' || dna[i] === 'G'){
          cAndGCounter ++;
        }
      }
      if(cAndGCounter < 9) {
        return false;
      } else {
        return true;
      }
    },
  }
}
// test cases
// const test1 = pAequorFactory(1, mockUpStrand());
// const test2 = pAequorFactory(2, mockUpStrand());
// console.log(test1.dna);
// console.log(test2.dna);
// test1.compareDNA(test2);
// console.log(test1.willLikelySurvive())
// console.log(test2.willLikelySurvive())