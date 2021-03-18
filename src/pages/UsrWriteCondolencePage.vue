<template>
  <div class="container mx-auto flex flex-col h-full">

    <form v-on:submit.prevent="checkAndWriteCondolence"
    class="flex flex-col flex-grow">

      <div class="mx-4 mt-4 mb-2">
        <span class="pl-1">작성자</span>
        <input ref="newCondolenceWriterElRef"
        type="text" class="h-8 w-full mt-1 border-black pl-2"
        placeholder="이름을 입력해주세요.">
      </div>

      <div class="mx-4 mb-4">
        <span class="pl-1">비밀번호</span>
        <input ref="newCondolencePasswordElRef"
        type="password" class="h-8 w-full mt-1 border-black pl-2"
        placeholder="비밀번호를 입력해주세요.">
      </div>

      <div class="mx-4 flex flex-col flex-grow">
        <span class="pl-1">조의문</span>
        <textarea ref="newCondolenceBodyElRef" id="" cols="30" rows="10"
        class="border-black flex-grow mt-1 pl-2 pt-2"        
        placeholder="조의문을 작성해주세요.">      
        </textarea>
      </div>

      <input type="submit" value="작성하기" 
        class="mx-4 my-4 border-black 
        flex justify-center items-center py-2 bg-white"/>

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
import { defineComponent, ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { MainApi } from '../apis/'
import { Router } from 'vue-router';

export default defineComponent({
  name: 'UsrWriteCondolencePage',

  setup(){
    const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;
    const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;

    const newCondolenceWriterElRef = ref<HTMLInputElement>();
    const newCondolencePasswordElRef = ref<HTMLInputElement>();
    const newCondolenceBodyElRef = ref<HTMLInputElement>();
    
    function checkAndWriteCondolence(){
      
      if( newCondolenceWriterElRef.value == null ){
        return;
      }

      const newCondolenceWriterEl = newCondolenceWriterElRef.value;

      newCondolenceWriterEl.value = newCondolenceWriterEl.value.trim();

      if( newCondolenceWriterEl.value.length == 0 ){
        alert('작성자를 입력해주세요.');
        newCondolenceWriterEl.focus();

        return;
      }
      
      if( newCondolencePasswordElRef.value == null ){
        return;
      }

      const newCondolencePasswordEl = newCondolencePasswordElRef.value;

      newCondolencePasswordEl.value = newCondolencePasswordEl.value.trim();

      if( newCondolencePasswordEl.value.length == 0 ){
        alert('비밀번호를 입력해주세요.');
        newCondolencePasswordEl.focus();

        return;
      }

      if( newCondolenceBodyElRef.value == null ){
        return;
      }

      const newCondolenceBodyEl = newCondolenceBodyElRef.value;

      newCondolenceBodyEl.value = newCondolenceBodyEl.value.trim();

      if( newCondolenceBodyEl.value.length == 0 ){
        alert('조의문을 작성해주세요.');
        newCondolenceBodyEl.focus();

        return;
      }

      writeCondolence(newCondolenceWriterEl.value, newCondolencePasswordEl.value, newCondolenceBodyEl.value);
    
    }

    function writeCondolence(writer:string, password:string, body:string){
    mainApi.condolence_doWrite(writer, password, body)
    .then(axiosResponse => {
      alert(axiosResponse.data.msg);

      if(axiosResponse.data.fail){
        return;
      }

      router.replace("main")
      })
    }

    return{
      checkAndWriteCondolence,
      newCondolenceWriterElRef,
      newCondolencePasswordElRef,
      newCondolenceBodyElRef,
    }
    
  }

});

</script>

<style>

</style>