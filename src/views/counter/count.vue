<template>
  <div class="vue-count">
    <p class="text">
      {{ count }}
    </p>
    <button
      class="increase_button"
      @click="increase"
    >
      +
    </button>
    <button
      class="decrease_button"
      @click="decrease"
    >
      -
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 8
    }
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      if (this.count > 0) --this.count
    }
  }
}
</script>


<style scoped>
button {
  color: green;
}
.text {
  color: red;
}
</style>