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
            break;
         case "AC":
            result.innerText = "";
            break;
         case "=":
            his.innerText = result.innerText ;
            result.innerText = eval(result.innerText);
            history  += `
               <li>${his.innerText}<br>
                     <span>${result.innerText}</span>
               </li>`
               histroylist.innerHTML  = history;      
               break;
         default:
            result.innerText +=value;

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

