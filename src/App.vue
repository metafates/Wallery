<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital@0;1&display=swap');

html {
    font-family: 'Space Mono', monospace !important;
}
</style>
