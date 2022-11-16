
import { browser_version ,wit } from "./chrom_calc/index.js";


if(window.innerWidth > 500) browser_version();


if(window.innerWidth < 500) mobil_version();

   function mobil_version(){

   
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
      btn_history.addEventListener("click",()=>{

            bloc_btn.style.display = "none";
            display.style.display = "none";
            histroylist.style.display = "block";
            h1.style.display =  "block";
            btn_back.style.display = "block";
         
      });
      btn_back.addEventListener("click",()=>{

            bloc_btn.style.display = "block";
            display.style.display = "block";
            histroylist.style.display = "none";
            h1.style.display =  "none";
            btn_back.style.display = "none";
      });

      function text_scale(tex , ravno ,numberr, em){

         if(tex.innerText.length ,ravno, numberr){
            
            result.style.color = "red";
            result.style. fontSize =  em;
            result.style.lineHeight = "101px";
         }
      }
   }

