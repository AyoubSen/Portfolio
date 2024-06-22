<template>
  <div>
    <div>
      <p class="main-title">Hello There! I am Ayoub Senhaji Hamim.</p>
    </div>
    <div>
      <p class="secondary-title">
        I am a
        {{
          colorMode.value === "light"
            ? "State Engineer by day"
            : "FullStack Developer by night"
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
