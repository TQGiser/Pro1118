<template>
  <div v-if="test" id="c3">
    <a v-bind:href="path">百度链接</a>
  </div>

  <button @click="show">Show hide</button><br />
  <p v-if="test">you can see now</p>
  <button @click="sub">-</button>
  <span>{{ counter }}</span>
  <button @click="add">+</button><br />
  <button @click="pop">弹窗信息</button>

</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {

    const show = () => {
      state.test = true;
    };
    const add = () => {
      state.counter++;
    };
    const sub = () => {
      state.counter--;
    };

    const state = reactive({
      path: "http://www.baidu.com",
      test: false,
      counter: 1,
      msg: null
    });
    const pop = () => {
      alert(state.counter);
    };
    return {
      pop,
      show,
      add,
      sub,
      ...toRefs(state)
    };
  }
};
</script>

<style  scoped>
button,
span {
  width: 200px;
  font-size: 13px;
  margin: 10px;
}
</style>