<template>
  <div>
    home- use `npm:@warmthsea/element-plus-fix-select`

    <p>teleported: false</p>
    <el-select v-model="value" :teleported="false">
      <el-option
        v-for="value in ['1', '2', '3']"
        :key="value"
        :label="value"
        :value="value"
      ></el-option>
    </el-select>
    <p>teleported: true</p>
    <el-select v-model="value" :teleported="true">
      <el-option
        v-for="value in ['1', '2', '3']"
        :key="value"
        :label="value"
        :value="value"
      ></el-option>
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
<style></style>
