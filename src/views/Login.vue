<template>
  <layout name="LayoutModal">
    <el-row justify="center" type="flex" :gutter="20">
    <el-col :span="6">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>Wizards Technologies</h3>
        <h4>Please log in</h4>
      </div>
      <div>
        <el-form>
          <el-input class="m-5" placeholder="Your email" v-model="form.email"></el-input>
          <el-input class="m-5" placeholder="Your password" v-model="form.password" show-password></el-input>
          <el-button>Connexion</el-button>
        </el-form>
      </div>
    </el-card>
    </el-col>
    </el-row>
  </layout>
</template>

<script>
import Layout from '../layouts/Layout'
export default {
  name: `Login`,
  components: {
    Layout
  },
  data () {
    return {
      form: {
        loginInput: '',
        loginPassword: ''
      }
    }
  }
}
</script>
