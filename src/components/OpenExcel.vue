<template>
  <h1>测试</h1>
  <br />

  <div>
    <el-button>这是element-plus的样式</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
  </div>
  <br />
  <div>
    <button @click="sah">click</button>
    <!-- <transition name="el-fade-in-linear">
      <div v-show="show" class="elshowbox">.el-fade-in-linear</div>
  </transition> -->
    <transition name="el-fade-in">
      <div v-show="show" class="elshowbox">.el-fade-in</div>
    </transition>
  </div>

  <input type="file" accept=".xls,.xlsx" class="upload-file" @change="changeExcel($event)" />
  <br>
  <button @click="renderChart">生成折线图</button>
  <p>{{ r1_v }}</p>
  <p>{{ r2_v }}</p>
  {{ testmsg }}
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
      testmsg: null,
    });
    const state = reactive({
      show: true,
    });
    const sah = () => {
      state.show = !state.show;
    };
    function changeExcel(e) {
      const files = e.target.files;
      if (files.length <= 0) {
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        console.log("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        const workbook = XLSX.read(ev.target.result, {
          type: "binary",
        });
        const wsname = workbook.SheetNames[0];
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);
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
      fileReader.readAsBinaryString(files[0]);
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
      sah,
      renderChart,
      myRef,
      ...toRefs(state),
      ...toRefs(xlsx),
      changeExcel,
    };
  },
};
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