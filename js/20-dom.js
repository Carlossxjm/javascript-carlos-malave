let element;

/*
element = document.head;
console.log(element);

element = document.body;
console.log(element);
const   = document.getElementsByClassName("title");
const n1 = document.getElementById("numero");
*/

/*
const title = document.querySelector(".title");
const n1 = document.getElementsByClassName("#numero");
const titleAll = title.querySelectorAll(`.title`);

console.log(n1);
console.log(title);
console.log(titleAll);

console.log(title.classList);
title.classList.add("red");
//title.classList.remove("red");
*/
/*
const imagen = document.querySelector(".foto")
console.log(imagen.src);
/*
imagen.src = "images/CLASE-6-CECILIA-.jpg";
console.log(imagen.scr)
*/

const nav = document.querySelector(".nav");
console.log(nav);

console.log(nav.childNodes);
console.log(nav.children);

const enlace = document.createElement("a");
enlace.textContent = "Academia en Digital";
enlace.href = "https://academiaendigital.com";
console.log(enlace);
document.write(enlace.textContent);
document.write("  ")
document.write(enlace.href);
