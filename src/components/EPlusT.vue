<template>
    <el-select  v-model="value" class="m-2" placeholder="Select" size="small">
        <el-option id="dem" 
        v-for="item in op" 
        :key="item.value" 
        :label="item.label" 
        :value="item.value" 
        ref='选择区县'/>
    </el-select>
    {{ value }}
</template>

<script>
import { onMounted, toRefs, reactive,ref} from "vue";
export default {
    setup() {
        const state = reactive({
            msg: null,
            op: null,
            value:null
        });
       
        onMounted(() => {
            state.value = ref(null)
            state.op = [
                {
                    value: "巴塘",
                    label: "巴塘",
                },
                   {
                    value: "理塘",
                    label: "理塘",
                },
            ]
        })
        return {
            ...toRefs(state),
        };
    }
};
</script>

<style>
.box {
    margin: 20px;
    width: 400px;
    height: 400px;
    background: rgb(190, 92, 92);
    color: #aaa;
}

.fl {
    float: left;
}

p {
    color: black;
    font-size: larger;
    text-align: center;
}
</style>
