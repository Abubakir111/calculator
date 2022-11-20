
import { browser_version ,wit } from "./chrom_calc/index.js";


if(window.innerWidth > 500) browser_version();


if(window.innerWidth < 500) mobil_version();

   function mobil_version(){

   
         let bloc_btn = document.querySelector(".btnContent");
         let result = document.querySelector(".val");
         let his = document.querySelector(".history");
         let bloc_history = document.querySelector(".blcok_history");
         let histroylist = document.querySelector(".histroylist");
         let btn_history = document.querySelector(".btn_history ");
         let btn_clear = document.querySelector(".clearr");
         let h1 = document.querySelector(".h1");
         let btn_back = document.querySelector(".btnback");
         let display = document.querySelector(".display");
         let ul = document.querySelector(".ul");
         let resull ;
         let value;
         let res;
         let history = [];
        

         //   console.log();

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
                     if(result.innerText == "") result.innerText = "";
                   
                     else{   

                           his.innerText = result.innerText;
                           
                           resull =   result.innerText = eval(result.innerText);
                           history.push(`<li ><span>&bull;</span>${his.innerText}<br>= ${resull}</li>`);

                           for(let i = 0; i<history.length; i++){ 
                              ul.innerHTML += history[i];
                              history.length = "";
                      }

                     if(his.innerText.length > 12)  his.style.fontSize = "0.9em";
                  
                         }
                           break;
               case "+": if(result.innerText == "") result.innerText = "";  
                         else  result.innerText +=value;
                         break;
               case "-": if(result.innerText == "") result.innerText = "";  
                         else  result.innerText +=value;
                         break;
               case "*": if(result.innerText == "") result.innerText = "";  
                         else  result.innerText +=value;
                         break;
               case "/": if(result.innerText == "") result.innerText = "";  
                         else  result.innerText +=value;
                         break;
               case "+/_": if(result.innerText == "") result.innerText = "-";  
                         break;
               case "%": if(!result.innerText == "") result.innerText  =  eval(result.innerText)/100; 
                         else    result.innerText = "";
                         break;
               case ".": if(result.innerText == "") result.innerText = ""; 
                         else   result.innerText +=value;
                         break;
               default: result.innerText +=value;

            }
            text_scale(result,11,"1.7em");
            text_scale(result,12,"1.6em");
            text_scale(result,13,"1.5em");
            text_scale(result,14,"1.4em");
            text_scale(result,15,"1.3em");
            text_scale11(result,10,"1.8em");   
              
      });
      function text_scale(tex  ,numberr, em){

         if(tex.innerText.length  == numberr){
            result.style. fontSize =  em;
            result.style.lineHeight = "101px";
         }
      }
      function text_scale11(tex  ,numberr, em){

         if(tex.innerText.length  < numberr){
            result.style. fontSize =  em;
            result.style.lineHeight = "101px";
         }
      }
      btn_history.addEventListener("click",()=> { turn_on_connect_block("none","none","block"); });

      btn_back.addEventListener("click",()=> { turn_on_connect_block("block","block","none"); });

      function turn_on_connect_block(block1,block2,block3){
            bloc_btn.style.display = block1;
            display.style.display = block2;
            bloc_history.style.display = block3;
      }

      btn_clear.addEventListener("click",()=>{ ul.innerHTML = history.length = ""; });

   }

