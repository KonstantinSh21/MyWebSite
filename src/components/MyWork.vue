<template>
  <div class="wrapper-my-work">
    <div @mouseover="onFocusItem" class="wrapper-my-work__slider">
      <img src="../assets/me.jpg">
      <div class="wrapper-my-work__text">
        <h1 class="wrapper-my-work__text-header">
          Simple guy
        </h1>
        <div class="wrapper-my-work__text-disc--transform">
          He lived in many cities of Russia, including Moscow.
          At the moment I live in Perm
        </div>
        <div class="wrapper-my-work__text-disc">
          I was born in the city of Chita.
        </div>
      </div>
    </div>
    <div @mouseover="onFocusItem" class="wrapper-my-work__slider wrapper-my-work__slider-edu">
      <div class="wrapper-my-work__text">
        <h1 class="wrapper-my-work__text-header">
          Eternal disciple
        </h1>
        <div class="wrapper-my-work__text-disc--transform">
          At school he was very fond of physics and mathematics. Now I love programming
        </div>
        <div class="wrapper-my-work__text-disc">
          I write every day
        </div>
      </div>
    </div>
    <div @mouseover="onFocusItem" class="wrapper-my-work__slider wrapper-my-work__slider--hockey">
      <div class="wrapper-my-work__text">
        <h1 class="wrapper-my-work__text-header">
          I am a hockey player
        </h1>
        <div class="wrapper-my-work__text-disc--transform">
          Unfortunately I haven’t played professionally for three years
        </div>
        <div class="wrapper-my-work__text-disc">
          in the past
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWork",
  // beforeCreate() {
  //   const items = document.querySelectorAll('.wrapper-my-work__slider');
  //   items.forEach((item) => {
  //     item.addEventListener('onmouseover', this.onFocusItem)
  //   })
  // },
  methods: {
    onFocusItem() {
      const slides = document.querySelectorAll('.wrapper-my-work__slider');

      slides.forEach((slide) => {
        slide.onmouseover = () => {
          clearActiveClasses();
          slide.classList.add('active');
        }
      });

      function clearActiveClasses() {
        slides.forEach((slide) => {
          slide.classList.remove('active');
        });
      }
    }
  },

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

.wrapper-my-work {
  display: flex;
  height: 100%;
  margin-left: 135px;

  .tablet({
    margin-left: 0;
  });

  .wrapper-my-work__slider {
    overflow: hidden;
    flex: 1;
    transition: all 500ms ease-in-out;
    cursor: pointer;
    color: #FFF;
    height: 100vh;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-color: #000;
      opacity: 0.5;
    }

    &:hover .wrapper-my-work__text-disc--transform {
      transform: translateY(0px) !important;
    }

    &:hover .wrapper-my-work__text-header {
      margin-bottom: 16px !important;
      position: relative !important;
      bottom: unset !important;
    }

    .wrapper-my-work__text {
      text-align: left;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 20px;
      font-weight: 700;
      font: 100%/1.5 Graphik, sans-serif;
      z-index: 1;

      .wrapper-my-work__text-header {
        word-break: keep-all;
        font-weight: 700;
        font-size: 3.35vw;
        line-height: 4.13vw;
        transition: all 1s ease-out;
        position: absolute;
        bottom: 100px;
      }

      .wrapper-my-work__text-disc {
        margin-top: 8px;
      }

      .wrapper-my-work__text-disc--transform {
        font-size: 18px;
        font-weight: 700;
        transition: all 0.5s;
        transform: translateY(500px);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.active {
      flex: 2;
    }
  }

  .wrapper-my-work__slider-edu {
    background-image: url(https://images.unsplash.com/photo-1616868560403-b4675d3a545b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1764&q=80);
    background-size: cover;
    background-position: center;
  }

  .wrapper-my-work__slider--hockey {
    background-image: url(https://images.unsplash.com/photo-1545652034-ff9abf03cf70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80);
    background-size: cover;
  }
}

</style>