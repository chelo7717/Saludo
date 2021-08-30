const nombre= document.querySelector("#nombre-input");
const edad= document.querySelector("#edad-input");;
const genero = document.querySelector("genero-select");
const p = document.querySelector("#respuesta");
const idioma= document.querySelector("#idioma-select");
const form = document.querySelector("saludador-form");

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const edad_int =parseInt(edad.value);

    let mensaje="";
    if(idioma.value=== "espanol"){
        mensaje="Hola";
    }else{
        mensaje="Hello";
    }
    if(edad_int>30){
        if(genero.value=== "Masculino"){
            mensaje += " Sr ";
        }else{
            mensaje += " Sra ";
        }
    }
    mensaje += " " + nombre.value;
    alert(mensaje);
});