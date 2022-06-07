<template>
    <p>ChC5</p>
    <button v-on:click="test">test</button>
    <div>
        {{ msg }}
    </div>
</template>

<script>
import { reactive, toRefs, } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore()
        const state = reactive({
            msg: null

        })
        const test = () => {
            state.msg = store.state['value1']
        }
        // onMounted(() => {
        //     state.msg = store.state['value1']
        // })
        return {
            test,
            ...toRefs(state, store)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>