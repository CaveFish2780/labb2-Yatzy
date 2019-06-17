import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    count: 0,

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

  },
  actions: {

  }
})
