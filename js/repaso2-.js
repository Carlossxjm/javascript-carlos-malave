/*function displayDate(){
    document.getElementById("fecha").innerHTML = Date();
}*/

 
//Funcion para Check de cookies

function checkCookies(){
    let Text = "";
    if (navigator.cookieEnabled == true){
        text = "Cookies are enabled.";
    } else{
        text = "Cookies are not enabled."
    }
    document.getElementById("demo").innerHTML = text;
}

function toLowerCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toLowerCase();
}

function mOver(obj) {
    obj.innerHTML = "Quiere";
    obj.classList.remove("color2");
    obj.classList.add("color");
} 

function mOut(obj) {
    obj.innerHTML = "Trabajar"
    obj.classList.remove("color");
    obj.classList.add("color2");
} 

// EVENT LISTENER

document.getElementById("myButton").addEventListener("click", displayDate);

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myButton2").addEventListener("click", function(){
    alert("no money money");
});
document.getElementById("myButton3").addEventListener("click", function(){
   var n1 = parseInt(prompt("Introduce un numero"))
   var n2 = parseInt(prompt("Introduce otro numero"))
   document.write(n1 + n2);
});

var x = document.getElementById("myButton4");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction(){
    document.getElementById("demo").innerHTML += "Mouse Over!<br>";
}
function mySecondFunction(){
    document.getElementById("demo").innerHTML += "click!<br>";
}
function myThirdFunction(){
    document.getElementById("demo").innerHTML += "Mouse Out!<br>";
}
