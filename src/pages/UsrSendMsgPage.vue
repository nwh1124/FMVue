<template>
    <div class="container mx-auto flex flex-col flex-grow h-full">
        <div class="border-black mx-2 my-4">
          <ul>
            <li>전화 번호 1</li>
            <li>전화 번호 2</li>
            <li>전화 번호 3...</li>
            <li>사용자의 휴대폰에서 번호를 가져오는 기능</li>
          </ul>
        </div>
        
        <div class="mx-2 mb-4 flex-grow">
          <textarea class="border-black w-full h-full px-2 py-2"
            placeholder="양식 예시
OOO 님의 어머님께서 오늘(00일)
오전에 별세하셨습니다.
이에 삼가 알려드립니다.
아들 : OOO
딸 : OOO
발인 : 0000년 00월 00일 00시
영결식장(장지)
0000년 00월 00일 호상"
          />
        </div>
     
        <button class="h-12 mx-2 mb-4 border-black 
        flex justify-center items-center">
          부고 문자 발송
        </button>

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
    name: 'UsrSendMsgPage'
})
</script>

<style>

</style>