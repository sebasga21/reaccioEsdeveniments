//Ejercicio: setTimeOut y setInterval
var santa = document.querySelector(".santa");

setTimeout(function()
{
    santa.classList.add("animationSanta");
}, 2000);


//Ejercicio: addEventListener()
var textoSaludo = document.getElementById("textoSaludo");


textoSaludo.addEventListener("click", function()
{
    var nombre = prompt("Enter your name please:");

    if(nombre != null)
    {
        textoSaludo.innerHTML = "Oh! " + nombre + ", nice name, welcome to this page, I hope you like it!";
    }
    else
    {
        textoSaludo.innerHTML = "Oh! You don't want to enter your name but it doesn't matter, I hope you like the page!";
    }
})


//Ejercicio: onload()
var body = document.querySelector(".cuerpo");

function cambiarColor()
{
    body.style.backgroundColor = "whitesmoke";
}


//Ejercicio: imagen y botón con la misma función
var textoImagen = document.getElementById("textoImagen");
var imagen = document.getElementById("imagen");

function hanHechoClick(e)
{
    console.log(e.id);
    if(e.id === "imagen")
    {
        alert("Oh you clicked the image!");
    }
    else if(e.id === "btnText")
    {
        alert("Oh you clicked the text!");
    }
}


//Ejercicio: lista interactiva
var rows = document.querySelectorAll("#tablaJugadores tr");
var jugador;

function agregarFila()
{
    var nombre = document.getElementById("nombreJugador").value;
    var inputNombre = document.getElementById("nombreJugador");
    var edad = document.getElementById("edad").value;
    var inputEdad = document.getElementById("edad");
    var equipo = document.getElementById("equipo").value;
    var inputEquipo = document.getElementById("equipo");

    if(nombre == "" || edad == "" || equipo == "")
    {
        alert("If you don't complete all the inputs it will not work!");
    }
    else
    {
        document.getElementById("tablaJugadores").insertRow(-1).innerHTML = "<td>" + nombre + "</td><td>" + edad + "</td><td>" + equipo + "</td>";
        rows = document.querySelectorAll("#tablaJugadores tr");

        var lastrow = rows[rows.length - 1];
        lastrow.style.cursor = "pointer";
        lastrow.classList.add("unselected");
        lastrow.addEventListener('click', function() 
        {
            for (const row of rows) 
            {
                row.classList.remove("highlight");
            }
        
            this.className += ' highlight';

            jugador = "Name: " + this.cells[0].innerHTML + "\nAge: " + 
            this.cells[1].innerHTML + "\nTeam: " + this.cells[2].innerHTML;
            console.log(jugador);

            alert("You have chosen the following player: \n\n" + jugador);
        }, false);

        rows = document.querySelectorAll("#tablaJugadores tr");

        inputNombre.value = "";
        inputEdad.value = "";
        inputEquipo.value = "";
    }
}

for (var i = 0; i < rows.length; i++) 
{
    rows[i+1].addEventListener('click', function() 
    {
        for (const row of rows) 
        {
            row.classList.remove("highlight");
        }
    
        this.className += ' highlight';

        jugador = "Name: " + this.cells[0].innerHTML + "\nAge: " + 
        this.cells[1].innerHTML + "\nTeam: " + this.cells[2].innerHTML;
        console.log(jugador);

        alert("You have chosen the following player: \n\n" + jugador);
    }, false);
}