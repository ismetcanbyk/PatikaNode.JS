// const promise = new Promise((resolve, reject) => {
//     resolve("İşlem Başarılı");
//     reject("Bağlantı hatası")
// })



// promise
//     .then(value => {
//         console.log(value);
//     })
//     .catch(err => {
//         console.log(err);
//     })


const test = ()=>{
    const pro1 = new Promise((resolve,reject)=>{
        //resolve("Tabi efendim ");
        reject("hata");
    })
    
    console.log("test fonk çalıştı");
    return pro1;
}




test()
    .then((value)=>{
        console.log("çalıştı laa");
        console.log(value);
    }).catch((err)=>{
        console.log(err)
    })


