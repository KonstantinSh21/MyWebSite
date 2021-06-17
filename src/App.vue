<template>
  <div id="app">
    <div class="main-wrapper">
      <div id="page-0" class="wrapper">
        page-0
      </div>

      <div id="page-1" class="wrapper color">
        page-1
      </div>

      <div id="page-2" class="wrapper color-two">
        page-2
      </div>
    </div>
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
    <!--    <router-view/>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      pageId: 0
    }
  },
  beforeCreate() {
    // let lastScrollTop = 0;

    document.addEventListener('wheel', (e) => {
      const wrapper = document.querySelector('.main-wrapper')
      const height = document.documentElement.clientHeight

      // определяю куда идет движение скрола
      if (e.wheelDeltaY > 0) {
        // wrapper.style.webkitTransform += "translateY(" + height + "px)";
        // wrapper.style.MozTransform += "translateY(" + height + "px)";
        // wrapper.style.msTransform += "translateY(" + height + "px)";
        // wrapper.style.OTransform += "translateY(" + height + "px)";
        wrapper.style.transform += "translateY(" + height + "px)";
      } else if (e.wheelDeltaY < 0) {
        // wrapper.style.webkitTransform += "translateY(-" + height + "px)";
        // wrapper.style.MozTransform += "translateY(-" + height + "px)";
        // wrapper.style.msTransform += "translateY(-" + height + "px)";
        // wrapper.style.OTransform += "translateY(-" + height + "px)";
        wrapper.style.transform += "translateY(-" + height + "px)";
      }
      // lastScrollTop = top;
    })
  }
}
</script>

<style lang="less">
@vp_mobile:     500px;
.mobile(@rules) { @media screen and (max-width:@vp_mobile){ @rules(); } };

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;

  .mobile ({
    height: 100%;
    overflow: auto;
  });
}

.main-wrapper {
  height: 100vh;
  transition: 2s ease-in-out;
  //overflow: hidden;
  //
  //.mobile ({
  //    height: 100%;
  //    overflow: auto;
  //});

  .wrapper {
    background-color: #000;
    height: 100vh;
    width: 100%;
    color: red;
    font-size: 48px;

    &.color {
      background-color: red;
    }

    &.color-two {
      background-color: aqua;
    }
  }
}


</style>
