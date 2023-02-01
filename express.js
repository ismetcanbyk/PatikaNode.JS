import express from 'express';

const exp = express();
const port = 3000;


exp.get('/',(req,res)=>{
    
    res.send("Hello ");
    res.end();
});



exp.listen(port,()=>{
    console.log(`Server ${port} portunda çalışıyor.`);
});