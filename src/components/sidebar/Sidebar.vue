<template>
  <div class="flex flex-col justify-center h-full ml-4">
    <SidebarIcons :icons="icons" />
  </div>
</template>

<script lang="ts" setup>
import IconPDF from '@assets/imgs/icons8-pdf-80.png'
import IconTranslation from '@assets/imgs/icons8-translation-80.png'
import KmiLogo from '@assets/imgs/kimi-logo.png'
import KmiUser from '@assets/imgs/kimi-user.png'
import SidebarIcons from '@components/sidebar/SidebarIcons.vue'
import { ref } from 'vue'

const router = useRouter()

const skipRoute = (path: string, delay: number = 150) => {
  setTimeout(() => {
    router.push(path)
  }, delay)
}

const icons = ref([
  {
    src: KmiLogo,
    alt: 'Home Icon',
    tooltip: 'Home',
    onClick: () => skipRoute('/')
  },
  {
    src: IconTranslation,
    alt: 'Logo',
    tooltip: 'translate',
    onClick: () => skipRoute('/translate')
  },
  {
    src: IconPDF,
    alt: 'PDF Icon',
    tooltip: 'To PDF',
    onClick: () => skipRoute('/pdf')
  },
  {
    src: KmiUser,
    alt: 'User Icon',
    tooltip: 'User',
    onClick: () => skipRoute('/user')
  }
])

defineComponent({
  name: 'sidebar'
})
</script>
