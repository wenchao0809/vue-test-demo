<template>
  <div>{{ msg }}</div>  
</template>

<script>
export default {
  data() {
    return {
      msg: 1
    };
  },
  methods: {
    add () {
      return ++this.msg ; 
    }
  }
};
</script>

<style>

</style>