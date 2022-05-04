<template>
  <div id="app">
    <div class="wrapper-link">
      <Header @scrollUp="scrollUp"/>
    </div>
    <div style="transform: translateY(0px)" class="main-wrapper">
      <div data-id="0" class="wrapper">
        <ScreenFirst/>
      </div>
      <div data-id="1" class="wrapper">
        <Autobiography/>
      </div>
      <div data-id="2" class="wrapper">
        <MyWork/>
      </div>
      <div data-id="3" class="wrapper">
        <Slider/>
      </div>
    </div>
    <div class="wrapper-counter">
      <div class="wrapper-counter__item-counter">
        0{{ pageId }}
      </div>
      <div class="wrapper-counter__item-amount">0{{ amountPages }}</div>
    </div>
    <div class="body-wrapper__footer">
      <div
          @click="toggleNextScreen('up')"
          class="body-wrapper__footer-arrow"
      >
        <font-awesome-icon :icon="['fa', 'angle-down']"/>
      </div>
      <div class="body-wrapper__footer-text">
        Spin smoothly or push
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import ScreenFirst from "./components/ScreenFirst";
import Autobiography from "./components/Autobiography";
import MyWork from "./components/MyWork";
import Slider from "./components/Slider";

export default {
  name: 'App',
  data() {
    return {
      pageId: 1,
      amountPages: null,
      maxEvent: 0,
      isActivePageText: [false, false],
      isAnimate: false
    }
  },
  components: {
    Header,
    ScreenFirst,
    Autobiography,
    MyWork,
    Slider
  },
  computed: {},
  watch: {
    // pageId() {
    //   console.log(this.pageId);
    // }
  },
  methods: {
    scrollUp() {
      for (let i = 0; i <= this.pageId; i++) {
        this.toggleNextScreen('down');
      }
    },
    toggleNextScreen(pos) {
      const lengthList = document.querySelectorAll('.wrapper').length;
      const wrapper = document.querySelector('.main-wrapper');
      const height = document.documentElement.clientHeight;
      let newValue = 0;
      let firstItem = wrapper.style.transform.indexOf('(');
      const that = this;

      if (!this.isAnimate) {
        this.isAnimate = true;
        if (pos === 'up') {
          newValue = Number(wrapper.style.transform.slice(firstItem + 1, wrapper.style.transform.length - 3)) - height;

          if (lengthList * height <= newValue * -1) {
            // Уперся вниз
            return false;
          }
          this.pageId++
        } else if (pos === 'down') {
          newValue = Number(wrapper.style.transform.slice(firstItem + 1, wrapper.style.transform.length - 3)) + height;

          if (newValue > 0) {
            //Уперся вверх
            return false;
          }
          this.pageId--
        }

        wrapper.style.transform = "translateY(" + newValue + "px)";

        setTimeout(() => {
          that.isAnimate = false;
        }, 2000)
      }
    },
  },
  mounted() {
    this.amountPages = document.querySelectorAll('.wrapper').length;
    document.addEventListener('keyup', (e) => {
      if (e.code === "ArrowDown") {
        this.toggleNextScreen('up');
      }
      if (e.code === "ArrowUp") {
        this.toggleNextScreen('down');
      }
    });
    document.addEventListener('wheel', (e) => {
      const width = document.documentElement.clientWidth;
      if (width <= 1200) {
        return false;
      }
      this.maxEvent++
      if (this.maxEvent > 15) {
        if (e.wheelDeltaY > 0) {
          this.toggleNextScreen('down');
        } else if (e.wheelDeltaY < 0) {
          this.toggleNextScreen('up');
        }
        this.maxEvent = 0;
      }
    })
  }
}
</script>

<style lang="less">
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

@layout-s: 1200px;
.layout-s(@rules) {
  @media screen and (max-width: @layout-s) { @rules();
  }
}

* {
  margin: 0;
  word-break: keep-all;
  padding: 0;
  font-family: Merriweather_Sans, sans-serif;
}

@font-face {
  font-family: Merriweather_Sans; /* Гарнитура шрифта */
  src: url(../src/font/Merriweather_Sans/MerriweatherSans-VariableFont_wght.ttf); /* Путь к файлу со шрифтом */
}

.wrapper-link {
  position: fixed;
  left: 0;
  height: 100vh;
  top: 0;
  bottom: 0;
  z-index: 100;
  justify-content: center;
  display: flex;
  background: #0a0a0a;
  width: 135px;

  .tablet ({
    display: none;
  });
}

#app {
  overflow: hidden;

  .layout-s ({
    height: 100%;
    overflow: auto;
  });
}

.main-wrapper {
  height: 100vh;
  transition: all 2s;

  .wrapper {
    height: 100vh;
    width: 100%;
  }
}

.wrapper-counter {
  pointer-events: none;
  display: flex;
  position: absolute;
  top: 48px;
  right: 40px;
  z-index: 100;
  color: #ccc;
  font-size: 26px;

  .tablet ({
    display: none;
  });

  .wrapper-counter__item-amount {
    margin-left: 36px;
    padding-left: 8px;
    border-left: 1px solid #a4a4a4;
    color: #a4a4a4;
  }
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
}

.start-position {
  animation: startText 2s;
}

.end-position {
  animation: stopText 1s;
  transform: translateX(-200px);
  opacity: 0;
}

@keyframes startText {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes stopText {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(-200px);
  }
}
</style>
