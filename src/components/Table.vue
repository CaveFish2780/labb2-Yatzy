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
    
    name: 'yatzyTable',
    methods:{
        
        addValue(index){
            
            if(this.yatzyTable[index].locked === false){
                
                this.$store.commit('lockValue', index)
                this.$store.commit('resetDices')
                
            }else{
                console.log('locked!')
            }
        }
    }
    }
</script>

<style scoped>
#yatzy-table {
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  font-size: 5em;
 
}

#yatzy-table:hover {
  cursor: pointer;
}

#value-table {
  width: 7em;
  float: left;
  text-align: left;
  color: rgb(35, 54, 87);
}

#value-table :nth-child(even){
  background: rgb(247, 246, 245);
}

#value-table :nth-child(odd){
  background: rgb(95, 173, 209);
}

#score-table {
  float: left;
  color: rgb(170, 104, 57);
  width: 7em;

}
#score-table :nth-child(even) {
  background: rgb(245, 244, 242);
}

#score-table :nth-child(odd) {
  background: rgb(149, 167, 224);
}
#score-table :nth-child(7){
  color: rgb(10, 4, 0);
}

#score-table :nth-child(8){
  color: rgb(10, 4, 0);

}

#score-table :nth-child(18){
  color: rgb(10, 4, 0);

}

.selected {
  color: rgb(35, 54, 87);
}

.column-div:hover {
  color: rgb(35, 54, 87);
  cursor: pointer;
  /* background: black; */
}
</style>