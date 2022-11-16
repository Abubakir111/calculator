  
  
 function browser_version(){

let bloc_btn = document.querySelector(".btnContent");
let result = document.querySelector(".val");
let his = document.querySelector(".history");
let histroylist = document.querySelector(".histroylist");
let btn_history = document.querySelector(".btn_history ");
let h1 = document.querySelector(".h1");
let btn_back = document.querySelector(".btnback");
let display = document.querySelector(".display");
let value;
let history = "";

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
                    his.style.color = "rgb(143, 139, 139)"
                    his.innerText = result.innerText ;
                    result.innerText = eval(result.innerText);
                    history  += `
                        <li class="li">${his.innerText}<br>
                            <span>${result.innerText}</span>
                        </li>`
                    histroylist.innerHTML  = history;   
                    if(his.innerText.length > 12) his.style.fontSize = "0.9em";
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
    }

function wit() { alert("функция 2");}
                
 export{browser_version , wit};