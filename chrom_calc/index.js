 function browser_version(){
let calc = document.querySelector(".calc");
let bloc_btn = document.querySelector(".btnContent");
let result = document.querySelector(".val");
let his = document.querySelector(".history");
let AC = document.querySelector(".AC");
let C = document.querySelector(".C");
AC.innerText = "C";
C.innerText = "%";
let value;
let offsetX,offsetY;
 
calc.addEventListener("dragstart",(event)=>{
  
        console.log(event.offsetX,event.offsetY);
         offsetX = event.offsetX;
         offsetY = event.offsetY;
    
  });

calc.addEventListener("dragend",(event)=>{
    if(event.target.classList.contains("btn")){
        return;
    }else{

        console.log(event.pageX,event.pageY);
        calc.style.top = (event.pageY - offsetY) + "px";
        calc.style.left = (event.pageX - offsetX) + "px";
    }
});
        bloc_btn.addEventListener("click",(event)=>{
            if(!event.target.classList.contains("btn")) return;
            value = event.target.innerText;
          
            switch(value){
                case "C":
                    result.innerText =  result.innerText.substring(0,result.innerText.length-1);
                    result.innerText = result.innerText;
                
                    if(result.innerText == "" && !his.innerText == ""){

                            result.innerText = his.innerText;
                            his.innerText = "";

                        }
                    break;
                case "=":
                    if(result.innerText == "")  result.innerText == "";
                    else{

                                                                            
                        if(his.innerText.length > 12) his.style.fontSize = "0.9em";
                    }
                    break;
                case "+":
                    if(result.innerText == "") result.innerText = "";
                    else result.innerText +=value;
                    break;
                case "-":
                    if(result.innerText == "") result.innerText = "";
                    else result.innerText +=value;
                    break;
                case "/":
                    if(result.innerText == "") result.innerText = "";
                    else result.innerText +=value;
                    break;  
                case "*":
                    if(result.innerText == "") result.innerText = "";
                    else result.innerText +=value;
                    break;
                case "%":
                    if(result.innerText == "") result.innerText = "";
                    else  result.innerText = eval(result.innerText)/100;
        
                    break;
                case ".":
                    if(result.innerText == "") result.innerText == "";
                    else result.innerText +=value;
                    break;
                case "+/_":
                    if(result.innerText == "") result.innerText = "-";
                break;
                default: result.innerText +=value;
        
            }
            text_scal1(result,11,"1.7em");
            text_scal1(result,12,"1.6em");
            text_scal1(result,13,"1.5em");
            text_scal1(result,14,"1.4em");
            text_scal1(result,15,"1.3em");
            text_scal1(result,16,"1.2em");
            text_scal2(result,10,"1.8em");   
            
        });
        function text_scal1(tex1 ,numberr1, em1){

            if(tex1.innerText.length == numberr1){

                result.style. fontSize =  em1;
                result.style.lineHeight = "45px";
            }
        }
        function text_scal2(tex1 ,numberr1, em1){

            if(tex1.innerText.length < numberr1){

                result.style. fontSize =  em1;
                result.style.lineHeight = "45px";
            }

        }
        fun
    
    }

function wit() { let fun ="?????????????? 2";}
                
 export{browser_version , wit};