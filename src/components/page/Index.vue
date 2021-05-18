<template>
  <div>
    <p>index</p>
    <p>{{ question }}</p>
    <router-link to="/answer" :text="text">回答</router-link>
    <br>
    <input type="text" v-model="text" @keyup="changeText(newText)">
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
  },
  computed :{
    newText() {
      return this.text;
    }
  },
  methods: {
    changeText(newText) {
      newText = this.text
      this.$emit('change-text',newText);
      console.log(newText);
    }
  }
}
</script>

<style>

</style>