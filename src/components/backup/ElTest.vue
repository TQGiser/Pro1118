<template>
    <el-upload ref="upload" action="" :before-upload="upload" :show-file-list="false" accept=".xlsx,.xls"
        style="width: 100px; display: inline-flex;">
        <el-button type="primary">
            打开excel
        </el-button>
    </el-upload>
    <el-button type="primary" @click="renderChart">
        绘制折线图
    </el-button>
    <br>
    <div class="canvars" ref="myRef"></div>
</template>

<script>
import * as XLSX from "xlsx";
import * as echarts from "echarts";
import { reactive, toRefs, ref } from "vue";
export default {
    setup() {
        const myRef = ref('');
        const xlsx = reactive({
            r1_v: null,
            r2_v: null,
        });
        const af = () => {
            alert('dasf')
        }
        function readExcel(file) {
            const fileReader = new FileReader();
            fileReader.onload = (ev) => {
                const workbook = XLSX.read(ev.target.result, {
                    type: "binary",
                });
                const wsname = workbook.SheetNames[0];
                const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);
                console.log(ws[0])
                // for (let index in ws) {
                //     Col_A_Value.push(ws[index].A)
                //     Col_B_Value.push(ws[index].B)
                //     Col_C_Value.push(ws[index].C)
                //     Col_D_Value.push(ws[index].D)
                //     Col_E_Value.push(ws[index].E)

                // }
                xlsx.r1_v = Object.values(ws[0]);
                xlsx.r2_v = Object.values(ws[1]);
            };
            fileReader.readAsBinaryString(file);
        }
        function upload(rawFile) {
            readExcel(rawFile);
        }
        const renderChart = () => {
            const myChart = echarts.init(myRef.value);
            const option2 = {
                xAxis: {
                    type: "category",
                    data: ["A", "B", "C", "D", "E"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: xlsx.r1_v,
                        type: "line",
                    },
                    {
                        data: xlsx.r2_v,
                        type: "line",
                    },
                ],
            };
            myChart.setOption(option2);
        };
        return {
            myRef,
            renderChart,
            af,
            ...toRefs(xlsx),
            readExcel,
            upload
        }
    }
}
</script>

<style>
.canvars {
    width: 800px;
    height: 400px;
}

.elshowbox {
    margin-bottom: 10px;
    width: 100px;
    height: 20px;
    border-radius: 4px;
    background-color: rgb(184, 64, 209);
}
</style>