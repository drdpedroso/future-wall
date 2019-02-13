<template>
  <div class="home">
    <DraggableImage key="1" />
    <DraggableImage key="2" />
  </div>
</template>

<script>
import DraggableImage from "@/components/DraggableImage.vue";

export default {
  name: "home",
  components: {
      DraggableImage
  }
};
</script>
