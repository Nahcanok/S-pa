const http = require('http');
//创建一个服务器
http.createServer((request,response)=>{
    console.log(request.url);

    response.setHeader('Access-Control-Allow-Origin','*')
    
    response.setHeader('cache-control','max-age=60')
    //设置加载缓存的区间[0,60]
    response.setHeader('name','yyy')

    response.write(JSON.stringify({
        name:'yyy',
        age:18       
    }))
    response.end()
}).listen(23456)
console.log('启动服务器');
