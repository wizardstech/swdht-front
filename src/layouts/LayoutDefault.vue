<template>
<el-container >
  <el-aside width="200px">
    <el-menu :router=true class="app-container">
    <div class="val-sidebar-header">
      <h5> Wizards Technologies </h5>
    </div>
    <el-menu-item route="home"  index="1">
      Home
    </el-menu-item>
    <el-menu-item route="invoices" index="3">
      Invoices
    </el-menu-item>
    <el-menu-item route="/"  index="4">
      Absences
    </el-menu-item>
    <el-menu-item route="/"  index="5">
      My Files
    </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'LayoutDefault'
};
</script>
