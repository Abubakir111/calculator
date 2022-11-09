let nuber = ["1","2","3","4","5","6","7","8","0","0",".",];
let addition_and_subtraction = ["+","-","/","*"];
let tim_number = "";
let a =[];
let b;
let history = document.querySelector(".history");
let btnContent = document.querySelector(".btnContent");
let display = document.querySelector(".val");
let target;
 let tim_mas;

btnContent.addEventListener("click",(event)=>{ 

  target = event.target.dataset.type;
  
   if(["1","2","3","4","5","6","7","8","0","0",".",].includes(target)){

    if(target == "." && tim_number ==""){

          tim_number = tim_number + "0.";
          display.innerHTML = tim_number;
          console.log(tim_number);

   }else if(target == "." && /\./.test(tim_number) && !tim_number == ""){

          tim_number = tim_number ;
        //  console.l og(tim_number);
      }else if( a== "") {

          tim_number = tim_number + target;
          console.log(tim_number);
          display.innerHTML = tim_number;
      }

   } 
   operation(target);
   the_second_number(target);
   mathematical_result (target);
   delet (target);
   });

function  operation(data){
if(["+","-","/","*"].includes(data) && !tim_number == ""){
  display.innerHTML += data;

  a.push(tim_number);
  tim_number = "";
  tim_number = tim_number + data;
  a.push(tim_number);
  console.log(a);
  for(let i = 0; i < a.length; i++){
    history.innerHTML = a[0]+a[1];  
  }
  tim_number = "";
  console.log("this" ,tim_number);
}

}
function the_second_number(data){
 if(target >= 0){
  for(let i = 0; i < a.length; i++){
    if( !a[1] == ""){

      tim_number =  tim_number + data;
      display.innerHTML =  tim_number;
      console.log(tim_number);
      break;
    }

  }
 }
 }

 function mathematical_result (data){
  if (data == "="){
    for(i = 0;  i < a.length; i++){
     
      if(!a[0]== "" && !a[1] == ""){
        
        a.push(tim_number);
        history.innerHTML += tim_number;
        
        for(let i = 0; i < a.length; i++){
            
          switch(a[1]){
           case "+": b = parseFloat(a[0]) + parseFloat(a[2]);
                   display.innerHTML = b;
                   break;
           case "-":b = parseFloat(a[0]) - parseFloat(a[2]); 
                    display.innerHTML = b;
                    break;
           case "*": b = parseFloat(a[0]) * parseFloat(a[2]);
                    display.innerHTML = b;
                    break;
            case "/":b = parseFloat(a[0]) / parseFloat(a[2]); 
                     display.innerHTML = b;
                     break;                
          }
        }
        console.log(a);
        break;

      }
    }
  }
 }

 function delet (data){
   if(data == "delete"){
   
     if(!tim_number == ""){
     
      tim_number = tim_number.substring(0,tim_number.length-1);
      display.innerHTML = tim_number;

      }else if(data == "delete"){

              for(let i = 0; i < a.length; i ++){
                 
               if(a.length == 1 ){
                 
                a.splice(0);
                history.innerHTML = a;
                console.log(a);

              } else   if(!a[0] == "" && !a[1] == ""){
                  a.splice(1);
                  console.log(a);
                  history.innerHTML = a;
                  

                }
                else if(!a[0] == "" && !a[1] == "" && !a[3] == ""){
                   a.splice(2);
                }
              }
      }
    
   }
 
  }