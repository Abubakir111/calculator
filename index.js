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
               if(his.innerText.length > 12){
                his.style.fontSize = "0.9em";
               }   
               break;
         default:
            result.innerText +=value;

    }
       if(result.innerText.length == 14){
          result.style. fontSize =  "1.7em";
          result.style.lineHeight = "45px";
       }
       if(result.innerText.length == 15){
         result.style. fontSize =  "1.6em";
         result.style.lineHeight = "45px";
        }
        if(result.innerText.length == 16){
         result.style. fontSize =  "1.5em";
         result.style.lineHeight = "45px";
        }
        if(result.innerText.length == 17){
         result.style. fontSize =  "1.4em";
         result.style.lineHeight = "45px";
        }
        if(result.innerText.length == 18){
         result.style. fontSize =  "1.3em";
         result.style.lineHeight = "45px";
        }
        if(result.innerText.length == 19){
         result.style. fontSize =  "1.2em";
         result.style.lineHeight = "45px";
        }
       
        
         if(result.innerText.length == 13){
         display.style.color = "#fff";
         result.style. fontSize =  "1.8em";
        }
     
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

 
  

