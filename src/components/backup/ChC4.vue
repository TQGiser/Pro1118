<template>
    <button @click = "fadeInOut">显示/隐藏</button>
    <transition name="bounce">
        <h2 v-if="isShow">{{msg}}</h2>
    </transition>
</template>

<script>
import { reactive,toRefs } from 'vue'
    export default {
        setup(){
            const state=reactive({
                isShow:true,
                msg:"Hello Vue 3.0"
            })
            const fadeInOut=()=>{
                state.isShow=!state.isShow
            }
            return{
                ...toRefs(state),
                fadeInOut
            }
        }
    }
</script>

<style scoped>
.bounce-enter-active{
    animation: bounce-in 0.5s;
}
.bounce-leave-active{
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in{
    0%{
        transform:scale(0);
    }
    50%{
        transform:scale(1.25);
    }
    100%{
        transform:scale(1);
    }
}
</style>