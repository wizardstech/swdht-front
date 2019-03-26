<template>
  <el-container>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutModal'
};
</script>

<style>
  .modale {
    position: absolute;
    top: 20vh;
  }
</style>
