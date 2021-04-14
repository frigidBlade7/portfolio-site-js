<template>
  <div>
    <div class="tabs mb-11">
      <ul class="flex">
        <li v-for="(tab, i) in tabs" :key="i" class="mr-10">
          <a href="#" @click="selectTab(tab)">
            <div class="img-box" :class="{ 'is-active': tab.isActive }">
              <img :src="require(`@/assets/svg/${tab.src}`)" alt="" srcset="" />
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-details">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(
        (tab) =>
          (tab.$data.isActive = tab.$props.src === selectedTab.$props.src)
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.img-box {
  display: inline-block;
  color: #23cb23;
  position: relative;
  cursor: pointer;
  &::after {
    position: absolute;
    bottom: -12px;
    left: 0;
    content: '';
    display: inline-block;
    width: 0;
    height: 4px;
    background-color: #23cb23;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 40%;
    transition: width 0.3s;
  }
  &.is-active::after {
    width: 30px;
  }
}
</style>
