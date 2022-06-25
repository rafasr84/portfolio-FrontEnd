
//funcion ue
//cambia el estilo del imput a visible
//toma el valor del texto del parrafo con id "text-trayectoria"
//lo muestra en consola

function cambiar_parrafo(){
    document.getElementById("edit-trayectoria").style.display="block";
let texto = document.getElementById("text-trayectoria").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-trayectoria").innerText=valor;
};

function logMessage (message) {
console.log(message + "<br>");}

//controla si se presionó un enter
let textarea=document.getElementById("edit-trayectoria")
textarea.addEventListener('keyup', (e) =>{ 
logMessage('Key "${e.key}" released [event: keyup]');
if (e.key=="Enter"){
    document.getElementById("edit-trayectoria").style.display="none"
        }
})

 //carga el contenido de un archivo de texto
 //y lo muestra en el párrafo

 function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`); // e.g my.png
    alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824

    let reader = new FileReader ();
        reader.readAsText(file);
        reader.onload = function(){
            console.log(reader.result);
            document.getElementById("text-trayectoria").innerText=reader.result;
        };
        reader.onerror = function(){
            console.log(reader.error);
        };
 }