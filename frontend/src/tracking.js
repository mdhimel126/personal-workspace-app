 const trac_save=document.querySelector("#trac-save");

        trac_save.addEventListener("click",()=>{

            const morningHour=document.querySelector("input[name='morning']:checked");
            const afternoonHour=document.querySelector("input[name='afternoon']:checked");
            const nightHour=document.querySelector("input[name='night']:checked");

            const dateInput=document.querySelector("#date");
            const currentDate=dateInput.value;

            const remarkInput=document.querySelector("#remark");
            const remark=remarkInput.value;
            

            if(!morningHour || !afternoonHour || !nightHour || !currentDate){
                alery("Please select all feild");
                return;
            }

            const valueOfMorning=Number(morningHour.value);
            const valueOfAfternoon=Number(afternoonHour.value);
            const valueOfNight=Number(nightHour.value);
            const totalValue=(valueOfMorning+valueOfAfternoon+valueOfNight);


            const routine={
            date:currentDate,  
            remark:remark,  
            morning:valueOfMorning,
            afternoon:valueOfAfternoon,
            night:valueOfNight,
            total:totalValue
           };

            fetch("https://personal-workspace-app-1.onrender.com/api/routines", {           
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(routine)

           })
           .then(res => res.json())
           .then (data =>{
            console.log(data);
            alert("Routine Saved Successfully");
           })
           .catch(error=>{
            console.log(error);
           })
       



        });