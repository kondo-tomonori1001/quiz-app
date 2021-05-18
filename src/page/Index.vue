<template>
  <div>
    <p>indexPage</p>
    <ul class="questionList">
      <li class="questionList__item" v-for="(item, key) in items" :key="`question-${key}`">
        {{ item.question }}
        <div class="answerList">
          <label v-for="(answer, key) in item.answers" :key="`answer-${key}`">
            <input type="radio" v-model="answerItem" :value="answer" />{{ answer }}
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
  computed() {
    
  }
};
</script>

<style>
  .answerList label{
    display: block;
  }
</style>