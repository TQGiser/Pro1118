<template>
    <p>test</p>
    <button @click="test">A</button>
</template>

<script>
import { reactive,toRefs } from 'vue';
import * as myfuntest from '/github/vue_ec/public/js/test';
export default {
    setup(){
        const state = reactive({
            msg:"AAAA",
            msg2:"BBBB"
        })
        const test=()=>{
           myfuntest.fn1(state.msg)
           myfuntest.fn2(state.msg2)
        }
        return{
            test,
            ...toRefs(state)
        }
    }
}
</script>

<style>

</style>