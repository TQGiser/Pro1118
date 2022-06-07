<template>
    ChC2's Part
    <div>{{ test }}</div><br>
    <div>{{ msg }}</div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const state = reactive({
            test: new Date(),
            msg: null

        })
        onMounted(() => {
            // store.commit('giv', '34212')       /*有BUG

            setInterval(function () {
                state.test = new Date()
            }, 1000)
            state.msg = store.veux_state['value1']
        })
        return {
            ...toRefs(store),
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>