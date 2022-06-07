<template>
    <div class="canvars" ref="myRef"></div>
</template>
 
<script>
import * as echarts from "echarts";
import { ref, onMounted, } from "vue";
export default {
    setup() {
        const myRef = ref(null); // 获取dom实例
        onMounted(() => {
            renderChart(); // 生命周期挂载函数渲染图表
        });
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
                            { value: 1048, name: "Search Engine" },
                            { value: 735, name: "Direct" },
                            { value: 580, name: "Email" },
                            { value: 484, name: "Union Ads" },
                            { value: 300, name: "Video Ads" },
                        ],
                    },
                ],
            });
        };
        return {
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