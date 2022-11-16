
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
                     his.innerText = result.innerText ;
                     result.innerText = eval(result.innerText);
                     history  += `
                        <li class="li">${his.innerText}<br>
                              <span>${result.innerText}</span>
                        </li>`
                     histroylist.innerHTML  = history;  
                     if(his.innerText.length > 12)  his.style.fontSize = "0.9em";  
                     break;
               default: result.innerText +=value;

            }
            text_scale(result,"==",11,"1.7em");
            text_scale(result,"==",12,"1.6em");
            text_scale(result,"==",13,"1.5em");
            text_scale(result,"==",14,"1.4em");
            text_scale(result,"==",15,"1.3em");
            text_scale(result,"<",10,"1.8em");

            
               
      });
      btn_history.addEventListener("click",()=> { turn_on_connect_block("none","none","block"); });

      btn_back.addEventListener("click",()=> { turn_on_connect_block("block","block","none"); });

      function turn_on_connect_block(block1,block2,block3){
            bloc_btn.style.display = block1;
            display.style.display = block2;
            bloc_history.style.display = block3;
      }

      function text_scale(tex , ravno ,numberr, em){

         if(tex.innerText.length ,ravno, numberr){
            result.style. fontSize =  em;
            result.style.lineHeight = "101px";
         }
      }
   }

