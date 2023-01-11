<template>
  <div>
    <input type="text" v-model="obj.mytext" />
    <ul>
      <li v-for="data in obj.datalist" :key="data">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, watch } from "vue";
export default {
  setup() {
    const obj = reactive({
      mytext: "",
      datalist: ["aaa", "abb", "abc", "bbb", "bcc", "add", "bcd"],
      oldlist: ["aaa", "abb", "abc", "bbb", "bcc", "add", "bcd"],
    });

    watch(
      () => obj.mytext,
      () => {
        obj.datalist = obj.oldlist.filter((item) => item.includes(obj.mytext));
      }
    );

    const handleInput = () => {};
    return {
      obj,
      handleInput,
    };
  },
  watch:{
      mytext(){
          
      }
  }
};
</script>