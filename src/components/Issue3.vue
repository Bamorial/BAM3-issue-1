<script setup>
import { ref } from 'vue';
let img=ref("")
let imgList=["https://i.ibb.co/x6gkqqh/1.png","https://i.ibb.co/YhVrmFW/2.png","https://i.ibb.co/QbcbRT8/3.png","https://i.ibb.co/6XsnWVK/4.png","https://i.ibb.co/BCwN9Hw/5.png"]

// "https://i.ibb.co/BjKcFpG/milkshake.png"
let i=0;
 img.value=imgList[i]
function switchFunc(){
    if(i<imgList.length-1){
        i++;
      img.value=imgList[i]

    }
    else{
        i=0;
        img.value=imgList[i]

    }
}
</script>
<template>
    <div @click="switchFunc()" class=" w-screen h-screen md:w-auto lg:h-auto bg-black flex justify-center items-center">
        <img  :src="img"  class="border-white border border-2 md:scale-[90%]" alt="">
       
      
    </div>
</template>
