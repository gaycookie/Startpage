<template>
  <div class="search-box">
    <div class="background"></div>
    <input type="search" placeholder="Search...">
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  width: 30%;
  height: 48px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--background-color);
  opacity: 0.8;
}

.search-box input {
  width: 100%;
  padding: 13px;
  border-radius: 7.5px;
  border: none;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: 1.2em;
}

.search-box input:focus {
  outline: none;
}
</style>

<script>
export default {
  name: 'SearchBox',
  mounted() {
    this.$el.querySelector('input').focus();

    // TODO: Make it actually work
    this.$el.querySelector('input').addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.$el.querySelector('input').value = ''
      }
    });
  }
}
</script>