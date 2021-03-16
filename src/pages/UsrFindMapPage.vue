<template>
    <div class="container mx-auto flex flex-col flex-grow h-full">
        <div class="border-black mx-2 my-4 px-2 py-2 flex flex-col">
          <span>000 장례식장</span>
        </div>

        <div class="border-black mx-2 mb-4 px-2 py-2 flex flex-col">
          <span>주소</span>
          <span>0000도 000시 00동 00읍 0-00번지</span>
        </div>

        <div class="border-black flex-grow mx-2 mb-4 flex justify-center items-center">
          구글 지도?
        </div>

        <div class="mx-2 mb-4 border-black">
            <router-link to="/usr/main">
                <div class="flex justify-center items-center py-4">
                  돌아가기
                </div>
            </router-link>
        </div>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UsrFindMapPage'
})
</script>

<style>

</style>