<template>
  <div class="body-wrapper">
    <div class="body-wrapper__item-color">
      <div class="body-wrapper__text">
        <h1 class="body-wrapper__text-item">
          Frontend <span>Developer</span> Shikhov Konstantin
        </h1>
      </div>
      <div class="body-wrapper__footer">
        <div
            @click="toggleScreen"
            class="body-wrapper__footer-arrow"
        >
          <font-awesome-icon :icon="['fa', 'angle-down']"/>
        </div>
        <div class="body-wrapper__footer-text">
          Spin smoothly or push
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenFirst",
  methods: {
    toggleScreen() {
      this.$emit('toggleScreen', 'up')
    }
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

  .body-wrapper__footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(-50%);
    color: #cccccc;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;

    .tablet({
      display: none;
    });

    .body-wrapper__footer-arrow {
      margin: 0 auto;

      svg {
        cursor: pointer;
        width: 50px;
        height: 50px;
        animation: move 2s infinite;
      }

      @keyframes move {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
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

      //span {
      //  z-index: 11;
      //  position: relative;
      //
      //  &:hover:before {
      //    height: 70px;
      //  }
      //}
      //
      //span:before {
      //  content: '';
      //  position: absolute;
      //  left: 1px;
      //  bottom: 15px;
      //  width: 100%;
      //  z-index: -1;
      //  height: 5px;
      //  background: linear-gradient(70.17deg, #4e2dc5 10.49%, #e86e55 83.94%);
      //  transition: all .3s ease-in-out;
      //}
    }
  }


}

</style>
