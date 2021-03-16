<template>
  <div class="body h-screen flex flex-col">
    <header class="mx-auto container flex flex-col md:flex-row">
      <div class="w-full h-12 bg-black text-white flex justify-center items-center">
        <img class="h-6" alt="Vue logo" src="./assets/logo.png" />
        <span class="ml-4">등불 :: 삼가 고인의 명복을 빕니다</span>
      </div>
      <div class="w-full h-12 bg-black text-white flex justify-center items-center">
        <router-link class="ml-4" to="/usr/login">로그인</router-link>
        <router-link class="ml-4" to="/usr/main">유족 메인</router-link>  
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