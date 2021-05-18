<template>
  <div>
    <p>index</p>
    <p>{{ question }}</p>
    <router-link to="/answer">回答</router-link>
    <br>
    <input type="text" v-model="text">
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String
    },
     text: {
      type: String
    }
  }
}
</script>

<style>

</style>