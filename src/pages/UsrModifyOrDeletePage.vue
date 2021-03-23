<template>
  <div class="container mx-auto flex flex-col h-full">

    <form v-on:submit.prevent="ModifyCondolence(writer, body)"
    class="flex flex-col flex-grow">

      <div class="mx-4 mt-4 mb-2">
        <span class="pl-1">작성자</span>
        <input
        id = "writer" 
        type="text" class="h-8 w-full mt-1 border-black pl-2"
        placeholder="이름을 입력해주세요."
        v-model="writer">
      </div>

      <div class="mx-4 flex flex-col flex-grow">
        <span class="pl-1">조의문</span>
        <textarea 
        class="border-black flex-grow mt-1 pl-2 pt-2"        
        placeholder="조의문을 작성해주세요."
        v-model="body">
        </textarea>
      </div>

      <input type="submit" value="작성하기" 
        class="mx-4 my-4 border-black 
        flex justify-center items-center py-2 bg-white"/>

    </form>

    <form class="mx-4 mb-4 border-black" v-on:submit.prevent="">
      <input type="submit" value="삭제하기"
      class="bg-white block center w-full py-2">
    </form>

    <div class="mx-4 mb-4 border-black">
        <router-link to="/usr/main">
            <div class="flex justify-center items-center py-2">
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
  name: 'UsrModifyOrDeletePage',
  setup(){
    const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;
    const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;

    const id = localStorage.getItem("modOrDelCondolenceId");
    const writer = localStorage.getItem("modOrDelCondolenceWriter");
    const body = localStorage.getItem("modOrDelCondolenceBody");  
        
    const ModifyCondolence = ((writer:string, body:string) => {
      if( writer.length == 0 ){
        alert('이름을 입력해주세요.')
      }
      else{
        if( body.length == 0 ){
          alert('조의문을 작성해주세요.')
        }
      }

      if( id == null ){
        return;
      }

      mainApi.condolence_doModify(parseInt(id), writer, body)
      .then( axiosResponse => {
        alert(axiosResponse.data.msg)

        if(axiosResponse.data.fail){
          return;
        }

        router.replace('main');
      })

      
      
    })

    return {
      id,
      writer,
      body,
      ModifyCondolence,
    }

  }

})

</script>
