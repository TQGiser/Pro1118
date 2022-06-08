<template>
  <div class="canvars" ref="myRef"></div>
  <button @click="test">test</button>
  <div>{{ name1 }}</div>
</template>
 
<script>
import * as echarts from "echarts";
import { ref, onMounted, reactive, toRefs } from "vue";
export default {
  props: ['name'],
  setup(props) {
    const myRef = ref(null); // 获取dom实例
    onMounted(() => {
      renderChart(); // 生命周期挂载函数渲染图表
    });
    const test = () => {
      console.log(props.name)
    }
    const renderChart = () => {
      const myChart = echarts.init(myRef.value);
      myChart.setOption({
        title: {
          text: "Test",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: true,
              alignTo: "edge",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeigth: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 70, name: "1.Search Engine   2.asdfikg" },
              { value: 30, name: "Direct" },
       
            ],
          },
        ],
      });
    };
    const state = reactive({
      name1: props.name
    })
    return {
      test,
      ...toRefs(state),
      myRef,
    };
  },
};
</script>
 
<style scoped>
.canvars {
  width: 800px;
  height: 400px;
}
</style>