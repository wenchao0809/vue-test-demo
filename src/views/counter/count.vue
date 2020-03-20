<template>
  <div class="vue-count">
    <p>{{ count }}</p>
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
      count: 0
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      if (this.count > 0) ++this.count;
    }
  }
};
</script>

<style>

</style>