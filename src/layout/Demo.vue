<template>
  <div class="p-8">
    <Switch v-model="isSwitchOn">
      <template #on>开</template>
      <template #off>关</template>
    </Switch>
  </div>
</template>

<script lang="ts">
import Switch from '@components/switch/Switch.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Switch
  },
  setup() {
    const isSwitchOn = ref(false)

    return {
      isSwitchOn
    }
  }
})
</script>
