<template>
  <div>
    <div>
      <el-text class="main-title"
        >Hello There! I am Ayoub Senhaji Hamim.</el-text
      >
    </div>
    <div>
      <el-text class="secondary-title"
        >I am a
        {{
          colorMode.value === "light"
            ? "State Engineer by day"
            : "FullStack Developer by night"
        }}.</el-text
      >
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
