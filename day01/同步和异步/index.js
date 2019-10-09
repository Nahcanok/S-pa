function a() {
    console.log("a");

}

function b(callback) {
    //假如看到callback，一般就是异步
    //如果异步没有callback将会没有意义
    setTimeout(() => {
        console.log("b");
        callback()
        setTimeout(() => {
            console.log("c");
            setTimeout(() => {
                console.log("d");

            }, 1000)

        }, 1000)
    }, 1000)
}
b()
a()