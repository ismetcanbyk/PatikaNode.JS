import { readFile,appendFile,writeFile,unlink } from 'node:fs';





//---------------Dosya Oluşturma----------------------

writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err)=>{
    if(err) throw err;
    console.log("Başarıyla oluşturuldu");
});







//---------------Dosya Okuma----------------------

readFile('employees.json','utf-8' ,(err, data) => {
    if (err) throw err;
    console.log(data);
  });







//---------------Dosya Değiştirme----------------------


appendFile('employees.json', '\n{"new name ":"can"}', 'utf8', (err)=>{
    if(err) throw err;
    console.log("dosya değiştirildi.");
});





//---------------Dosya Silme----------------------

unlink('employees.json', (err) => {
    if (err) throw err;
    console.log('Dosya başarıyla silindi.');
  });


  