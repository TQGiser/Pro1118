<template>
  <div>{{ msg }}</div>
  <button data-fas="world" @click="handleClick('Vue', $event)">
    事件对象按钮</button
  ><br />
  <p>{{ computedName }}</p>
  <li
    v-for="(row, index) in list"
    :key="index"
    :class="{
      f: row == 'first',
      s: row == 'second',
      t: row == 'third',
      fo: row == 'fourth'
    }"
  >
    {{ row }}
  </li>
  <br />
  <div class="btn">
    <slot></slot>
    <slot name="a"></slot><br />
    <slot name="b"></slot><br />
    <slot name="c"></slot><br />
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      msg: "Hello",
      list: ["first", "second", "third", "fourth"]
    });
    const handleClick = (argp, e) => {
      state.msg = state.msg + argp + e.srcElement.dataset.fas;
      e.srcElement.style.background = "red";
    };
    const computedName = computed(() => {
      return state.msg
        .split("")
        .reverse()
        .join("");
    });
    return {
      ...toRefs(state),
      handleClick,
      computedName
    };
  }
};
</script>

<style scoped>
.f {
  background-color: red;
}

.s {
  background-color: rgb(150, 84, 84);
}

.t {
  background-color: rgb(40, 148, 198);
}

.fo {
  background-color: rgb(30, 228, 73);
}
</style>