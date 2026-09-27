 const random=Math.floor(Math.random()*10)+1;

       const btn=document.querySelector(".btn");
       const my_value=document.querySelector(".my-value");
       const result=document.querySelector(".result");
       const anss_btn=document.querySelector(".anss-btn")
       const show_result=document.querySelector(".show-result");


       anss_btn.addEventListener("click",()=>{
         show_result.textContent=`The Random value is ${random}`
       })


       btn.addEventListener("click",()=>{
        
        const inpt=document.querySelector(".inpt");
        const val=Number(inpt.value);

        if(!val){
            result.textContent="Please enter a number first";
            return;
        }
        
       
        if(val ===random){
          my_value.textContent=`Your value is ${val}`;
          result.textContent="** Congratulattionss You are correct **";

        }else{
            my_value.textContent=`Your value is ${val}`;
            result.textContent="Try Again";
            inpt.value="";
        }
    

       });