<template>
  <div>
    <QuestionList />
    <router-view :items="questionList" @answer-select="answerCheck"/>
  </div>
</template>

<script>
import QuestionList from './components/QuestionList';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    QuestionList,
  },
  data() {
    return {
      items: [],
      question:"質問が入ります。",
      text:"aa",
    }
  },
  computed: {
    questionList() {
      console.log('computed');
      return this.items;
    }
  },
  created() {
    axios
      .get('/data/question.json')
      .then(res => {
        this.items = res.data;
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    answerCheck(key) {
      console.log(key)
    }
  }
}
</script>

<style>

</style>
