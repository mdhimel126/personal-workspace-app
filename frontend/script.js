
const btn1=document.querySelector("#tracking");
const dropBtn=document.querySelector("#droping");

btn1.addEventListener("click",()=>{
    window.location.href="tracking.html";
});

dropBtn.addEventListener("click",()=>{
    window.location.href="drop.html";
});

const menu=document.querySelector(".contact-menu");
const msgBtn=document.querySelector("#message-icon");

msgBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
});


