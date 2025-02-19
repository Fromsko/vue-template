<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-16 text-center select-none mr-24">
      <!-- 标题 -->
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Translation Assistant</h1>
      <!-- 副标题 -->
      <p class="text-xl text-gray-600 mb-8">Quickly and accurately translate text into multiple languages.</p>
      <!-- 按钮 -->
      <button
        class="bg-blue-600 text-white px-10 py-3 hover:bg-blue-700 active:scale-95 duration-300 rounded-full"
        @click="goToTranslation"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  methods: {
    goToTranslation() {
      // 延时1秒后跳转
      setTimeout(() => {
        this.$router.push('/translate')
      }, 150)
    }
  }
})
</script>
