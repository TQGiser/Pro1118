<template>
    <el-upload ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :before-upload="upload"
        :show-file-list="false" accept=".xlsx,.xls" style="width: 100px; display: inline-flex;">
        <el-button size="mini" type="text">
            导入
        </el-button>
    </el-upload>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
</style>