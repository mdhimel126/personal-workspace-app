    const btn1=document.querySelector("#tracking");
    const dropBtn=document.querySelector("#droping");
    const aboutBtn=document.querySelector("#about");
    const gameBtn=document.querySelector("#game");
    const notepadBtn=document.querySelector("#notepad");
    const dataBtn=document.querySelector("#data"); 
    const dataPassword=document.querySelector('input[name="password"]');


    btn1.addEventListener("click",()=>{
        window.location.href="tracking.html";
    });

    dropBtn.addEventListener("click",()=>{
        window.location.href="drop.html";
    });

    aboutBtn.addEventListener("click",()=>{
        window.location.href="about.html";
    });

    gameBtn.addEventListener("click",()=>{
        window.location.href="game.html";
    });

    notepadBtn.addEventListener("click",()=>{
        window.location.href="notepad.html";
    });

    dataBtn.addEventListener("click",()=>{
        const pass=dataPassword.value.trim();
        if(pass==""){
             alert("Enter password");
        }else if(dataPassword.value != "himelxyz"){
            alert("Password didn't matched");
        }else if(dataPassword.value == "himelxyz"){
            window.location.href="data.html";
        }
    });

    const menu=document.querySelector(".contact-menu");
    const msgBtn=document.querySelector("#message-icon");

    msgBtn.addEventListener("click",()=>{
        menu.classList.toggle("active");
    });


