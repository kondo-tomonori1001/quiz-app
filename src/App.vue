<template>
  <div>
    <QuestionList />
    <router-view :question="question" :text="text"/>
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
  }
}
</script>

<style>

</style>
