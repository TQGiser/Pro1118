<template>
      <input ref="file" type="file" multiple accept=".shp,.dbf,.shx">
      <button @click="handleSelect">确认</button>
</template>

<script>
import {read as shapeRead } from 'shapefile'
export default {
  name: 'ShapefileParser',
  data() {
    return {
      map: undefined,
      shapeLayer: undefined
    }
  },
  methods: {
    handleSelect() {
      let files = this.$refs.file.files
      // console.log(files, typeof files, 'files FileList')
      files = Array.from(files) // FileList => Array, 方便使用 Array 方法
      // console.log(files, typeof files, 'files Array')
      this.parseShapefile(files) // 解析选择的 shp 并绘制显示
    },
    parseShapefile(files) {
      const shpFile = files.find(f => f.name.endsWith('.shp'))
      const dbfFile = files.find(f => f.name.endsWith('.dbf'))
      const promises = [shpFile, dbfFile].map(i => this.readInputFile(i))
      Promise.all(promises).then(([shp, dbf]) => {
        return shapeRead(shp, dbf)
      }).then(async(source) => {
        console.log(source)
        return source.features
      }).then((featureJsons) => {
        console.log(featureJsons)
      }).catch(error => console.error(error.stack))
    },
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
  }
}
</script>

<style scoped lang="scss">
</style>
