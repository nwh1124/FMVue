<template>
  <div>
    dd
  </div>
  <div class="mx-2 mb-4 border-black">
      <router-link to="/usr/main">
          <div class="flex justify-center items-center py-4">
            돌아가기
          </div>
      </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UsrPasswordCheckPage'
})
</script>
