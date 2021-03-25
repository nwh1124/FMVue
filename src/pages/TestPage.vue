<template>    
    <div class="container mx-auto">
        <form v-on:submit.prevent="testMethod">
            <input type="submit">
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TestPage',
    setup(){
        const str = 'wow'
        function testMethod(){
            alert(str)
        }
        return{
            testMethod,
        }
    },
    computed:{
        testCom: () => {
            return 'd';
        }
    }
})
</script>