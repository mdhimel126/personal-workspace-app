 const trac_save=document.querySelector("#trac-save");

        trac_save.addEventListener("click",()=>{

            const morningHour=document.querySelector("input[name='morning']:checked");
            const afternoonHour=document.querySelector("input[name='afternoon']:checked");
            const nightHour=document.querySelector("input[name='night']:checked");

            const morningHalf=document.querySelector("#morning-half");
            const afternoonHalf=document.querySelector("#afternoon-half");
            const nightHalf=document.querySelector("#night-half");

            const dateInput=document.querySelector("#date");
            const currentDate=dateInput.value;

            const remarkInput=document.querySelector("#remark");
            const remark=remarkInput.value;
            
            if(!currentDate){
                alert("please give a current date");
            }


            const valueOfMorning=(morningHour?Number(morningHour.value):0)+(morningHalf.checked?0.5:0);
            const valueOfAfternoon=(afternoonHour?Number(afternoonHour.value):0)+(afternoonHalf.checked?0.5:0);
            const valueOfNight=(nightHour?Number(nightHour.value):0)+(nightHalf.checked?0.5:0);
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