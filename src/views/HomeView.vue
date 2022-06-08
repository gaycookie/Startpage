<template>
  <div class="home">
    <div class="wallpaper" ref="wallpaper"></div>
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

.wallpaper {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  },
  mounted() {
    const wallpaperDiv = this.$refs.wallpaper
    
    if (this.wallpaperOptions.source !== '') {
      if (this.wallpaperOptions.source === 'url') {
        wallpaperDiv.style.backgroundImage = `url(${this.wallpaperOptions.options.value})`
      }
    }
  },
  computed: {
    wallpaperOptions() {
      return this.$store.getters.wallpaperOptions
    }
  }
}
</script>
