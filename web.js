// 1.Mengambil data dari index.html
const input = document.querySelector(".navigasi input");
const data = document.querySelector(".navigasi .list");
const span = document.querySelector(".navigasi span")
        
//2.Jika sudah diambil maka kita membuat sebuah fungsi didalamnya.
input.addEventListener("click",function(){
    data.classList.toggle("geser");
})