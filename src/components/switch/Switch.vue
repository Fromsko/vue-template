<template>
  <div
    :class="[
      'relative inline-flex items-center justify-center h-6 cursor-pointer rounded-full select-none transition-colors duration-200 ease-in-out',
      sizeClasses,
      {
        'bg-black': modelValue,
        'bg-gray-300': !modelValue
      }
    ]"
    @click="toggleSwitch"
  >
    <div
      :class="[
        'absolute inset-y-0 left-0 w-full h-full flex items-center justify-center text-white transition-opacity duration-200 ease-in-out',
        {
          'opacity-100': modelValue,
          'opacity-0': !modelValue
        }
      ]"
    >
      <slot name="on" />
    </div>
    <div
      :class="[
        'absolute inset-y-0 right-0 w-full h-full flex items-center justify-center text-black transition-opacity duration-200 ease-in-out',
        {
          'opacity-100': !modelValue,
          'opacity-0': modelValue
        }
      ]"
    >
      <slot name="off" />
    </div>
    <div
      :class="[
        'absolute inset-y-0 left-0 w-5 h-5 my-auto bg-white rounded-full shadow-inner transition-transform duration-200 ease-in-out',
        {
          'translate-x-6': modelValue,
          'translate-x-0': !modelValue
        }
      ]"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'Switch',
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md'
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const toggleSwitch = () => {
      emit('update:modelValue', !props.modelValue)
      emit('change', !props.modelValue)
    }

    const sizeClasses = computed(() => {
      switch (props.size) {
        case 'sm':
          return 'w-12 h-6'
        case 'md':
          return 'w-14 h-7'
        case 'lg':
          return 'w-16 h-8'
        default:
          return 'w-14 h-7'
      }
    })

    return {
      toggleSwitch,
      sizeClasses
    }
  }
})
</script>
