<template>
  <div class="messitem">
    <div class="left">{{ head }}</div>
    <div class="right">{{record}}</div>
  </div>
</template>

<script>
export default {
  props: {
    head: String,
    record: String,
  },
};
</script>
<style scoped="MessItem">
.messitem {
  height: 60px;
  display: flex;
}
.left {
     font-size: 15px;
  font-weight:inherit;
  line-height: 60px;
  text-align: center;
  flex: 1;
}
.right {
     font-size: 15px;
  font-weight:inherit;
  line-height: 60px;
  text-align: center;
  flex: 2;
}
</style>