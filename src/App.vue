<template>
  <div>
    <router-view :items="items" @answer-select="answerCheck"/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      items: [],
      question:"質問が入ります。",
      text:"aa",
    }
  },
  computed: {
    judgement() {
      
      return true;
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
    answerCheck(...args) {
      const [key,answer] = args;
      const that = this.items[key];
      if(that.answer === answer){
        that.check = true;
      } else {
        that.check = false;
      }
    }
  }
}
</script>

<style>

</style>
