<template>
    <div id="main-table">
        <div>
            <div id="main">
            <Table></Table>
            </div>
        </div>
        <div class="dice-div">
            <Dice v-for="dice, index in this.$store.state.dices"
                v-bind:value="dice.value"
                v-bind:selected="dice.selected"
                v-bind:index="index"/>
        </div> 
        <div>
            <button v-on:click="roll">Roll</button>
        </div>       
    </div>
</template>

<script>
import Table from './Table.vue'
import Dice from './Dice.vue'

export default {
    
    name: 'game',
    components: {
        Table,
        Dice,
  }, 
    methods:{
        roll(){
          this.$store.commit('rollDices');
          this.$store.commit('displayValues');

        }
    },
    }
</script>

<style scoped>
#main {
  background:rgb(12, 20, 133);
  text-align: center;
  color: rgb(170, 104, 57);
  padding: 0.5em;
  font-size: 5px;
  margin-bottom: 0.7em;
}
#main-table {
  align-items: center;
  text-align: center;

}
.dice-div {
  
  display: inline-block;
}

.dice {
  align-content: center;
  width: 25%;
  height: 5%;
  float: left;
  margin: 1px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  background: rgb(255, 255, 255);
  color: rgb(0, 1, 3);


}

.selectedDice {
  background: rgb(182, 182, 180);
}

.dice:hover {
  cursor: pointer;
}
</style>