<template>
  <div class="container mx-auto flex flex-col h-full">

    <form v-on:submit.prevent="checkAndWriteCondolence"
    class="flex flex-col flex-grow">

      <div class="mx-4 mt-4 mb-2">
        <span class="pl-1">작성자</span>
        <input ref="modOrDelCondolenceWriterElRef"
        type="text" class="h-8 w-full mt-1 border-black pl-2"
        id="modOrDelCondolenceWriter"
        placeholder="이름을 입력해주세요.">
      </div>

      <div class="mx-4 flex flex-col flex-grow">
        <span class="pl-1">조의문</span>
        <textarea ref="modOrDelCondolenceBodyElRef" id="" cols="30" rows="10"
        class="border-black flex-grow mt-1 pl-2 pt-2"        
        placeholder="조의문을 작성해주세요.">      
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
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'UsrModifyOrDeletePage',

  setup(){
    const modOrDelCondolenceWriterElRef = ref<HTMLInputElement>();
    const modOrDelCondolenceBodyElRef = ref<HTMLInputElement>();

    const writer = localStorage.getItem("modOrDelCondolenceWriter");
    const body = localStorage.getItem("modOrDelCondolenceBody");

    onMounted(() => {

      if(modOrDelCondolenceWriterElRef.value == null){
        return;
      }
      
       let modOrDelCondolenceWriterEl = modOrDelCondolenceWriterElRef.value;

       if(modOrDelCondolenceWriterEl == null){
        return;
       }

       if(writer == null){
        return;
       }

       modOrDelCondolenceWriterEl.value = writer;

       if(modOrDelCondolenceBodyElRef.value == null){
         return;
       }

       let modOrDelCondolenceBodyEl = modOrDelCondolenceBodyElRef.value;

       if(modOrDelCondolenceBodyEl.value == null){
        return;
       }

      if(body == null){
        return;
      }

      modOrDelCondolenceBodyEl.value = body;

    })

      
  
    return {
      modOrDelCondolenceWriterElRef,
      writer,
      body,
    }
  }


})
</script>
