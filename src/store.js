import Vue from 'vue'
import Vuex from 'vuex'
import { 
  simpleValidation,
  checkPair,
  checkTwoPair,
  checkTriplets,
  checkFours,
  checkSLadder,
  checkBLadder,
  checkFullHouse,
  checkYatzy,
  checkChance,
  checkResults
 } from './validation.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    
    count: 0, //counts how many times the dices are thrown

    yatzyTable: [    
    {name: 'Ones', value: 0, locked: false}, 
    {name: 'Twos', value: 0, locked: false},
    {name: 'Threes', value: 0, locked: false}, 
    {name: 'Fours', value: 0, locked: false},
    {name: 'Fives', value: 0, locked: false}, 
    {name: 'Sixes', value: 0, locked: false},
    {name: 'Bonus', value: 0, locked: true}, 
    {name: 'Total', value: 0, locked: true},
    {name: 'Pair', value: 0, locked: false, validation: checkPair},  
    {name: 'Two Pair', value: 0, locked: false, validation: checkTwoPair}, 
    {name: 'Triple', value: 0, locked: false, validation: checkTriplets}, 
    {name: 'Four of a kind', value: 0, locked: false, validation: checkFours}, 
    {name: 'Small Straight', value: 0, locked: false, validation: checkSLadder}, 
    {name: 'Large Straight', value: 0, locked: false, validation: checkBLadder}, 
    {name: 'Full House', value: 0, locked: false, validation: checkFullHouse}, 
    {name: 'Yatzy', value: 0, locked: false, validation: checkYatzy}, 
    {name: 'Chance', value: 0, locked: false, validation: checkChance}, 
    {name: 'Total', value: 0, locked: true}],

    dices:[    
    {name: 'd1', value: 0, selected: false}, 
    {name: 'd2', value: 0, selected: false},
    {name: 'd3', value: 0, selected: false}, 
    {name: 'd4', value: 0, selected: false},
    {name: 'd5', value: 0, selected: false}
  ],

  },
  mutations: {

    displayValues(state) {
      var sorted = this.getters.sortedDiceValues;
      var table = state.yatzyTable
      for (let i=0; i<6; i++) {        
        if (!table[i].locked) {
          table[i].value = simpleValidation(i+1, sorted);
        }
      }
      table[6].value = this.getters.bonus;
      table[7].value = this.getters.section1Score;
      for(let i=8; i<17; i++){
        let row = table[i];
        row.value = (!row.locked ? row.validation(sorted): row.value);
      }
      table[17].value = this.getters.totalScore;
      checkResults();
    },
    add(state, index){
      var table = state.yatzyTable;
      var column = table[index];
      if (!column.locked){
        if (state.count !== 0) {
          column.locked = true;
        }
      }
    },
    rollDices(state){
      const min = Math.ceil(1);
      const max = Math.floor(7)
      
      if(state.count++ < 3){
        state.dices.forEach(dice => {

          if(!dice.selected){
            dice.value = Math.floor(Math.random() * (max - min) + min);
          }
        });
      }
    },
    selectDice(state, index){
      state.dices[index].selected = !state.dices[index].selected;
    },
    lockValue(state, index) { //Locks a column so that no further value can be modified
      console.log('locking value at index: ' + index)
      state.yatzyTable[index].locked = true
    },
    
    resetDices(state){//resets dices after round or game is finished
      
      state.count = 0;
      state.dices.forEach(dice => {
        dice.selected = false;
        dice.value = 0;
      });
      state.yatzyTable.forEach(row => {
        if (!row.locked){
          row.value = 0;
        }
      });
    },

    resetGame(state){//resets all values to 0 when all columns are
      state.count = 0;
      let table = state.yatzyTable
      table.forEach(row => {
        row.value = 0;
        row.locked = false;
      });
      table[6].locked = true;
      table[7].locked = true;
      table[17].locked = true;
    },
  },
  
  actions: {

  },
  getters:{
    yatzyTable(state){
      return state.yatzyTable;
    },
    count(state) {
      return state.count;
    },
    dices(state){
      return state.dices;
    },
    diceValues(state, getters){
      var values = [];
      getters.dices.forEach(dice =>{
        values.push(dice.value);
      });
      return values;
    },
    sortedDiceValues(state, getters){
      return getters.diceValues.sort();
    },
    section1Score(state, getters){
      let score = 0;
      for(let i=0; i<6; i++){
        if(getters.yatzyTable[i].locked === true){
          score += getters.yatzyTable[i].value;
        }
      }
      return score;
    },
    totalScore(state, getters){
      let score = 0;
      for(let i=8; i<17; i++){
        if(getters.yatzyTable[i].locked === true){
        score += getters.yatzyTable[i].value;
        }
      }
      return score + getters.section1Score;
    },

    bonus(state, getters){
      if(getters.section1Score >= 63){
        return 50;
      }
      return 0;
    },
  }
})
