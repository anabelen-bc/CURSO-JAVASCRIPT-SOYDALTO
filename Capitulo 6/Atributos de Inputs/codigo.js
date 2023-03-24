const input = document.querySelector(".input-normal");

// document.write(input.className + "<br>");

// document.write(input.value + "<br>");

input.type = "number"; 

const input1 = document.querySelector(".input-normal1");

input1.type ="color";

const input2 = document.querySelector(".input-normal2");

input2.type ="range";

const input3 = document.querySelector(".input-normal3");

input3.accept = "image/png";

const input4 = document.querySelector(".input-normal4");

input4.setAttribute("minlenght","4");
input4.placeholder= "Como es tu nombre"
input4.required = "true";