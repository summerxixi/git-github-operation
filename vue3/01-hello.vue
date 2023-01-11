<template>
    <div>
        hello3- 新写法
        {{obj.myname}}
        <button @click="handleClick()">chnage</button>

        
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    // vue3老写法或者vue 写法 中 beforeCreeate,created 生命周期=== setup
    setup(){
        console.log("setup")

        //定义状态
        const obj = reactive({
            myname:"kerwin",
            myage:100
        })
        const handleClick=()=>{
            // console.log("111111111")
            obj.myname = 'xiaoming'
        }
        return {
            obj,
            handleClick
        }
    }
}
</script>