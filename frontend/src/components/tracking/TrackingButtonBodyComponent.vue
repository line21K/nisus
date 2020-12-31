<template lang="">
  <div class="trackingButtonBodyComponent">
    {{ counter }}
    <DotsVerticalIcon class="inline" />
  </div>
</template>
<script>
import { DotsVerticalIcon } from "vue-tabler-icons";
export default {
  props: {
    counter: {
      type: Number
    }
  },
  components: { DotsVerticalIcon }
};
</script>
