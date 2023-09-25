<script setup>
import { ref } from 'vue';


let isActive=ref(true)
let name=ref('')
let letters=[' ','B','A','M','O','R','I','A','L',' ','S','Z','N']
let i=0;
name.value='Bamorial'
const scrolling = (e) => {
  isActive.value=false;
   name.value=name.value+letters[i]
   i++
   if(i>letters.length-1)i=0
  }
</script>
<template>
  <div @wheel="scrolling"  @touchmove="scrolling" class=" h-screen w-screen flex items-center justify-center flex-col ">
  <div class="m-2 font-primary text-[40px] text-primary">{{ name }}</div>
  <div v-if="isActive" class=" font-mono text-primary text-[10px] -mt-2 ">SEASON 3.0 WEB ADVENTURE ISSUE 1</div>
</div>
</template>