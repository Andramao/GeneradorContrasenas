let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let boton1 = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
const password = "";

function generar(){

    let numeroDigitado = cantidad.valueAsNumber;
     
    if (numeroDigitado < 8){
        alert("La cantidad de caracteres debe ser mayor o igual que 8");
        contrasena.value = " "
    }

    else{
        let password = "";
        for (let i = 0; i < numeroDigitado; i++) {
        const caracterAleatorio =  caracteres[Math.floor(Math.random() * caracteres.length)];
       

        password += caracterAleatorio;
        console.log(password);
        contrasena.value = password;
        }
    }
    

}
limpiar.addEventListener("click", function() {
    
    contrasena.value = "";
  });
    
















