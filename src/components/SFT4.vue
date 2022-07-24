<template>
  <div ><span id="title">数据部项目进度表</span>
   <el-upload
   name="test"
      :before-upload="upload"
      :show-file-list="false"
      accept=".xlsx,.xls"
      style="width: 100px; display: inline-flex"
    >
      <el-button type="primary"> 打开excel文件 </el-button>
    </el-upload>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      projs: null,
    });
    function readExcel(file) {
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        console.log(ev.target.result,'AAA')
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