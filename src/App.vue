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

#app {
  z-index: 1;
  padding: 32px;
}
</style>

<script>
export default {
  mounted () {
    const body = document.querySelector('body')
    body.setAttribute('data-theme', this.theme.dark ? 'dark' : '')

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
