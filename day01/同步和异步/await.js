//承诺1
function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a')
            resolve()
        }, 1000)
    })

}
//承诺2
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b')
            resolve()
        }, 2000)
    })
}
//承诺3
function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c')
            resolve()
        }, 500)
    })
}
console.log(0);
;(async () => {
    // a执行完再执行b,b执行完再执行c
    await a();
    await b();
    await c();
})()
console.log(1)