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
       grid: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 50
    },
    title: {
        text: '60' + '%',
        right: 0,
        top: 'middle',
        textStyle: {
            fontWeight: 500,
            fontSize: 12
        }
    },
    color: ['#74d1fd', '#eee'],
    xAxis: {
        show:false,
        type : 'value',
        boundaryGap : [0, 0]
    },
    yAxis: [
        {
            type : 'category',
            data : [''],
            axisLine:{show:false},
            axisTick:[{
                show:false
            }]
        }
    ],
    series: [
        {
            type: 'bar', 
            name: '已完成',
            stack: '总量',
            barMaxWidth: 20,
            label: {
                show: false,
                position: 'inside',
                formatter: '{c}%'
            },
            itemStyle: {
                barBorderRadius: [10, 10, 10, 10]
            },
            data: [45]
        },
        {
            type: 'bar', 
            name: '未完成',
            stack: '总量',
            barMaxWidth: 20,
            label: {
                show: false,
                color: '#aaa',
                position: 'inside' ,
                formatter: '{c}%'
            },
            showBackground: true,
            backgroundStyle: {
                color: '#eee',
                barBorderRadius: [10,10,10,10]
            },
            itemStyle: {
                color: '#eee',
                barBorderRadius: [0, 10, 10, 0],
            },
            silent:true,
            data: [55]
        }
    ]

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
  width: 200px;
  height: 30px;
}
</style>