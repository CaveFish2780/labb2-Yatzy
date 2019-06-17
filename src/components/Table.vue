<template>
    <div id="yatzy-table">
      <div id="value-table">
        <div class="value-div" v-for="obj in this.$store.getters.yatzyTable">
        {{ obj.name }}
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