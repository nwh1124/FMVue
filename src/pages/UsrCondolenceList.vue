<template>
    <div class="container mx-auto flex flex-col flex-grow h-full">
        <div class="flex flex-col flex-grow my-2 mx-2 border-black">
            <div class="pt-2 px-2 flex justify-between">
                <span>조의문 리스트</span>
            </div>
            <div class="px-2 flex flex-col flex-grow justify-center">
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
                <span class="block">리스팅</span>
            </div>
            <div class="flex pl-2 py-2">
                <input type="text" class="flex flex-grow p-2 h-8 border-black" placeholder="조의문을 작성해주세요." />
                <button class="px-2 mx-2 border-black">작성</button>
            </div>
        </div>
        <div class="mx-2 mb-2 border-black">
            <router-link to="/usr/main">
                <div class="flex justify-center items-center py-4
                ">돌아가기</div>
            </router-link>
        </div>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UsrCondolenceList'
})
</script>

<style>

</style>