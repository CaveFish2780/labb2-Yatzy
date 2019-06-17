export function simpleValidation(value, sortedDices){

    let occurance = 0;
      sortedDices.forEach(Dicevalue => {
        
        if(Dicevalue === value){
          occurance ++;
        }
      });
        return occurance * value;
  }
  export function checkPair(values){

    for(let i=0; i<values.length-1;i++){
      if(values[i] === values[i+1]){
  
        return 2 * values[i];
      }
    }
    return 0;
  }
  
  export function checkTwoPair(values){
    console.log('2pairs')
    for(let i=0; i<values.length-1;i++){
      if(values[i] === values[i+1]){
        var secondPairValue = checkPair(values.slice(i+2, 5))
        if(secondPairValue != 0){
          return (values[i] * 2) + secondPairValue;
        }
      }
    }
    return 0;
  }

  export function checkTriplets(values){

    for(let i=0; i<values.length-2;i++){
      if(values[i] === values[i+1] && values[i+1] === values[i+2]){

        return 3 * values[i];
      }
    }
    return 0;
  }

  export function checkFours(values){

    for(let i=0; i<2;i++){
      if(values[i] === values[i+1] && values[i+1] === values[i+2] && values[i+2]=== values[i+3]){
        return 4 * values[i];
      }
    }
    return 0;
  }

  export function checkSLadder(values){

    if(JSON.stringify(values.slice(0,5)) === JSON.stringify([1,2,3,4,5])){
      return 15;
    }
    return 0;
  }

  export function checkBLadder(values){

    if(JSON.stringify(values.slice(0,5)) === JSON.stringify([2,3,4,5,6])){
      return 15;
    }
    return 0;
  }

  export function checkFullHouse(values){

    if(values[0] === values[1] && values[1] === values[2]){
      let pairValue = checkPair(values.slice(3,5));
      if(pairValue != 0){
        return (values[1] * 3) + pairValue;
      }
    }
    else if(values[0] === values[1]){
      let tripletValue = checkTriplets(values.slice(2,5));
      if(tripletValue != 0){
        return (values[1] * 2) + tripletValue;
      }
    }
    return 0;
  }

  export function checkYatzy(values){
    if (values.filter(value => value === values[1]).length === 5){
      return 50;
    }
    return 0;
  }

  export function checkChance(values){
    let sum = 0;
    values.forEach(value => sum += value);
    return sum;
  }
