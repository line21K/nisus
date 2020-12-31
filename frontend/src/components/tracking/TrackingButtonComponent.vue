<template lang="">
  <div class="trackingButtonComponent">
    <h2>This is tracking button component</h2>
    <button
      class="uppercase px-8 py-2 bg-gray-300 text-gray-600 max-w-max shadow-sm hover:shadow-md glow-on-hover"
      @click="wasClicked"
    >
      <TrackButtonBodyComponent :counter="counter" />
    </button>
  </div>
</template>
<script>
import TrackButtonBodyComponent from "@/components/tracking/TrackingButtonBodyComponent.vue";
export default {
  components: { TrackButtonBodyComponent },
  data() {
    return {
      counter: 0,
      clicked: false
    };
  },

  methods: {
    wasClicked() {
      this.counter += 1;
    }
  }
};
</script>
<style>
.glow-on-hover {
  width: 220px;
  height: 50px;
  border: 20px;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  font-size: 24px;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: #33ffbd;
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  opacity: 0;
  font-size: 24px;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: white;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f1ebd5;
  left: 0;
  top: 0;
  border-radius: 10px;
}
.inline {
  display: inline-block;
}
</style>
