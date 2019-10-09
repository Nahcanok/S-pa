const request = require('request')
const cheerio = require('cheerio');

//小爬虫
var option={
    url:"http://www.umei.cc/p/gaoqing/cn/",
    headers:{
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive'
    }
};

request(option,function(error,response,body){
    if(!error&&response.statusCode == 200){
        var $ = cheerio.load(body,{
            ignoreWhitespace:true,
            xmlMode:true
        });

        // var shopInfo = {
        //     pageNo:option.url.match(/g\d+p(\d+)/)[1],
        //     pageURL:option.url,
        //     info:[]
        // ;
        var shopLists=[];
        var shopList = $('img')
        shopList.each(function(no,shop){
            let info={};
            info.url=$(shop).attr('src');
            shopLists.push(info);
        });
        console.log(shopLists);
    }
})