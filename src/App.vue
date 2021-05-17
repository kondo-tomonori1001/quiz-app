<template>
  <div>
    <QuestionList />
    <router-view />
  </div>
</template>

<script>
import QuestionList from './components/QuestionList';
export default {
  name: 'App',
  components: {
    QuestionList,
  }
}
</script>

<style>

</style>
