<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="max-w-md p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold mb-4 text-center select-none">Setting</h1>
      <form @submit.prevent="saveSettings" class="space-y-4 font-bold">
        <div class="flex items-center justify-between">
          <label class="block text-sm font-medium mb-2">API address</label>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="settings.apiUrl"
              :class="{ 'pointer-events-none': isApiUrlLocked }"
              class="w-full border border-gray-300 rounded-md p-2 dark:border-gray-600 dark:bg-gray-700"
              :disabled="isApiUrlLocked"
            />
            <Switch v-model="isApiUrlLocked" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <label class="block text-sm font-medium mb-2 mr-2">API Key</label>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="settings.apiKey"
              :class="{ 'pointer-events-none': isApiKeyLocked }"
              class="w-full border border-gray-300 rounded-md p-2 dark:border-gray-600 dark:bg-gray-700"
              :disabled="isApiKeyLocked"
            />
            <Switch v-model="isApiKeyLocked" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <label class="block text-sm font-medium mb-2">Avatar</label>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="settings.avatarUrl"
              :class="{ 'pointer-events-none': isAvatarUrlLocked }"
              class="w-full border border-gray-300 rounded-md p-2 dark:border-gray-600 dark:bg-gray-700"
              :disabled="isAvatarUrlLocked"
            />
            <Switch v-model="isAvatarUrlLocked" />
          </div>
        </div>
        <button type="submit" class="w-full bg-black text-white px-10 py-3 active:scale-95 duration-300 rounded-full">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '@components/switch/Switch.vue'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  components: {
    Switch
  },
  setup() {
    const settings = reactive({
      apiUrl: '',
      apiKey: '',
      avatarUrl: ''
    })

    const isApiUrlLocked = ref(false)
    const isApiKeyLocked = ref(false)
    const isAvatarUrlLocked = ref(false)

    const saveSettings = () => {
      console.log('Settings saved:', settings)
      // Add API call to save settings
    }

    return {
      settings,
      isApiUrlLocked,
      isApiKeyLocked,
      isAvatarUrlLocked,
      saveSettings
    }
  }
})
</script>
