<template>
  <div class="canvars" ref="myRef"></div>
</template>
 
<script>
import * as echarts from "echarts";
import { ref, onMounted, reactive, toRefs } from "vue";
export default {
  props: ['proName','proProgres','proCon'],
  setup(props) {
    const myRef = ref(null); // 获取dom实例
    onMounted(() => {
      renderChart(); // 生命周期挂载函数渲染图表
    });
    const renderChart = () => {
      const myChart = echarts.init(myRef.value);
      myChart.setOption({
        title: {
          textStyle:{
            color:'white',
            fontSize:16
          },
          text: '项目名称:' + state.title,
          left:'center',
          backgroundColor:'rgb(69, 156, 232)'
        },
        legend: {
          top: "5%",
          left: "1px",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: props.proName,
            type: "pie",
            radius: ["30%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              formatter: ' {d}% ',
              position:'inside',
              show: true,
              alignTo: "edge",
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: "40",
            //     fontWeigth: "bold",
            //   },
            // },
            labelLine: {
              show: false,
            },
            data: [
              { value: props.proProgres, name: props.proCon,},
              { value: 100-props.proProgres, name: "待完成",label:{show:false} },
       
            ],
             
          },
        ],
        // backgroundColor: '#2c343c',
        color:['rgb(69, 156, 232)', 'gray',]
      });
    };
    const state = reactive({
      title: props.proName,
      pro:props.proProgres,
      con:props.proCon

    })
    return {
      ...toRefs(state),
      myRef,
    };
  },
};
</script>
 
<style scoped>
.canvars {
  padding: 10px;
  width: 500px;
  height:500px;
}
</style>