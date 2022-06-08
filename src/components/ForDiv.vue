<template>
  <div ><span id="title">数据部项目进度表</span>
   <el-upload
      ref="upload"
      :before-upload="upload"
      :show-file-list="false"
      accept=".xlsx,.xls"
      style="width: 100px; display: inline-flex"
    >
      <el-button type="primary"> 打开excel </el-button>
    </el-upload>

  </div>
  <div class="ted" v-for="item in projs" :key="item.key">
    <!-- <h1>{{item['项目名称'] }}</h1> -->

    <pie_e
      :proName="item['项目名称']"
      :proProgres="item['完成进度']"
      :proCon="item['完成内容']"
    ></pie_e>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
import pie_e from "./EchartsPra.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    pie_e,
  },
  setup() {
    const state = reactive({
      // pro_name: [],
      // pro_progres:[],
      // pro_con:[]
      projs: null,
    });
    function readExcel(file) {
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        const workbook = XLSX.read(ev.target.result, {
          type: "binary",
        });
        const wsname = workbook.SheetNames[0];
        const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);
        var a;
        var b = new Array();
        for (a in ws) {
          b.push(ws[a]);
          // state.pro_name.push(ws[a]["项目名称"]);
          // state.pro_progres.push(ws[a]["完成进度"]);
          // state.pro_con.push(ws[a]["完成内容"])
        }
        state.projs = b;
        // for (var index in ws) {
        //   state.name = Object.values(ws[index]);
        //   console.log(ws[index]["项目名称"]);
        //   var board = document.getElementById("app");
        //   const id = ws[index]["项目名称"];
        //   const new_div = document.createElement(id);
        //   new_div.type = "button";
        //   var object = board.appendChild(new_div);

        //   renderChart();
      };
      fileReader.readAsBinaryString(file);
    }
    function upload(rawFile) {
      readExcel(rawFile);
    }
    return {
      state,
      ...toRefs(state),
      readExcel,
      upload,
    };
  },
};
</script>

<style >
.ted {
  float: left;
}
#title{
    color:white;
    position:relative;
    left:50%;
    font-weight: 600;
    font-size: 20px;
    border: solid;
    background-color:rgb(69, 156, 232);
}
/* #ted {
    background-color: rgb(140, 228, 143);
} */
</style>