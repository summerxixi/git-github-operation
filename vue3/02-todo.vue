<template>
    <div>
        todo--{{myname}}
        <input type="text" v-model="obj.mytext"/>

        <input type="text" ref="mytextref"/>
        <button @click='handleAdd'>add</button>

        <ul>
            <li v-for='data in obj2.datalist' :key="data">
                {{data}}
            </li>
        </ul>

         <ul>
            <li v-for='data in mylist' :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import {reactive,ref} from 'vue'
export default {
    data(){
        return {
            myname:"kerwin"
        }
    },
    mounted(){
        // console.log("mounted",this.$refs.mytextref)
    },

    setup(){
        // console.log(this)
        const obj = reactive({
            mytext:'',
        })
        const obj2 = reactive({
            datalist:[]
        })

        const mytextref = ref() //创建ref对象

        const mylist = reactive([])

        const handleAdd = ()=>{
            console.log(mytextref.value.value) // 必须.value

            obj2.datalist.push(obj.mytext)
            mylist.push(obj.mytext)

            obj.mytext = ''
        }
        return {
            obj,
            obj2,
            mytextref,
            mylist,
            handleAdd
        }
    }
}
</script>