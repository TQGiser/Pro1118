<template>
  <input ref="file" type="file" multiple accept=".shp" />
  <button @click="handleSelect">确认</button>
  <button @click="test">测试</button>
</template>
<script>
import { read as shapeRead } from "shapefile";
import { toRefs, reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      file: null,
    });
    const handleSelect = () => {
      let files = state.file.files;
      files = Array.from(files); // FileList => Array, 方便使用 Array 方法
      parseShapefile(files); // 解析选择的 shp
    };
    const parseShapefile = (files) => {
      console.log(files)
      const shpFile = files.find((f) => f.name.endsWith(".shp"));
      console.log(shpFile)
      const promises = [shpFile].map((i) => readInputFile(i));
      Promise.all(promises)
        .then(([shp]) => {
          return shapeRead(shp);
        })
        .then(async (source) => {
        //   console.log(source);
          return source.features;
        })
        // .then((featureJsons) => {
        // //   console.log(featureJsons);
        // })
        .catch((error) => console.error(error.stack));
    };
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
    const test = (rawFile)=>{

        readInputFile(rawFile)

    }
    return {
      test,
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