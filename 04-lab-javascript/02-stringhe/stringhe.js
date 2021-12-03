const btn = document.querySelector("input");
const btn1 = document.querySelectorAll("input")[1];
const btn2 = document.querySelectorAll("input")[2];
const text = document.querySelector("div");


btn.addEventListener("click", function(){
    console.log("ho cliccato");
    text.textContent = text.textContent.toUpperCase();
});

btn1.addEventListener("click", function(){
    console.log("ho cliccato");
    text.textContent = text.textContent.toLowerCase();
});

btn2.addEventListener("click", function(){
    console.log("ho cliccato");
    let slide = text.textContent;
    text.textContent = slide.slice(5, slide.length) + slide.slice(0, 5);
});



