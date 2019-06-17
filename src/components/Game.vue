<template>
    <div id="main-table">
        <div>
            <div id="main">
            <Table></Table>
            </div>
        </div>
        <div class="dice-div">
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

        }
    },
    }
</script>

<style scoped>

</style>