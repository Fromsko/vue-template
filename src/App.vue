<template>
  <!-- 左右布局 -->
  <div class="flex min-h-screen bg-gray-100">
    <!-- 左侧导航栏 -->
    <sidebar class="w-1/12 my-auto" />
    <!-- 右侧内容 -->
    <div class="w-11/12">
      <router-view />
    </div>
  </div>
</template>
