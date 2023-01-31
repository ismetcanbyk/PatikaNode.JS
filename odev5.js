import http from 'http';

const server = http.createServer((req,res)=>{
    const url = req.url;
    
    console.log("İstek yollandı.");

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("<h2>Home Sayfasına Hoşgeldiniz. </h2>");
    }else if(url === "/hakkimda"){
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("<h2>Hakkımda Sayfasına Hoşgeldiniz. </h2>");
    }else if(url === "/iletisim"){
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("<h2>İletişim Sayfasına Hoşgeldiniz. </h2>");
    }else{
        res.writeHead(404,{"Content-Type": "text/html;charset=utf-8" });
        res.write("<h2>Sayfa Bulunamadı ! </h2>");
    }



    res.end();
})




const port = 5000;

server.listen(port,()=>{
    console.log(`Sunucu ${port} a bağlandı .`);
})