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

<style>
#app {
  background-color: rgb(100, 109, 231);
}
/*@media*/
@media (max-width: 300px ){
  #value-table{
    width: 6em;
    }
  #score-table{
     width: 6em;
}
}
@media (min-width: 300px ){
  #value-table{
    width: 7em;
    }
  #score-table{
     width: 7em;
}
}
@media (min-height: 600px){
  #yatzy-table{
    font-size: 5em;
  }
  .dice{
    font-size: 200%;
  }  
  .rollDiv{
    margin-bottom: 30%;
  }
}
@media (max-height: 500px){
  #yatzy-table{
    font-size: 4em;
  }
  .dice{
    font-size: 100%;
  }
}
@media (min-width: 800px){
  #value-table{
    width: 15.5em;
    }
  #score-table{
     width: 15.5em;
}
}

</style>
