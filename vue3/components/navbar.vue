<template>
    <div>
        <button @click="handleShow">left</button>
        {{myname}}
        <button>right</button>
    </div>
</template>

<script>
export default {
    props:["myname","myid"],
    // mounted(){
    //     console.log(this.myid)
    // }

    setup(props,{emit}){
        console.log(props.myname,props.myid)
        const handleShow = ()=>{
            // console.log("left",aaa)
            // emit（hooks）=== this.$emit（类）
            emit("event")
        }
        return {
            handleShow
        }
    }
}
</script>