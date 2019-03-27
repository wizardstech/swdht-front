<template>
  <LayoutDefault>
  <div>
  </div>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import usersApi from '@/api/users';

export default {
  name: 'Home',
  components: {
    LayoutDefault
  },
  data () {
    return {
      users: null
    };
  },
  created () {
    this.users = usersApi.getAll();
  }
};
</script>
