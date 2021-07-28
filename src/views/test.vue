<template>
  <div class="game">
    <button @click="addAge">birthday++</button>
    <DNF :msg="child"></DNF>
  </div>
</template>
<script>
import DNF from '../components/testcomponent.vue'
export default {
  name: 'Game',
  components: {
    DNF
  },
  data () {
    return {
      child: { name: 'dnf', age: 18 },
    }
  },
  methods: {
    addAge () {
      this.child.age++;
      //this.child = JSON.parse(JSON.stringify(this.child));
    }
  }
}
</script>