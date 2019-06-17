<template>
  <div id="app">
    <Game></Game>

  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style scoped>
#app {
  background-color: rgb(100, 109, 231);
}
</style>
