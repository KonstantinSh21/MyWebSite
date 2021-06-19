<template>
  <div class="wrapper-html">
    <div class="wrapper-skill__container">
      <div class="wrapper-skill__container-text">
        <div class="wrapper-skill__container-text-line"></div>
        <a
            class="wrapper-skill__container-text-header"
            href="https://ru.wikipedia.org/wiki/HTML"
        >
          HTML
        </a>
        <div class="wrapper-skill__container-decs">
          HyperText Markup Language
        </div>
      </div>
    </div>
    <div class="wrapper-skill__container-img"></div>
  </div>
</template>

<script>
export default {
  name: "SkillHtml"
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

.wrapper-html {
  height: 100%;
  width: 100%;
  display: flex;

  .wrapper-skill__container {
    flex: 1 1 40%;
    background-color: #f0f5f3;
    display: flex;
    align-items: center;
    padding: 0 32px;
    margin-bottom: -128px;

    .wrapper-skill__container-text {
      //padding-top: 128px;
      //border-top: 1px solid #cccccc;
      //.wrapper-skill__container-text-line {
      //  width: 100%;
      //  background-color: #cccccc;
      //  height: 1px;
      //  margin-bottom: 128px;
      //}

      .wrapper-skill__container-text-header {
        font-size: 64px;
        position: relative;
        line-height: 52px;
        z-index: 1;
        cursor: pointer;
        text-decoration: none;
        color: #0a0a0a;


        &::before {
          content: '';
          position: absolute;
          left: 1px;
          bottom: 0px;
          width: 100%;
          height: 5px;
          background: linear-gradient(70.17deg, #4e2dc5 10.49%, #e86e55 83.94%);
          z-index: -1;
          transition: all 0.3s ease-in-out;
        }

        &:hover::before {
          width: 200%;
        }
      }

      .wrapper-skill__container-decs {
        font-size: 24px;
        line-height: 24px;
        color: rgba(0, 0, 0, .5);
        padding-top: 36px;
      }
    }
  }

  .wrapper-skill__container-img {
    flex: 1 1 60%;
    background-image: url(https://images.unsplash.com/photo-1519933045055-2e2d61a64bcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
    background-size: cover;
  }
}
</style>