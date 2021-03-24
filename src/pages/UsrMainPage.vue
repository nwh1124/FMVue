<template>
    <div class="container mx-auto px-2 h-full flex flex-col">   

        <div ></div>       

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
            <div class="py-2 px-2 flex justify-between">
                <span>조의문 리스트</span>
                <router-link to="/usr/conList" class="hover:underline">
                    <span>조의문 전체보기</span>
                </router-link>
            </div>
            <div class="py-2 px-2 flex flex-col flex-grow justify-center"
            id="usrMainCondolenceList" ref="usrMainCondolenceList">
                <ul v-bind:key="condolence.id" v-for="condolence in state.condolence">
                    <li class="text-sm mb-1">
                        <div class="flex justify-between">
                            <span>{{condolence.writer}}</span>
                            <form v-on:submit.prevent="replaceToPassCheckPage(condolence.id)">
                                <input type="submit" value="수정/삭제"
                                class="bg-white">
                            </form>                                          
                        </div>
                        <div class="flex justify-between">
                            <span>{{condolence.body}}</span>
                            <span>{{condolence.regDate}}</span>
                        </div>
                    </li>               
                </ul>
            </div>
            <div class="flex pl-2 py-2">
                <router-link to="/usr/write" class="px-2 mr-2 h-10 w-full border-black 
                flex justify-center items-center">조의문 작성</router-link>
            </div>
        </div>

        <div class="flex px-2 py-4">
            
            <router-link to="/usr/sendMsg" 
            class="flex-grow border-black w-24 h-28 flex justify-center items-center">
                부고 문자 단체 발송
            </router-link>

            <router-link to="/usr/sendConMoney" 
            class="flex-grow border-black mx-4 w-24 h-28 flex justify-center items-center">
                부조금 전송
            </router-link>

            <router-link to="/usr/findMap" 
            class="flex-grow border-black w-24 h-28 flex justify-center items-center">
                장례식장 위치
            </router-link>            
            
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
import { ICondolence } from '../types'
import { MainApi } from '../apis'
import { useRoute } from 'vue-router';
import { Router } from 'vue-router';

export default defineComponent({
    name: 'UsrLoginPage',
    props:{
        boardId:{
            type: Number,
            reqeured: true,
            default: 1,
        },
    },
    setup(props){        
        const router:Router = getCurrentInstance()?.appContext.config.globalProperties.$router;
        const mainApi:MainApi = getCurrentInstance()?.appContext.config.globalProperties.$mainApi;
      

        const state = reactive({
            condolence: [] as ICondolence[]
        });

        function loadCondolence(boardId:number){
            mainApi.condolence_list(boardId)
            .then(axiosResponse => {
                state.condolence = axiosResponse.data.body.condolences;
            })
        };

        function replaceToPassCheckPage(condolenceId:number){
            localStorage.setItem('condolenceId', condolenceId + "");  

            router.replace('../passCheck');
        }

        onMounted(() => {
            loadCondolence(props.boardId); 
        });

        watch(() => props.boardId, (newValue, oldValue) => {
            loadCondolence(props.boardId);
        })

        return{
         state,
         replaceToPassCheckPage,
        }
    }

})



</script>

<style>

</style>