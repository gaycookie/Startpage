<template>
  <div class="home">
    <SearchBox style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" />
    <ShortcutsBox style="position: absolute; left: 64px; bottom: 64px;" />
    <TimeBox style="position: absolute; top: 64px; left: 64px;" />
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  background-color: aqua;
}
</style>

<script>
import SearchBox from '@/components/SearchBox.vue'
import ShortcutsBox from '@/components/ShortcutsBox.vue'
import TimeBox from '@/components/TimeBox.vue'
//import WeatherBox from '@/components/WeatherBox.vue'

export default {
  name: 'HomeView',
  components: {
    SearchBox,
    ShortcutsBox,
    TimeBox,
    //WeatherBox
  }
}
</script>
