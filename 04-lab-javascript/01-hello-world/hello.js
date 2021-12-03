
const hello = "hello wolrd!!";

console.log(hello);

// document.getElementById("ciao").textContent = hello;
const tagHello = document.getElementById("ciao");
tagHello.innerHTML = hello;


// document.querySelector("p.anno");   per prendere l'elemento tramite la classe restitusce il primo elemento che fa meth
// per selezionarli tutti si usa querySelectorAll();

const tagYear = document.getElementsByClassName("anno");
tagYear[0].innerHTML = "2021";


