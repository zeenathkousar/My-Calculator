
let input=document.getElementById('inputbox');
let btns=document.querySelectorAll('button');

let str="";
let arr=Array.from(btns);
var calculated=false;

arr.forEach((b) =>{
    b.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=') {
                str=eval(str).toFixed(1);
                input.value=str;
                calculated=true;
        }
        else if(e.target.innerHTML == 'C'){
            str= '';
            input.value=str;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            str=str.slice(0,-1);
            input.value=str;
        }
        else if(e.target.innerHTML == '+/-'){
            str=e.target.innerHTML;
            if(str<0){
                str=str* -1;
                input.value=str;
            }
            else if(str >0){
                str=Math.abs(str);
                input.value=str;

            }
            
        }
        else{
            if(calculated == true){
                str='';
                input.value=str;
                calculated=false;
            }
            str+=e.target.innerHTML;
            input.value=str;
        }
    })
})

