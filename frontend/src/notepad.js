 const noteText=document.querySelector("#note-text")

        document.addEventListener("DOMContentLoaded",()=>{
            const saveNote=localStorage.getItem("alamin_himel_notepad");
            if(saveNote){
            noteText.value=saveNote;
            }
        });

        noteText.addEventListener("input",()=>{
            localStorage.setItem("alamin_himel_notepad",noteText.value);
        });