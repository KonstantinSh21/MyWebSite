<template>
  <div class="main-wrapper">
    <SkillHtml />
  </div>
</template>

<script>
import SkillHtml from "./SkillHtml";
export default {
  name: "Wrapper",
  components: {
    SkillHtml
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

.main-wrapper {
  position: relative;
  height: 100%;
  margin-left: 135px;

  .tablet({
    margin-left: 0;
  });
}

</style>