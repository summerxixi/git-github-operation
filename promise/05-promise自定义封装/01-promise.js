function Promise(executor) {
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callback = []
    //保存实例对象this的值,由于function里的this指向全局对象
    const self = this
    function resolve(data) {
        // 1.修改对象状态 promiseState  给实例对象添加属性。
        //为了防止同时用resolve和reject和被覆盖，加上一个判断(自己的promise是先执行谁就结束)
        if (self.PromiseState !== 'pending') return
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        // if(self.callback.onResolved) 
        // {
        //     self.callback.onResolved(data)
        // }
        self.callback.forEach(element => {
            element.onResolved(data)
        });
        //2.设置对象值
    }
    //
    function reject(data) {
        if (self.PromiseState !== 'pending') return
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        //if('pending)
        // if(self.callback.onRejected) 
        // {
        //     self.callback.onRejected(data)
        // }
        self.callback.forEach(element => {
            element.onRejected(data)
        });

    }
    try {
        executor(resolve, reject) //同步调用的执行器函数

    } catch (e) {
        //修改promise的状态 为失败,throw抛出错误
        reject(e)

    }
}
//let callback = {}
Promise.prototype.then = function (onResolved, onRejected) {
    return new Promise((resolve, reject) => {
        //调用回调函数 这里的this是已经实例化后的，指向的是Promise
        if (this.PromiseState === 'fulfilled') {
            //获取回调函数的执行结果
            try {
                let res = onResolved(this.PromiseResult)
                if (res instanceof Promise) {
                    res.then(v => {
                        resolve(v)
                    }, r => {
                        reject(r)
                    })
                } else {
                    resolve(res)

                }
            } catch (error) {
                reject(error)

            }

        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)
        }
        //判断异步时Pending状态
        if (this.PromiseState === 'pending') {
            this.callback.push({
                onRejected: onRejected,
                onResolved: onResolved
                //简写
                // onRejected,onResolved
            })
        }
    })
}