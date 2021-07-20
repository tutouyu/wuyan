<template>
  <div>
    <nav-bar>
      <div slot="left">&#62; 返回</div>
      <div slot="center">个人认证</div>
    </nav-bar>
    <div class="mess">请填写下列资料以完成认证申请:</div>
    <div class="input">
      <div class="messItem">
        <div class="left">省份</div>
        <el-input
          class="right"
          v-model="province"
          placeholder="请输入所在省份"
          size="medium"
        ></el-input>
      </div>
      <div class="messItem">
        <div class="left">学校</div>
        <el-input
          class="right"
          v-model="school"
          placeholder="请输入所在学校"
        ></el-input>
      </div>
      <div class="messItem">
        <div class="left">专业</div>
        <el-input
          class="right"
          v-model="profession"
          placeholder="请输入所在专业(15字以内)"
          maxlength="15"
        ></el-input>
      </div>
      <div class="messItem">
        <div class="left">入校时间</div>
        <el-input
          class="right"
          v-model="inTime"
          placeholder="请输入入校时间"
          suffix-icon="el-icon-date"
          @change="time"
        ></el-input>
      </div>
      <div class="messItem">
        <div class="left">毕业时间</div>
        <el-input
          @change="time"
          class="right"
          v-model="outTime"
          placeholder="请输入毕业时间"
          suffix-icon="el-icon-date"
        ></el-input>
      </div>
      <div class="messItem">
        <div class="left">导师(选填)</div>
        <el-input
          class="right"
          v-model="teacher"
          placeholder="请输入你的导师"
        ></el-input>
      </div>
      <div class="messItem">
        <div class="left">研究方向(选填)</div>
        <el-input
          class="right"
          v-model="direction"
          placeholder="请输入研究方向"
        ></el-input>
      </div>
    </div>
    <el-row class="button">
      <el-button type="primary" round style="width: 80%" @click="sub">
        提交
      </el-button>
    </el-row>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  data() {
    return {
      province: "",
      school: "",
      profession: "",
      inTime: "",
      outTime: "",
      teacher: "",
      direction: "",
    };
  },
  methods: {
    time() {
      if (
        this.inTime > this.outTime &&
        this.inTime != "" &&
        this.outTime != ""
      ) {
        const h = this.$createElement;

        this.$notify({
          title: '错误',
          message: h('i', { style: 'color: teal'}, '入学时间不能大于毕业时间')
        });
      }
    },
    sub() {
      if (
        this.province == "" ||
        this.school == "" ||
        this.profession == "" ||
        this.inTime == "" ||
        this.outTime == ""
      ) {
         const h = this.$createElement;

        this.$notify({
          title: '错误',
          message: h('i', { style: 'color: teal'}, '必选项不能为空')
        });
      } else {
        this.$router.push("AttestationWay");
      }
    },
  },
  components: {
    NavBar,
  },
};

NavBar;
</script>
<style scoped="Attestation">
.mess {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  box-shadow: 0 1px 1px rgb(100 100 100 / 10%);
}
.messItem {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  display: flex;
  padding: 0px 15px;
}
.input {
  margin: 25px 0;
}
.left {
  flex: 2;
}
.right {
  flex: 4;
}
.button {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}
</style>