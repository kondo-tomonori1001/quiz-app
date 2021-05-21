<template>
  <div>
    <p>answer</p>
    <li class="answer__item" v-for="(item, key) in items" :key="`answer-${key}`">
      <p>{{ item.question }}</p>
      <p>{{ item.select }}</p>
    </li>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>