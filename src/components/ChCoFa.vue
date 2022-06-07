<template> 知识{{ myid }}：{{ mytext }}<br /> </template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: ["title", "id"],
  setup(props) {
    const state = reactive({
      mytext: props.title,
      myid: props.id
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>