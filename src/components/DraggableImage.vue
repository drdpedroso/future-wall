<template>
  <div class="container">
    <div v-dragged="onDragged">
      <!--<croppa v-model="myCroppa"></croppa>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DraggableImage",
  data() {
    return {
      dragged: false
    };
  },
  methods: {
    onDragged({ el, deltaX, deltaY, first, last }) {
        console.log(1)
      const l = +window.getComputedStyle(el)["left"].slice(0, -2) || 0;
      const t = +window.getComputedStyle(el)["top"].slice(0, -2) || 0;
      el.style.left = l + deltaX + "px";
      el.style.top = t + deltaY + "px";
    }
  }
};
</script>

<style scoped>
.container {
  position: absolute;
}

.container div {
  height: 400px;
  width: 400px;
  background-color: red;
  position: relative;
}
</style>
