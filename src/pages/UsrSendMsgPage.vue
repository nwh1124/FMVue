<template>
    <div class="container mx-auto flex flex-col flex-grow h-full">
        <div class=" mx-2 my-4">

          <input type="text" placeholder="발신자 번호"
          class="border-black block w-full h-10 pl-2"
          ref="condolenceMsgSender">

          <input type="text" placeholder="수신자 번호"
          class="border-black block mt-4 w-full h-10 pl-2"
          ref="condolenceMsgReciver">

        </div>
        
        <div class="mx-2 mb-4 flex-grow">
          <textarea class="border-black w-full h-full px-2 py-2 no-underline"
            ref="condolenceMsg"
            />
        </div>
     
        <input class="h-12 mx-2 mb-4 border-black bg-white
        flex justify-center items-center" type="submit" @click="sendMsgCheck"
        value="부고 문자 발송"/>
        

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
import axios from 'axios';
import { defineComponent, getCurrentInstance } from 'vue'
import { Router } from 'vue-router';
import { MainApi } from '../apis';

export default defineComponent({
    name: 'UsrSendMsgPage',
    methods: {
      sendMsgCheck(){
        
        let condolenceMsgSender = this.$refs.condolenceMsgSender;
        let condolenceMsgReciver = this.$refs.condolenceMsgReciver;
        let condolenceMsg = this.$refs.condolenceMsg;

        if( condolenceMsgSender.value.length == 0 ){
          alert('발신자 번호를 입력해주세요.')
          return;
        }
        if( condolenceMsgReciver.value.length == 0 ){
          alert('수신자 번호를 입력해주세요.')
          return;
        }
        if( condolenceMsg.value.length == 0 ){
          alert('부고를 입력해주세요.')
          return;
        }
        
        const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;
        const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;

        mainApi.condolence_doSendSms(condolenceMsgSender.value, condolenceMsgReciver.value, condolenceMsg.value)
        .then(axiosResponse => {
          alert(axiosResponse.data.msg);
        })


      }      

    },
    mounted(){
      this.$refs.condolenceMsg.value = `양식 예시
OOO 님의 어머님께서 오늘(00일)
오전에 별세하셨습니다.
이에 삼가 알려드립니다.
아들 : OOO
딸 : OOO
발인 : 0000년 00월 00일 00시
영결식장(장지)
0000년 00월 00일 호상`
    }
})
</script>

<style>

</style>