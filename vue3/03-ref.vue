<template>
    <div>
        hello3- ref-新写法
        {{myname}}
        <button @click="handleClick()">chnage</button>

        
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    // vue3老写法或者vue 写法 中 beforeCreeate,created 生命周期=== setup
    setup(){
        const myname = ref("kerwin") // .value 属性
        // console.log(myname)
        const handleClick = ()=>{
            myname.value = "xiaoming"
        }

        return {
            handleClick,
            myname
        }
       
    }
}
</script>