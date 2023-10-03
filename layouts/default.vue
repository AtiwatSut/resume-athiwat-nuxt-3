<template>
  <div class="wrapper">
    <v-container class="pa-0 py-md-0 container">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.wrapper { min-height: 100vh; box-sizing: border-box; }
.container { max-width: 840px !important; }
</style>
