let btndis =  ["0","1","2","3","4","5","6","7","8","9","."];
let action = ["-","+","x","/"];
let sum ;
let a = "";
let b = "";
let sign = "";
let finish = "=";
let display = document.querySelector(".val");
let btnClear = document.querySelector(".ac");
let btnContent = document.querySelector(".btnContent");

btnClear.addEventListener("click",()=>cleardisplay());

function cleardisplay(){

     a = "";
     b = "";
     sign = ""; 
     display.textContent = "";

}
btnContent.addEventListener("click",(event)=>{
    if(!event.target.classList.contains("btn")) return;
    if(event.target.classList.contains("ac")) return;
    display.textContent = "";
    const key = event.target.textContent;

    if(btndis.includes(key)){

        if(b == "" && sign == ""){

            a += key;
            console.log("a-",a); 
            display.textContent = a;

        }else if(!sign == "" && !a == ""){
  
           b +=key;
           console.log(" b-",b);
           display.textContent = b;
       
        } 
 
    }
    if(action.includes(key)){
    
          sign = key;
          console.log("sum",sign);
          display.textContent = sign;
          return;
    }
    if(finish.includes(key)){
 
       if(key == "="){

            if(!a == "" && b == "" && sign == ""){
 
                 a =   parseInt(a) + parseInt(a);
                 display.textContent = a;
                

            }
            if(!a =="" && !b == "" && !sign == ""){
                 
                switch(sign){

                    case "-": a = a-b;
                             display.textContent = a;
                             b = "";
                             break;

                    case "+": a = parseInt(a) + parseInt(b);
                              display.textContent = a;
                              b = "";
                              console.log(b);
                              break;

                    case "x": a = parseInt(a) * parseInt(b);
                              display.textContent = a;
                              b = "";
                              break;

                    case "/": a = parseInt(a)/parseInt(b);
                             display.textContent = a;
                             b = "";
                             break;

                }

            }
        }
    }
    if(!finish == "" && !sign == ""){
        
    }
  
});
