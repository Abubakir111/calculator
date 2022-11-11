let bloc_btn = document.querySelector(".btnContent");
let result = document.querySelector(".val");
let his = document.querySelector(".history");
let value;
let test;

bloc_btn.addEventListener("click",(event)=>{
value = event.target.innerText;
    switch(value){
      case "c":
      result.innerText =  result.innerText.substring(0,result.innerText.length-1);
      result.innerText = result.innerText;
        break;
        case "ac":
          result.innerText = "";
          break;
      case "=":
        his.innerText = result.innerText ;
        result.innerText = eval(result.innerText);
        break;
     
        default:
          result.innerText +=value;

    }
    
});