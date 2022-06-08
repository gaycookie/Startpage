<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>

<style lang="scss">

html, body {
  margin: 0;
  height: 100%;
}

#wallpaper {
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

#app {
  z-index: 1;
  padding: 32px;
}
</style>

<script>
export default {
  mounted () {
    const body = document.querySelector('body')
    const wallpaperDiv = document.querySelector('#wallpaper')
    const { source, options } = this.$store.getters.wallpaperOptions

    body.setAttribute('data-theme', this.theme.dark ? 'dark' : '')

    if (source !== '') {
      if (source === 'url') {
        wallpaperDiv.style.backgroundImage = `url(${options.value})`
      }
    }

    if (this.theme.accentColor !== '') {
      body.style.setProperty('--accent-color', this.theme.accentColor)
    }
  },
  computed: {
    theme() {
      return this.$store.getters.themeOptions;
    }
  }
}
</script>
