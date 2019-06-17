import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    count: 0,

    yatzyTable: [],

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
