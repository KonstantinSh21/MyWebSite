<template>
  <div class="wrapper-autobiography">
    <div class="wrapper-autobiography__text">
      <div class="wrapper-autobiography__text-header">
        Autobiography
      </div>

      <div class="wrapper-autobiography__text-subheader">
        Autobiography
      </div>

      <div class="wrapper-autobiography__text-body">
        I was born on March 9, 2001, in Russia.<br>
        I have been programming since I was 18, let's see what happens.
        I think it turns out not bad
      </div>
    </div>
    <div class="wrapper-autobiography__img">
      <div class="wrapper-autobiography__img-item wrapper-autobiography__img-item--russia"></div>
      <div class="wrapper-autobiography__img-item wrapper-autobiography__img-item--perm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "АutoBiography"
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

.wrapper-autobiography {
  margin: 0 200px;
  display: flex;
  height: 100%;
  align-items: center;

  .tablet ({
    max-width: 600px;
    margin: 0 auto;
    padding: 0 32px;
  });


  .wrapper-autobiography__text {
    flex: 1 1 30%;
    text-align: left;
    margin-right: 64px;

    .wrapper-autobiography__text-header {
      color: #888;
      margin-left: 4px;
      font-weight: 400;
    }

    .wrapper-autobiography__text-subheader {
      color: #262626;
      margin-top: 16px;
      font-size: 64px;
      font-weight: 400;

      .mobile({
        font-size: 32px;
      })
    }

    .wrapper-autobiography__text-body {
      font-size: 24px;
      color: #888;
      font-weight: 500;
      margin-top: 8px;

      .mobile({
        font-size: 18px;
      })
    }
  }

  .wrapper-autobiography__img {
    flex: 1 1 70%;
    display: flex;
    height: 412px;

    .layout-s({
      display: none;
    });

    .wrapper-autobiography__img-item {
      background-position: center;
      background-size: cover;
      flex: 1 1 50%;
      transition: all 0.5s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }

    .wrapper-autobiography__img-item--russia {
      background-image: url(https://images.unsplash.com/photo-1527440050868-25ac612aae1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80);
      margin-right: 8px;
    }

    .wrapper-autobiography__img-item--perm {
      margin-left: 8px;
      background-image: url(https://images.unsplash.com/photo-1617628803058-b85483fc05df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80);
    }
  }
}

</style>