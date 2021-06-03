<template>
  <div>
    <router-view
      :items="items"
      :jugement="judgement"
      @answer-select="answerCheck"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      passCount: 2,
    };
  },
  computed: {
    judgement() {
      const questionCount = this.items.length;
      let checkCount = 0;
      for (let i = 0; i < questionCount; i++) {
        if (this.items[i].check === true) {
          checkCount++;
        }
      }
      return this.passCount <= checkCount ;
    },
  },
  created() {
    axios
      .get("/lesson/quizApp/data/question.json")
      .then((res) => {
        this.items = res.data;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    answerCheck(...args) {
      const [key, answer] = args;
      const that = this.items[key];
      if (that.answer === answer) {
        that.check = true;
      } else {
        that.check = false;
      }
    },
  },
};
</script>

<style>
</style>
