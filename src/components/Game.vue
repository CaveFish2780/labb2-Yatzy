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
        }
    },
    }
</script>

<style scoped>

</style>