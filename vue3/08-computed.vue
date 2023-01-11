<template>
    <div>
        <input type="text" v-model="obj.mytext"/>
        <ul>
            <li v-for="data in computedList" :key="data">
                {{data}}
            </li>
        </ul>

        {{filterlist()}}
        {{filterlist()}}

        {{computedList}}
        {{computedList}}
    </div>
</template>
<script>
import { reactive,computed } from 'vue'
export default {
    setup(){
        const obj = reactive({
            mytext:'',
            datalist:["aaa","abb","abc","bbb","bcc","add","bcd"]
        })
        const filterlist = ()=>{
            console.log("filterlist")
            return obj.datalist.filter(item=>item.includes(obj.mytext))
        }

        const computedList = computed(()=>{
            console.log("computedList")
            return obj.datalist.filter(item=>item.includes(obj.mytext))
        })
        return {
            obj,
            filterlist,
            computedList
        }
    },
    computed:{
        aaa(){
            return "111111"
        }
    }
}
</script>