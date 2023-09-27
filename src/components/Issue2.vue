<script setup>
import { ref } from 'vue';
let img=ref("")
let img2="src/assets/milk.png"
let img1="src/assets/shake.png"
 img.value=img1
function switchFunc(){
    if(img.value===img1){
        img.value=img2
       
    }
    else{
        img.value=img1
    }
}
</script>
<template>
    <div @click="switchFunc()" class=" w-screen h-screen md:w-auto lg:h-auto bg-black flex justify-center items-center">
        <img  :src="img"  class="border-white border border-2 md:scale-[90%]" alt="">
    </div>
</template>