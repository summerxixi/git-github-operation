promise封装函数
参数
返回对象是promise return new promise((resolve,reject)=>{

}) 返回promise对象可直接用.then（success=>{}，err=>{})

```js
function sendAjax(url){
    return new Promise((resolve,reject)=>{
        if(success) {resolve(params)} //成功结果
        else{reject(params)}
    })
}
ssendAjax(url).then(success=>{},err=>{})
```