<template>
    <div class="container mx-auto px-2 h-full flex flex-col">          

        <div class="flex px-2 py-4">
            
            <div class="flex mr-4 w-24 h-32 border-black
            justify-center items-center">
                영정 사진
            </div>

            <div class="flex flex-grow border-black
            justify-center items-center">
                멘트
            </div>

        </div>

        <div class="flex flex-col flex-grow mx-2 border-black">
            <div class="py-2 px-2">
                조의문 리스트
            </div>
            <div class="py-2 px-2 flex flex-col flex-grow justify-center">
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

        <div class="flex px-2 py-4">
            
            <div class="flex-grow border-black w-24 h-28
            flex justify-center items-center">부고 문자 단체 발송</div>



            <div class="flex-grow border-black w-24 h-28 mx-4
            flex justify-center items-center">부조금 보내기</div>



            <div class="flex-grow border-black w-24 h-28
            flex justify-center items-center">장례식장 위치</div>
            
        </div>

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