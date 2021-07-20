<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">&#62; 返回</div>
      <div slot="center">认证方式</div>
    </nav-bar>
    <div class="select">
      <div :class="{ active: isMail }" class="mail" @click="choose">
        学校邮箱认证
      </div>
      <div :class="{ active: !isMail }" class="card" @click="choose">
        校园卡/学生证认证
      </div>
    </div>
    <div v-if="isMail">
      <div class="mess">学校邮箱(以edu.cn结尾)</div>
      <div class="input">
        <div class="left">学校邮箱认证</div>
        <el-input
          class="right"
          v-model="mail"
          placeholder="请输入正确邮箱"
        ></el-input>
      </div>
      <div class="input">
        <div class="left">验证码</div>
        <div class="right">
          <el-input
            v-model="check"
            placeholder="请输入验证码"
            style="width: 55%; float: left"
          ></el-input>
          <el-button
            type="success"
            size="small"
            style="float: left; margin-top: 10px"
            @click="send"
            >发送验证码</el-button
          >
        </div>
      </div>
    </div>
    <div v-if="!isMail">
      <div class="tip">上传你的校园卡/学生证</div>
      <el-upload
        class="avatar-uploader photo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
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
      isMail: true,
      mail: "",
      check: "",
      imageUrl: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    send() {
        let reg2=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
      let reg = /(edu.cn)$/;
      if (!reg.test(this.mail)) {
             const h = this.$createElement;

        this.$notify({
          title: '错误',
          message: h('i', { style: 'color: teal'}, '请以edu.cn为结尾')
        });
      }
       if (!reg2.test(this.mail)) {
             const h = this.$createElement;

        this.$notify({
          title: '错误',
          message: h('i', { style: 'color: teal'}, '请输入正确的邮箱格式')
        });
      }
    },
    choose() {
      this.isMail = !this.isMail;
    },
    sub() {
        this.$router.push("AttestationRes");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style scoped="way">
.mess {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  box-shadow: 0 1px 1px rgb(100 100 100 / 10%);
}
.photo {
  display: flex;
  justify-content: center;
}
.tip {
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.select {
  display: flex;
  height: 50px;
}
.card {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
.mail {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
.active {
  border-bottom: 1px solid deepskyblue;
}
.input {
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  display: flex;
  padding: 0px 15px;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>