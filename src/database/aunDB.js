//สร้าง object ชื่อ aun แล้วเก็บ property เป็น ชื่อ อายุ และ ส่วนสูง ตามลำดับ
let i = 0;


const aun = {
    name : "aun",
    age : 31,
    height : 170,
    loop : setInterval(() => {
        console.log(i)
        
    }, 1000)
}

//เป็นการexport object aun ออกไปเพื่อให้สามารถเรียกใช้งานจากภายนอกได้ โดยการระบุตำแหน่งไฟล์นี้ในไฟล์อื่น ตัวอย่างการเรียกใช้ดูได้จาก ./controller/aun-controller.js
module.exports = aun;