<template>
  <div class="wrapper-slider">
    <div class="container">
      <div class="sidebar">
<!--        <div style="background: linear-gradient(90deg, #11DEE9 -26%, #017E8B 145%);">-->
<!--          <h1>Snow in the desert</h1>-->
<!--          <p>Love, death & robots</p>-->
<!--        </div>-->
        <div style="background: linear-gradient(90deg, #b81f1f -1%, #f66e6e 124%);">
          <h1>JavaScript</h1>
          <p></p>
        </div>
        <div style="background: linear-gradient(90deg, #0cf6ff -1%, #000dfd 124%);">
          <h1>CSS</h1>
          <p></p>
        </div>
        <div style="background: linear-gradient(90deg, #ba3000 -8%, #ff9876 138%);">
          <h1>Html</h1>
          <p>Love, death & robots</p>
        </div>
      </div>
      <div class="main-slide">
        <div
            style="
            background-image: url('https://abuzov.ru/wp-content/uploads/2018/11/html-1080x500.png');
          "
        ></div>
        <div
            style="
            background-image: url('https://it-black.ru/wp-content/uploads/2019/04/nasledovanie_css.png');
          "
        ></div>
        <div
            style="
            background-color: red;
            /*background-image: url('https://images.unsplash.com/photo-1523633589114-88eaf4b4f1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');*/
          "
        ></div>
      </div>
      <div class="controls">
        <button @click="changeSlide('down')" class="down-button">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button @click="changeSlide('up')" class="up-button">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",

  data() {
    return {
      activeSlide: 0,
    }
  },
  methods: {
    changeSlide(direction) {
      const sideBar = document.querySelector('.sidebar');
      const mainSlide = document.querySelector('.main-slide');
      const container = document.querySelector('.container');
      const slidesCount = mainSlide.querySelectorAll('div').length;

      if (direction === 'up') {
        this.activeSlide++;
        if (this.activeSlide === slidesCount) {
          this.activeSlide = 0;
        }
      } else if (direction === 'down') {
        this.activeSlide--;
        if (this.activeSlide < 0) {
          this.activeSlide = slidesCount - 1;
        }
      }
      const heigth = container.clientHeight;
      mainSlide.style.transform = `translateY(-${this.activeSlide * heigth}px)`
      sideBar.style.transform = `translateY(${this.activeSlide * heigth}px)`
    }
  },
  beforeCreate() {
    setTimeout(() => {
      const sideBar = document.querySelector('.sidebar');
      const mainSlide = document.querySelector('.main-slide');
      const slidesCount = mainSlide.querySelectorAll('div').length;
      sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;
    }, 0)
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

@layout-s: 1200px;
.layout-s(@rules) {
  @media screen and (max-width: @layout-s) { @rules();
  }
}

.wrapper-slider {
  position: relative;
  height: 100%;
  margin-left: 135px;

  .tablet({
    margin-left: 0;
  });

  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;

    .controls button {
      position: absolute;
      left: 35%;
      top: 50%;
      z-index: 100;
    }

    .controls .down-button {
      transform: translateX(-100%);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .controls .up-button {
      transform: translateY(-100%);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .sidebar {
      height: 100%;
      width: 35%;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.5s ease-in-out;

      & > div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
      }

      h1 {
        font-size: 40px;
        margin-bottom: 10px;
        margin-top: -30px;
        text-align: center;
      }
    }

    .main-slide {
      height: 100%;
      position: absolute;
      top: 0;
      left: 35%;
      width: 65%;
      transition: transform 0.5s ease-in-out;

      div {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
      }
    }
  }

  button {
    background-color: #fff;
    border: none;
    color: #aaa;
    cursor: pointer;
    font-size: 16px;
    padding: 15px;
  }

  button:hover {
    color: #222;
  }

  button:focus {
    outline: none;
  }
}
</style>