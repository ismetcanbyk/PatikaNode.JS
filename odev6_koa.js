import koa from 'koa';

const app = new koa;
const port = 3000;

app.use(ctx=>{
    const url = ctx.path;

    if (url==="/") {
        ctx.body = '<h1>Ana Sayfa</h1>';
    }else if (url === "/hakkimda") {
        ctx.body = "<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>";
    }else if (url === "/iletisim") {
        ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz</h1>";
    }

    

    
})

app.listen(port,()=>{
    console.log(`Server ${port} da çalıştı.`)
});
