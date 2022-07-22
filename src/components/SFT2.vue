<template>
  <input ref="file" type="file" multiple accept=".shp,.dbf,.shx" />
  <button @click="handleSelect">确认</button>
</template>

<script>

import { read as shapeRead } from "shapefile";
import { toRefs, reactive, } from "vue";
export default {
    async readInputFile(file) {
      // 读取文件
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
         reader.readAsArrayBuffer(file)
        reader.onload = function() {
          resolve(this.result)
        }
        reader.onerror = function() {
          reject(this)
        }
      })
    },
  setup() {
    const state = reactive({
        file:null
    });
    const handleSelect = () => {
      let files = state.file.files;
      // console.log(files, typeof files, 'files FileList')
      files = Array.from(files); // FileList => Array, 方便使用 Array 方法
      // console.log(files, typeof files, 'files Array')
      parseShapefile(files); // 解析选择的 shp 并绘制显示
    };
    const parseShapefile = (files) => {
      const shpFile = files.find((f) => f.name.endsWith(".shp"));
      const dbfFile = files.find((f) => f.name.endsWith(".dbf"));
      const promises = [shpFile, dbfFile].map((i) => readInputFile(i));
      Promise.all(promises)
        .then(([shp, dbf]) => {
          return shapeRead(shp, dbf);
        })
        .then(async (source) => {
          console.log(source);
          return source.features;
        })
        .then((featureJsons) => {
          console.log(featureJsons);
        })
        .catch((error) => console.error(error.stack));
    };
    const  readInputFile= (file)=>{
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
         reader.readAsArrayBuffer(file)
        reader.onload = function() {
          resolve(this.result)
        }
        reader.onerror = function() {
          reject(this)
        }
      })
    }
    return {
      parseShapefile,
      handleSelect,
      readInputFile,
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
</style>