<template>
  <div data-id="1" class="body-wrapper">
    <div class="body-wrapper__item-color">
      <div class="body-wrapper__text">
        <h1 class="body-wrapper__text-item animate-text" :class="isStart ? 'start-position': 'end-position'">
          Front-end <span @click="click">Developer</span> Shikhov Konstantin
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenFirst",
  data() {
    return {
      isStart: false,
    }
  },
  methods: {
    click() {
      this.isStart = !this.isStart
    }
  },
  mounted() {
    this.isStart = true;
  }
}
</script>

<style lang="less" scoped>

@vp_mobile: 500px;
.mobile(@rules) {
  @media screen and (max-width: @vp_mobile) { @rules();
  }
}

@vp_tablet: 760px;
.tablet(@rules) {
  @media screen and (max-width: @vp_tablet) { @rules();
  }
}

.body-wrapper {
  background-image: url(https://images.unsplash.com/photo-1473210630848-e12656228f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1432&q=80);
  background-size: cover;
  height: 100%;
  width: 100%;

  .body-wrapper__item-color {
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body-wrapper__footer-text {
    text-align: center;
    width: 100%;
    margin-top: 8px;
    font-weight: 300;
    font-size: 18px;
  }

}

.body-wrapper__text {
  margin: 0 200px;

  .tablet ({
    max-width: 600px;
    margin: 0 auto;
  });

  .mobile({
    max-width: 500px;
  });

  .body-wrapper__text-item {
    max-width: 1140px;
    text-align: left;
    color: #ffffff;
    font-size: 92px;
    font-weight: 400;
    z-index: 10;
    word-break: keep-all;

    .tablet ({
      font-size: 78px;
    });

    .mobile({
      font-size: 54px;
    })
  }
}

</style>
