<template>
  <E3P />
  <BlogPost v-for="post in posts" :key="post.id" :title="post.title" :id="post.id"></BlogPost>
  <EchartsPra />
  <EchartsPra2 />
  <child-comp /><br />
  <ChC2 /><br />
  <ChC5 />
  <ChC3 /><br />
  <ChC4 />
  <C5Event>
    test!<br />
    <template v-slot:a>a</template>
    <template v-slot:b>b</template>
    <template v-slot:c>c</template>
  </C5Event>
  <button id="show-modal" @click="sw">Show Modal</button>
  <transition name="modal">
    <ModalV v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </ModalV>
  </transition>
</template>

<script>
import { reactive, toRefs } from "vue";
import ChildComp from "./ChildComp.vue";
import ChC2 from "./ChC2.vue";
import ChC3 from "./ChC3.vue";
import ChC4 from "./ChC4.vue";
import ChC5 from "./ChC5.vue"
import C5Event from "./C5Event.vue";
import ModalV from "./ModalV.vue";
import EchartsPra from "./EchartsPra.vue";
import EchartsPra2 from "./EchartsPra2.vue";
import BlogPost from "./ChCoFa.vue";
import E3P from "./E3P.vue";
export default {
  components: {
    E3P,
    ChildComp,
    ChC2,
    ChC5,
    ChC3,
    ChC4,
    C5Event,
    ModalV,
    EchartsPra,
    EchartsPra2,
    BlogPost

  },
  setup() {
    const state = reactive({
      count: 0,
      showModal: false,
      posts: [
        { id: 1, title: "HTML2" },
        { id: 2, title: "CSS3" },
        { id: 3, title: "Java2Script" },
        { id: 4, title: "jQu412ery" }
      ]
    });
    const sw = () => {
      state.showModal = true;
    };

    return {
      sw,
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>