

class PerceptronOneNeron{



  constructor( learningData, answers, N = 2, e = 0.1 ){
    this.weights = Array(N).fill(0);
    this.e = e;
    this.N = N;
    this.train(learningData, answers);
  }





  solve( inputs ){

    if( inputs.length != this.N)
      throw "Not correct inputs " + inputs;

    let sum = 0;

    for( let i = 0; i < inputs.length; i++ ){
      sum += inputs[i] * this.weights[i];
    }

    return sum > 0.5 ? 1 : 0;

  }



  train( templateInputs, answers ){

    let isTrained = true;

    let epoch = 0;

    while( epoch < 20 && isTrained ){

      isTrained = false;

      epoch++;

      for( let n = 0; n < templateInputs.length; n++ ){

        let res = this.solve( templateInputs[n] );


        if( res != answers[n] ){
          isTrained = true;
        }

        let err = answers[n] - res;


        for( let i = 0; i < this.weights.length; i++ ){

          this.weights[i] += err * templateInputs[n][i] * this.e;
        }

      }


    }


    console.log("trained for epoch: "+epoch);

  }


  test( templateInputs, answers ){

    for( let i = 0; i < templateInputs.length; i++ ){
      let res = this.solve(templateInputs[i]);

      console.log(`inputs: ${templateInputs[i]} result: ${res} answers: ${answers[i]} ${ res == answers[i] ? "success" : "error" }`);
    }


  }


}





let leaningData = [
  [0,0],
  [0,1],
  [1,0],
  [1,1]
]

console.log("========AND==========");

let answersAnd = [0, 0, 0, 1]

let perceptronForAnd = new PerceptronOneNeron(leaningData, answersAnd);

perceptronForAnd.test(leaningData, answersAnd);


console.log("=========OR=========");



let answersOr = [0, 1, 1, 1]

let perceptronForOr = new PerceptronOneNeron(leaningData, answersOr);

perceptronForOr.test(leaningData, answersOr);


console.log("=========NOT==========");

let leaningDataNot = [
  [0, 1],
  [1, 0]
]

let answersNot = [ 1, 0 ]


let perceptronForNot = new PerceptronOneNeron(leaningDataNot, answersNot);

perceptronForNot.test(leaningDataNot, answersNot);
