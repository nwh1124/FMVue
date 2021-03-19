<template>
  <div class="container mx-auto flex flex-col h-full justify-center">

    <div class="flex-grow"></div>

    <div class="mx-2 text-center bold text-2xl">
      비밀번호 확인
    </div>

    <div class="flex-grow"></div>

    <form v-on:submit.prevent="condolencePassCheckReady"
      class="flex flex-col flex-grow">

      <div class="mx-2">
        <input type="text" ref="condolencePassElRef" 
          placeholder="작성 시의 비밀번호를 입력해주세요."
          class="border-black w-full h-10 pl-2"/>
      </div>

      <div class="flex-grow"></div>

      <input type="submit" value="확인"
      class="text-center block py-4 bg-white border-black mx-2 mb-4" />

    </form>

    <div class="mx-2 border-black">
        <router-link to="/usr/main">
            <div class="flex justify-center items-center py-4">
              돌아가기
            </div>
        </router-link>
    </div>

    <div class="flex-grow"></div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import { MainApi } from '../apis';
import { useRoute } from 'vue-router';
import { Router } from 'vue-router';
import axios from 'axios';
export default defineComponent({
  name: 'PassCheckPage',

  setup(){
    const route = useRoute();
    const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;
    const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;

    const condolencePassElRef = ref<HTMLInputElement>();

    function condolencePassCheckReady(){
      const condolenceId = localStorage.getItem('condolenceId');
      const condolencePassEl = condolencePassElRef.value;

      if( condolenceId == null ){
        return;
      }

      if( condolencePassElRef.value == null ){
        return;
      }

      if( condolencePassElRef.value.value.length == 0 ){
        alert('비밀번호를 입력해주세요.');
        condolencePassElRef.value.focus();

        return;
      }

      passCheck(condolencePassElRef.value.value, parseInt(condolenceId));
    }

    function passCheck(password:string, id:number){
      mainApi.condolence_getById(id)
      .then(axiosResponse => {
        if(axiosResponse.data.fail){
          return;
        }

        const modOrDelCondolenceId = axiosResponse.data.body.condolence.id;
        const modOrDelCondolenceWriter = axiosResponse.data.body.condolence.writer;
        const modOrDelCondolencePassword = axiosResponse.data.body.condolence.password;
        const modOrDelCondolenceBody = axiosResponse.data.body.condolence.body;

        if( password != modOrDelCondolencePassword ){
          alert('비밀번호가 일치하지 않습니다.');

          return;
        }

        localStorage.setItem("modOrDelCondolenceId", modOrDelCondolenceId + "");
        localStorage.setItem("modOrDelCondolenceWriter", modOrDelCondolenceWriter);
        localStorage.setItem("modOrDelCondolencePassword", modOrDelCondolencePassword);
        localStorage.setItem("modOrDelCondolenceBody", modOrDelCondolenceBody);
        
        router.replace('/usr/modifyOrDelete')
      })
      
      
    }

    return{
      condolencePassCheckReady,
      condolencePassElRef,
    }

  }


})
</script>