<template>
  <div>
    <QuestionList />
    <router-view :question="question" :text="text" @change-text="newText"/>
  </div>
</template>

<script>
import QuestionList from './components/QuestionList';
export default {
  name: 'App',
  components: {
    QuestionList,
  },
  data() {
    return {
      question:"質問が入ります。",
      text:"aa",
    }
  },
  methods: {
    newText(newText){
      this.text = newText;
    }
  }
}
</script>

<style>

</style>
