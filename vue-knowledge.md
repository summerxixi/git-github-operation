# 路由
   详情见 
   ```js
   https://router.vuejs.org/zh/introduction.html
   ```
# 吸顶功能
 ```js
  <detail-header v-scroll="50">
            {{ filminfo.name }}
        </detail-header>
        
 Vue.directive('scroll', {
    inserted(el, binding) {
        el.style.display = 'none'
        console.log(binding)
        //console.log(el)//拿到dom节点  封装成指令，然后对dom进行过是否显示操作 ,binding.value就是底部tabber的值
        window.onscroll = () => {
            if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        }
    },
    unbind() {
        window.scroll = null
    }
})
 ```
# 过滤器
```js
<div class="actors">主演：{{ data.actors | actorsFilter }}</div>
Vue.filter('actorsFilter', (data) => {
    //把原始数组进行映射，将复杂对象映射另一个名字
    if (data == undefined) return '暂无主演'
    return (data.map(iter => iter.name).join(' '))

})

```
# 模糊查询
```js
 computed:{
    computedList(){
        return this.$store.state.cinemaList.filter(item=> item.name.
        toUpperCase().includes(this.value.toUpperCase())||item.address.
        toUpperCase().includes(this.value.toUpperCase()))
    }},
```

# 获取数据三种不同的情况
## 跨域的情况
## 请求头header
## action-origin *

# 多余数据小数点表示
 ` overflow: hidden; text-overflow: ellipsis; white-space: nowrap; `


# betterScroll 
  一个插件 下载` cnpm i --save better-scroll` 

# vuex 
## 1.注意事项
vuex 默认管理在内存，一刷新页面，公共状态消失  使用每次更新后恢复默认原来的  vuex如何持久化 
    持久化引入vuex-persistedstate
    ```js
    plugins: [createPersistedState({
    reducer:(state)=>{
      return{
        //需要持久化的部分，没有resucer就是所有的都存储了
      cityId:state.cityId,
      cityName:state.cityName
      }
      }
      ``` 

## 2.vuex项目的应用
1. 非父子之间通信 
2. 后端数据的缓存快照，较少数据重复请求，减轻服务器压力

## vuex的使用
### 同步使用
    ```js
    export default new Vuex.Store({
        //公共状态，将公共用的东西保存，其余地方都可以用
        state:{   
        cityId:'110100',
        cityName:'北京'
        },
        //mutations用来对状态进行修改，到时候可以知道修改的地方  /共同管理和呗devtools监控
       mutations: {
    changeCityName(state, cityName) {
      console.log(cityName)
      state.cityName = cityName
    },
    changeCityId(state, cityId) {
      state.cityId = cityId
    },
    changeCinemaData(state, data) {
      state.cinemaList = data

    },
    clearCinemaList(state){
      state.cinemaList = []
    },
    show(state){
      state.isTabbarShow = true
    },
    hidden(state){
      state.isTabbarShow = false
    }

        }) 
     ```
    和 
    ```js
        this.$store.commit('changeCityName',item.name)  //触发事件，并把参数传过去
        this.$store.commit('changeCityId',item.cityId)
        this.$router.back()
        ```
### 异步使用
```js
actions: {
    getCinemaData(store, cityId) {
      return request({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=545491`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        },
        method: 'get'
      }).then(res => {
        console.log(res.data.data.cinemas)
        // store.state.cinemaList = res.data.data.cinemas
        // new BetterScroll('.box') //不能初始化过早
        store.commit('changeCinemaData', res.data.data.cinemas)
      })
  }
    }


```

和 
```js
this.$store.dispatch('getCinemaData', this.cityId)
```
