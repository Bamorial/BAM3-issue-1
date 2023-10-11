<script setup>
import { ref } from 'vue';


let posX=ref(0)
let posY=ref(0)
let y=ref('')
let x=ref('')
let color=ref('')
let colorSecondary=ref('')

function getPos(e){
    //console.log(" x: " + e.clientX + " y: " + e.clientY)
     posX.value=e.clientX;
     posY.value= e.clientY;
     console.log(posX.value)
     color.value="rgb("+posX.value+", "+posY.value+", 0)"
     let a=posX.value+255
     let b=posY.value-255
    
     y.value=(posY.value-20)+"px"
     x.value=(posX.value-20)+"px"

     colorSecondary.value="rgb("+a+", "+b+", 0)"
     console.log(color.value)
     console.log(colorSecondary.value)
     console.log(y.value)

}
console.log(color)
</script>
<template>
<div class=" h-screen w-screen" :style="{backgroundColor: color}" @mousemove="getPos($event)">

    <div class=" bg-red-100 h-10 w-10 absolute" :style="{backgroundColor: colorSecondary, top: y, left: x}">Hello</div>
   
</div>
</template>
