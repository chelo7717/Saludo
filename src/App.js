const nombre= document.querySelector("#nombre-input");
const form = document.querySelector("saludador-form");
const p = document.querySelector("#respuesta");
const idioma= document.querySelector("#idioma-select");

form.addEventListener("submit",event =>{
    event.preventDefault();
    console.log("Entro a submit del form");
    console.log("idioma selecciona"+ idioma.value);
    p.innerHTML=saludar(nombre.value);
});


function saludar(nombre){
    return "Hola"+nombre;
}