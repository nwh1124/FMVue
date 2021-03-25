<template>
    <div class="container mx-auto flex flex-col flex-grow h-full">
        <div class="border-black mx-2 my-4 px-2 py-2 flex flex-col">
          <span>고 000 님의 장례</span>
          <span>상주 000 님의 계좌</span>
        </div>

        <div class="border-black mx-2 mb-4 px-2 py-2 flex flex-col">
          <span>은행 : 00 은행</span>
          <span>계좌번호 : 0000-00-0000</span>
        </div>

        <div class="border-black flex-grow mx-2 mb-4 flex justify-center items-center">
          은행 결제 앱
        </div>
        
        <button class="h-12 mx-2 mb-4 border-black 
        flex justify-center items-center"
        onclick="startPay()">
          부조금 보내기[필요한가?]
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
    name: 'UsrSendConMoneyPage'
})
</script>

<style>

</style>