const icono = document.querySelector(".fa-align-right");
const links = document.querySelector(".links-js");

let seleccionar = ()=>{
	links.classList.toggle("true")
	console.log(links)
}

let funcion = icono.addEventListener("click", seleccionar);

if