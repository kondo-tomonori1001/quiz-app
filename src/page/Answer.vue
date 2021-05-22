<template>
  <div>
    <div v-if="jugement">
      <p>おめでとうございます！ご応募はこちらから！</p>
    </div>
    <div v-else>
      <p>残念！何度も挑戦できるので、再チャレンジしてくださいね！</p>
    </div>
    <ul>
      <li class="answer__item" v-for="(item, key) in items" :key="`answer-${key}`">
        問題{{ key + 1 }}
        <p>答え：{{ item.answer }}</p>
        <p>あなたの回答：{{ item.select }}</p>
        <p v-if="item.check">正解！</p>
        <p v-else>残念！</p>
      </li>
    </ul>
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
    jugement: {
      type: Boolean,
      required:true,
    },
  },
};
</script>

<style>
</style>