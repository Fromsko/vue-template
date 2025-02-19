<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- Left Side: PDF Viewer and Input -->
        <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex-1">
          <h2 class="text-xl font-bold mb-4">PDF File</h2>
          <textarea
            v-model="sourceText"
            class="w-full border border-gray-300 rounded-md p-2 mt-4"
            rows="5"
            placeholder="PDF content will appear here"
            @input="translateText"
          ></textarea>
        </div>

        <!-- Right Side: Translation Result -->
        <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 flex-1">
          <h2 class="text-xl font-bold mb-4">Translation Result</h2>
          <textarea
            readonly
            class="w-full border border-gray-300 rounded-md p-2"
            rows="5"
            placeholder="Translation result will appear here"
            >{{ translatedText }}</textarea
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PdfTranslator',
  setup() {
    const pdfUrl = 'path/to/your/pdf/file.pdf' // Replace with your PDF file path
    const sourceText = ref('')
    const translatedText = ref('')

    const translateText = () => {
      // Here you can call a translation API or use a translation library
      // For demonstration, it just repeats the input text
      translatedText.value = `Translated: ${sourceText.value}`
    }

    const onProgress = (progress: { loaded: any; total: any }) => {
      console.log(`PDF loading progress: ${progress.loaded} / ${progress.total}`)
    }

    return {
      pdfUrl,
      sourceText,
      translatedText,
      translateText,
      onProgress
    }
  }
})
</script>
