<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">&#62; 返回</div>
      <div slot="center">认证状态</div>
    </nav-bar>
    <div class="mess">审核中</div>
    <mess-item head="学校" :record="school"></mess-item>
    <mess-item head="专业" :record="profession"></mess-item>
    <mess-item head="入校时间" :record="inTime"></mess-item>
    <mess-item head="毕业时间" :record="outTime"></mess-item>
    <el-row>
        <div class="buttons">
      <el-button type="warning" class="button1">取消认证</el-button>
      <el-button type="primary" class="button2">修改认证</el-button>
        </div>
    </el-row>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MessItem from "../ChildCmps/MessItem.vue";
export default {
  data() {
    return {
      school: "北京大学",
      profession: "软件工程",
      inTime: "2080-9-12",
      outTime: "2090-12-13",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: {
    NavBar,
    MessItem,
  },
};
</script>
<style scoped="AttestationRes">
.mess {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 1px 1px rgb(100 100 100 / 10%);
}
.buttons {
  display: flex;
  justify-content: center;
}
.button1 {
  flex: 1;
}
.button2 {
  flex: 1;
}
</style>