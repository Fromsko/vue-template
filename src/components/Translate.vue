<template>
  <div class="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto mt-10">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-bold">Translation</h1>
      <div class="flex space-x-4">
        <button class="bg-gray-200 hover:bg-gray-300 p-2 rounded-full" @click="swapLanguages">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5m15 6l-7.5-7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <!-- 左侧：源语言 -->
      <div>
        <label class="block text-sm font-medium mb-2">Source language</label>
        <select v-model="sourceLanguage" class="w-full border border-gray-300 rounded-md p-2">
          <option value="auto">Auto</option>
          <option value="en">English</option>
          <option value="zh-CN">中文</option>
        </select>
        <textarea
          v-model="textToTranslate"
          class="w-full border border-gray-300 rounded-md p-2 mt-2"
          rows="5"
          placeholder="Enter the text to translate"
          @input="handleInput"
        ></textarea>
      </div>

      <!-- 右侧：目标语言 -->
      <div>
        <label class="block text-sm font-medium mb-2">Target language</label>
        <select v-model="targetLanguage" class="w-full border border-gray-300 rounded-md p-2">
          <option value="en">English</option>
          <option value="zh-CN">中文</option>
        </select>
        <textarea readonly class="w-full border border-gray-300 rounded-md p-2 mt-2" rows="5" placeholder="翻译结果">
          {{ translatedText }}
        </textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'TranslatorTool',
  setup() {
    const state = reactive({
      sourceLanguage: 'auto', // 默认自动检测
      targetLanguage: 'en', // 默认翻译为英文
      textToTranslate: '',
      translatedText: ''
    })

    // 翻译功能
    const translateText = () => {
      if (state.sourceLanguage === 'auto') {
        // 模拟自动检测语言
        state.sourceLanguage = 'zh-CN' // 假设检测到中文
      }
      // 模拟翻译
      state.translatedText = `Translated: ${state.textToTranslate}`
    }

    // 语言互换功能
    const swapLanguages = () => {
      const temp = state.sourceLanguage
      state.sourceLanguage = state.targetLanguage
      state.targetLanguage = temp
    }

    // 输入域内容变化监听
    const handleInput = (event: Event) => {
      const target = event.target as HTMLTextAreaElement
      console.log('输入内容已更新:', target.value)
      // 可以在这里添加更多逻辑，例如实时翻译等
    }

    return {
      ...state,
      translateText,
      swapLanguages,
      handleInput
    }
  }
})
</script>
