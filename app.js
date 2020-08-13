// app.js

const counter = document.querySelector('.app-value');
 
const activBtn = document.querySelector('.app-buttons');

let value = 0;

activBtn.addEventListener('click', (e)=>{

    let data = e.target.dataset.value;

    if(data == "decrease"){
        value --;   
        curColor(value);
    }else if(data == "reset"){
       value = 0
       curColor(value);
    }else if(data == "increase"){
        value ++;
        curColor(value);
    }

    counter.textContent = value;

})

let curColor = (value) =>{
    if(value < 0){
        counter.style.color = "#ff0202eb";
    }else if(value == 0){
        counter.style.color = "#232323eb";
    }else if(value > 0){
        counter.style.color = "#2efd05eb";
    }
}