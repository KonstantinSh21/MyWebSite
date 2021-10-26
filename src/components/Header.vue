<template>
  <div class="wrapper-header">
    <img src="../assets/logo.png" @click="scrollUp">
    <div class="spacer"></div>
    <div class="wrapper-header-text">
      <a href="https://github.com/KonstantinSh21">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
      <a href="https://vk.com/shikhov_21">
        <font-awesome-icon :icon="['fab', 'vk']"/>
      </a>
      <a href="https://www.instagram.com/shikhov_21">
        <font-awesome-icon :icon="['fab', 'instagram']"/>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    scrollUp(){
      this.$emit("scrollUp")
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper-header {
  height: 100vh;
  width: 100%;
  margin: 48px 8px 0 8px;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  .wrapper-header-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-top: 16px;
      cursor: pointer;
      color: #fff;
      opacity: 0.5;
      font-size: 40px;
      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 1;
        transform: scale(1.2);

      }
    }
  }
}

</style>