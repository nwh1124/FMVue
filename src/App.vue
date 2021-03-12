<template>
  <div class="body h-screen flex flex-col">
    <header class="mx-auto container">
      <div class="h-12 bg-black text-white flex justify-center items-center">
        <img class="h-6" alt="Vue logo" src="./assets/logo.png" />
        <span class="ml-4">등불 :: 삼가 고인의 명복을 빕니다</span>
      </div>
      <div class="h-8 bg-black text-white flex justify-center items-center">
        <router-link to="/">홈</router-link>
        <router-link class="ml-4" to="/usr/login">로그인</router-link>
      </div>
    </header>
    <main class="flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>

<style>
</style>