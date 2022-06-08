<template>
  <div class="box fl"><p>第一个Div</p></div>
  <div class="box fl"><p>第二个Div</p></div>
  <div class="box fl"><p>第三个Div</p></div>
  <div class="box fl"><p>第四个Div</p></div>
</template>

<script>
export default {};
</script>

<style>
.box {
  margin: 20px;
  width: 400px;
  height: 400px;
  background: rgb(190, 92, 92);
  color: #aaa;
}
.fl {
  float: left;
}
p{
    color: black;
    font-size: larger;
    text-align: center;
}
</style>
