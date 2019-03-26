<template>
  <LayoutModal>
    <el-row justify="center" type="flex" :gutter="20">
    <el-col :span="6">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>Wizards Technologies</h3>
        <h4>Please log in</h4>
      </div>
      <div>
        <el-form>
          <el-input class="m-5" placeholder="Your username" v-model="form.username"></el-input>
          <el-input class="m-5" placeholder="Your password" v-model="form.password" show-password></el-input>
          <el-button @click=submitLogin>Connexion</el-button>
        </el-form>
      </div>
    </el-card>
    </el-col>
    </el-row>
  </LayoutModal>
</template>

<script>
import LayoutModal from '../layouts/LayoutModal';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    LayoutModal
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions('auth', [
      'fetchJWT'
    ]),
    submitLogin () {
      const { username, password } = this.form;
      this.fetchJWT({ username, password });
      this.$router.push({ path: '/' });
    }
  }
};
</script>
