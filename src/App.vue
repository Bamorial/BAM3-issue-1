<script setup>
import { ref } from 'vue';


let isActive=ref(true)
let name=ref('')
let letters=[':',' ','T','h','i','s',' ','i','s',' ','m','y',' ','l','a','t','e','s','t',' ','m','a','n','i','f','e','s','t','a','t','i','o','n','.',' ','I',' ','w','a','n','t',' ','y','o','u',' ','t','o',' ','j','o','i','n',' ','m','y',' ','j','o','u','r','n','e','y',' ','a','n','d',' ','p','l','a','y',' ','m','y',' ','l','i','t','t','l','e',' ','g','a','m','e','s','.',' ','H','a','v','e',' ','f','u','n','!']
let brownCol='rgb(247, 241, 232);'
let isBrown=ref(false)
let i=0;
name.value='Bamorial'
const scrolling = (e) => {
  isActive.value=false;
  if(i<letters.length){
   name.value=name.value+letters[i]
   i++
   
  }
  else{
    isBrown.value=true;
  }
}
</script>
<template>
  <div :class="{brownCol: isBrown}" @wheel="scrolling"  @touchmove="scrolling" class=" h-screen w-screen flex items-center justify-center flex-col bodyCol">
  <div :class="{txt:isBrown}" class="m-6 font-primary text-[40px] text-primary sm: text-[20px]">{{ name }}</div>
  <div v-if="isActive" class=" font-mono text-primary text-[10px] -mt-6 sm: text-[10px] ">SEASON 3.0 WEB ADVENTURE ISSUE 1</div>
  <div>
 <img src="./assets/map.svg" alt="">

  </div>
</div>

</template>