 const drop_save=document.querySelector("#drop-save");
      const drop_file=document.querySelector("#drop-file");
      const drop_text=document.querySelector("#drop-text");

      drop_save.addEventListener("click",async ()=>{
        const file=drop_file.files[0];
        const text=drop_text.value;
       
        if(!file && !text){
            alert("Select at least file or text");
            return;
        }


        const formData=new FormData();

        if(file){
        formData.append("file",file);
        }
        if(text){
            formData.append("text",text);
        }

        try{

        const response=await fetch("https://personal-workspace-app-1.onrender.com/api/upload",{
            method:"POST",
            body:formData
        });
        
        const data=await response.json();

        if(response.ok){
            alert(data.message || "upload successfully");
            drop_file.value="";
            drop_text.value="";

        }else{
            alert("Upload failed"+(data.message || "Unknown error"))
        }
      

        
    }catch(error){
        console.log(error);
        alert("Something went wrong");
    }
});