const form=document.getElementById("form");
const input=document.getElementById("nombre");
const msg=document.getElementById("mensaje");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    try {
        if(input.value.trim()===""){
            throw new Error ("El nombre no puede estar vacío")
        }
     msg.textContent=`Bienvenido usuario: ${input.value} a tu sistema de inscripciones`
    msg.style.color="green";
    }catch(error){
        msg.textContent=`Ocurrio un erorr: ${error.message}`;
        msg.style.color="red";

    }
   
}

)