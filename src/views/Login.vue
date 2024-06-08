<template>
   <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
         <span>欢迎登录</span>
      </div>
      <el-tabs v-model="currentIndex" stretch>
      <el-tab-pane label="登录" name="login" >登录</el-tab-pane>
      <el-tab-pane label="注册" name="register">注册</el-tab-pane>
   </el-tabs>
    </el-card>
   </div>
</template>
<script>
export default {
   name: 'LoginF',
   components: {
     
   },
   mixins: [],
   props: {
     
   },
data(){ 
   return {
      currentIndex: 'login'
   }
},
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
     
   },
   methods: {
     
   }
};
</script>
<style lang='less' scoped>
.login{
   width: 500px;
   margin: 0 auto;
   .box-card {
      margin-top: 100px;
   }
}
</style>