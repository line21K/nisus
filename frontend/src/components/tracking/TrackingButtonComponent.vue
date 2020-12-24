<template lang="">
  <div class="trackingButton">
    <h2>This is tracking button component</h2>
    <button
      class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
      v-on:click="counter += 1"
    >
      {{ counter }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  }
};
</script>
<style lang=""></style>
