<template>
  <div v-bind:class = 'item' v-for="(item,index) in names" :key="item.id" >
  {{item}}{{index}}  </div>

  <div ref="myRef">获取单个DOM元素</div>
  <ForDiv/>
</template>
<script>
import ForDiv from './components/ForDiv.vue'
import {ref, onMounted } from 'vue'
export default {
  components:{



    ForDiv
  },
  setup(){
    const myRef = ref(null)
    const names = ['diva','divb']
    const color = 'red'
    onMounted(()=>{
      console.log(myRef.value)
    })                                                                                                                                                                                                                
    return {
      myRef,
      color,
      names
    }
  }
}
</script>

<style lang="scss">
.diva{
  width:300px;
  height:300px;
  position:fixed;
  left:10px;
  top:10px;
  color:v-bind(color);
  margin: 20px;
  background-color: rgb(144, 102, 40);
}
.divb{
   width:300px;
  height:300px;
    left:350px;
  top:10px;
  position: fixed;
  color:v-bind(color);
  margin: 20px;
  background-color: rgb(71, 44, 194);
}
</style>
