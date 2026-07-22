
const btn1=document.querySelector("#tracking");

btn1.addEventListener("click",()=>{
    window.location.href="tracking.html";
});

const menu=document.querySelector(".contact-menu");
const msgBtn=document.querySelector("#message-icon");

msgBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

