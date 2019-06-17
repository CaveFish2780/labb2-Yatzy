<template>
    <div id="yatzy-table">
      <div id="value-table">
        <div class="value-div" v-for="obj in this.$store.getters.yatzyTable">
        {{ obj.name }}
        </div>
      </div>
        <div id="score-table">
        <div class="score-div"
          v-for="(obj, index) in this.$store.getters.yatzyTable"v-bind:index="index"
          v-model:value="obj.value"
          v-on:click="addValue(index)">
          {{ obj.value }}
        </div>
      </div>
      </div>
</template>

<script>
export default {
    
    name: 'yatzyTable'
    }
</script>

<style scoped>

</style>