<template>
  <section>
    <el-select>
      <el-option
        v-for="value in ['1', '2', '3']"
        :key="value"
        :label="value"
        :value="value"
      ></el-option>
    </el-select>
  </section>
</template>
<script lang="ts" setup></script>
<style></style>
