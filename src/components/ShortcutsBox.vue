<template>
  <div class="shortcuts-box">
    <a class="shortcut settings" href="javascript:void(0)" @click="showSettingsModal" title="Settings">
      <font-awesome-icon class="icon" icon="fa-solid fa-gear" />
    </a>
    <a class="shortcut" v-for="(shortcut, index) in shortcuts" :key="index" :href="shortcut.url" :target="options.openInNewTab ? '_blank' : ''" :title="shortcut.name">
      <font-awesome-icon class="icon" :icon="shortcut.icon" />
    </a>
    <a v-if="shortcuts.length < 18" class="shortcut" href="javascript:void(0)" @click="showAddModal" title="Add new shortcut">
      <font-awesome-icon class="icon" icon="fa-solid fa-plus" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.shortcuts-box {
  width: calc(100% - 128px);
}

.shortcut {
  width: 48px;
  height: 48px;
  text-align: center;
  display: inline-block;
  padding: 10px;
  border-radius: 7.5px;
  background-color: var(--background-color);
  color: var(--text-color);
  opacity: 0.8;
}

.shortcut .icon {
  padding: 4px 0;
  height: 40px;
  width: 40px;
}

.shortcut:not(:last-child) {
  margin-right: 27px;
}

.shortcut:hover {
  -webkit-box-shadow: 0 0 16px .5px var(--accent-color);
  box-shadow: 0 0 16px .5px var(--accent-color);
  color: var(--accent-color);
  opacity: 1;

  -webkit-animation: bounce .75s ease-in-out;
  animation: bounce .75s ease-in-out;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  40% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ShortcutsBox',
  computed: {
    options() {
      return this.$store.getters.shortcutsOptions
    },
    shortcuts() {
      return this.$store.getters.shortcutsOptions.shortcuts
    }
  },
  methods: {
    showSettingsModal() {
      // TODO: Making a modal for the settings
    },
    showAddModal() {
      Swal.fire({
        title: 'Add new shortcut',
        html: `
          <input type="text" class="swal2-input" id="name" style="width: 80%;" placeholder="Name" />
          <input type="text" class="swal2-input" id="url" style="width: 80%;" placeholder="URL" />
          <input type="text" class="swal2-input" id="icon" style="width: 80%;" placeholder="Icon" />
        `,
        confirmButtonColor: 'var(--accent-color)',
        confirmButtonText: 'Add Shortcut',
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          const name = document.getElementById('name').value
          const icon = document.getElementById('icon').value
          const url = document.getElementById('url').value
          
          if (!name || !icon || !url) {
            Swal.showValidationMessage(`All fields are required`)
          }

          return { name, url, icon }
        }
      }).then(({ value }) => {
        if (value) {
          this.$store.commit('addShortcut', value)
        }
      })
    }
  }
}
</script>