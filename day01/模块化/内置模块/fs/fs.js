const fs=require('fs');
//读取文件
// fs.readFile('./input.txt')
//读取文件
function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./index.js',(err,data)=>{
            if(err) throw err;//因为读取出来的是二进制
            //.toString()转换为字符串
            let code=data.toString();
            //用正则匹配所有格式的console.log和所有的const,并替换成对应的
            let output= code.replace(/console.log\([a-z0-9'"]+\)/g,' ').replace(/const/g,'var');
            //把得出的结果交给下一个Promise
            resolve(output)
        })
    })
}


//写入文件
function writeFile(output){
    return new Promise((resolve,reject)=>{
        fs.writeFile('./output.js',output,(err)=>{
            if(err) throw err;
            console.log('写入成功');
            
        })
    })
}

;(async()=>{
    let output = await readFile()//等待readFile()执行完成之后再往下执行
    await writeFile(output);

})()