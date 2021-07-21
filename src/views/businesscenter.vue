<template>
  <div class="contain">
    <!-- 导航栏 -->
    <headercomponent> </headercomponent>
    <div>
      业务中心
    </div>

    <footercomponent></footercomponent>
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import footercomponent from '../components/footercomponent.vue'

export default {
  components: {
    headercomponent,
    footercomponent
  }
}
</script>

<style scoped>
dl,
dt,
dd,
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>