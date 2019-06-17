<template>
    <div class="dice" v-on:click="selectDice(index)"
    v-bind:class="{selectedDice:selected}">
    {{ value }}
    </div>  
</template>

<script>
export default {
    
    name: 'dice'
    methods:{
        selectDice(){

        }
    }
    }
</script>

<style scoped>

</style>