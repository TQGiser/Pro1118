<template>
    {{ time }}
</template>

<script>
import { toRefs, onMounted, reactive } from 'vue'
export default {

    setup() {
        const state = reactive({
            time: new Date()
        })
        onMounted(() => {
            setInterval(function () {
                state.time = new Date()
            }, 1000)
        })
        return {
            ...toRefs(state)
        }
    }

}
</script>

<style lang="scss" scoped>
</style>