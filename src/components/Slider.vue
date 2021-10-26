<template>
  <div class="wrapper-slider">
    <div class="container">
      <div class="sidebar">
        <div style="background: linear-gradient(252deg, rgb(35 27 62) -1%, rgb(246, 110, 110) 124%);">
          <h1>JavaScript</h1>
          <p>Vue</p>
        </div>
        <div style="background: linear-gradient(203deg, rgb(77 177 52) -1%, rgb(0, 13, 253) 160%);}">
          <h1>CSS</h1>
          <p>Less, SCSS</p>
        </div>
        <div style="background: linear-gradient(270deg, rgb(218 207 199) -8%, rgb(255, 152, 118) 138%);">
          <h1>Html</h1>
          <p>Pug</p>
        </div>
      </div>
      <div class="main-slide">
        <div
            style="
            background-image: url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          "
        ></div>
        <div
            style="
            background-image: url('https://images.unsplash.com/photo-1627615646894-ccfa494592be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1433&q=80');
          "
        ></div>
        <div
            style="

            background-image: url('https://images.unsplash.com/photo-1627601759846-b78eef021765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          "
        ></div>
      </div>
      <div class="controls">
        <button @click="changeSlide('down')" class="down-button">
          <font-awesome-icon :icon="['fa', 'arrow-down']"/>
        </button>
        <button @click="changeSlide('up')" class="up-button">
          <font-awesome-icon :icon="['fa', 'arrow-up']"/>
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

      .tablet({
        left: 50%;
      });
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

      .tablet({
        width: 50%;
      });

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

        .tablet({
          font-size: 24px;
        });
      }
    }

    .main-slide {
      height: 100%;
      position: absolute;
      top: 0;
      left: 35%;
      width: 65%;
      transition: transform 0.5s ease-in-out;

      .tablet({
        width: 50%;
        left: 50%;
      });

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
