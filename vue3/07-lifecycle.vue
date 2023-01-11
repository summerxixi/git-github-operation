<template>
    <div>
        生命周期

        <ul>
            <li v-for="data in obj.list" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { onBeforeMount, onMounted, reactive } from 'vue'
export default {
    data(){
        return {

        }
    },
    // mounted
    computed:{

    },
    setup(){
        const obj = reactive({
            list:[]
        })
        onBeforeMount(()=>{
            console.log("onBeforeMount")
        })

        onMounted(()=>{
            console.log("dom上树",`axios,事件监听， setInterval,,,,,,`)
            setTimeout(()=>{
                obj.list = ["aaa","vvvv","cccc"]
            },2000)
        })

        return {
            obj
        }
    }
}
</script>