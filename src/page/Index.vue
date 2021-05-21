<template>
  <div>
    <p>indexPage</p>
    <ul class="questionList">
      <li class="questionList__item" v-for="(item, key) in items" :key="`question-${key}`">
        {{ item.question }}
        <div class="answerList">
          <label v-for="(answer, answerKey) in item.answers" :key="`answer-${answerKey}`">
            <input type="radio" v-model="item.select" :value="answer" @click="answerSelect(key,answer)"/>{{ answer }}
          </label>
        </div>
      </li>
    </ul>
    <router-link to="/answer">回答</router-link>
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
  data() {
    return {
      answerItem: "",
    };
  },
  methods: {
    answerSelect(key,answer) {
      this.$emit('answer-select',key,answer)
    }
  }
};
</script>

<style>
  .answerList label{
    display: block;
  }
</style>