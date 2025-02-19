vue复制
<template>
  <div :class="['bg-white dark:bg-gray-800', 'shadow-2xl rounded-lg p-4 w-16 relative']">
    <div class="flex flex-col items-center space-y-4 select-none">
      <div
        v-for="(icon, index) in props.icons"
        :key="index"
        @click="() => handleIconClick(index)"
        class="relative flex items-center justify-center w-full size-12 group hover:bg-gray-300 rounded-xl active:scale-75 duration-300"
      >
        <img :src="icon.src" :alt="icon.alt" class="w-6 h-6" />
        <div
          v-if="icon.tooltip"
          class="absolute -right-20 top-1/2 z-10 transform -translate-y-1/2 hidden group-hover:block p-2 bg-gray-800 dark:bg-gray-900 text-white rounded-full shadow-md"
        >
          {{ icon.tooltip }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps } from 'vue'

interface Icon {
  src: string
  alt: string
  tooltip?: string
  onClick?: () => void
}

const props = defineProps<{
  icons: Icon[]
}>()

const handleIconClick = (index: number) => {
  const icon = props.icons[index]
  if (icon.onClick) {
    icon.onClick()
  }
}

defineComponent({
  name: 'SidebarIcons'
})
</script>
