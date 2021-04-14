<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
    }
  },

  mounted() {
    this.isActive = this.selected
  },
}
</script>
