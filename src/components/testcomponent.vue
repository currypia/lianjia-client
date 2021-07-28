<template>
  <div class="dnf"></div>
</template>
<script>
export default {
  name: 'DNF',
  props: ["msg"],
  watch: {
    // msg (newVal, oldVal) {//对引用类型的值无效
    //   console.info('value changed 1', newVal)
    // },
    msg: {
      handler (newVal, oldVal) {
        console.info('value changed 2', newVal.age)
      },
      deep: true
    }
  },
}
</script>