<template>
    <div class="container mx-auto px-1 h-full flex flex-col">          

        <div class="flex-grow"></div>

        <div class=" relative ">
            <input type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
            placeholder="고인 또는 상주의 이름을 입력해주세요."/>
        </div>
        
        <div class="flex-grow"></div>

        <button type="button" class="inline-block py-2 px-4 bg-black hover:bg-gray-700 focus:ring-black focus:ring-offset-gray-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            로그인
        </button>

        <div class="flex-grow"></div>

    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UsrLoginPage'
})
</script>

<style>

</style>