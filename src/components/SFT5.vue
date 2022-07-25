<template>
   <el-upload
   name="test"
      :before-upload="upload"
      :show-file-list="false"
      accept=".shp"
      style="width: 100px; display: inline-flex"
    >
      <el-button type="primary"> 打开excel文件 </el-button>
    </el-upload>
</template>

<script>
import { reactive, toRefs } from "vue";
import { read as shapeRead } from "shapefile";
export default {
  setup() {
    const state = reactive({
        projs:null
    });
    const readInputFile = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function () {
          resolve(this.result);
        };
        reader.onerror = function () {
          reject(this);
        };
      });
    };
    function upload(rawFile) {
        const promise = readInputFile(rawFile)
        promise.then((data) => {
          return shapeRead(data);
        })
        .then((source) => {
          console.log(source.features);
        })
        .catch((error) => console.error(error.stack));
    }
    return {
      readInputFile,
      state,
      ...toRefs(state),
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