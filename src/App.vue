<template>
  <div>
    <QuestionList />
    <router-view :items="items" />
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
  methods: {
    newText(newText){
      this.text = newText;
    }
  },
  created() {
    axios
      .get('/data/question.json')
      .then(res => {
        this.items = res.data;
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<style>

</style>
