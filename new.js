var data=0;
document.getElementById("root").innerText=data;
function decrement(){
   data=data-1;
   document.getElementById("root").innerText=data;

}
function increment(){
   data=data+1;
   document.getElementById("root").innerText=data;

}
let img=document.querySelector('img');
let btn1=document.querySelector('#w2');
// let btn2=document.querySelector('#w3');
// let btn3=document.querySelector('#w4');
btn1.addEventListener('click', ()=>{
   img.src="Images/AKS-img.png"
   $('#w2').css('background-color', '#91a832')
   $('#w2').css('color', 'white')

})