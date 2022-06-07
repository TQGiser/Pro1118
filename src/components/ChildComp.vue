<template>
  子组件<br />
  <button v-on:click="count++">您单击了 {{ count }} 次.</button>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const s = reactive({
      count: 0
    });

    return {
      ...toRefs(s)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>