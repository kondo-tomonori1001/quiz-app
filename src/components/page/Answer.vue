<template>
  <div>
    <p>answer</p>
    <p>{{ text }}</p>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style>
</style>