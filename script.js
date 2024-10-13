const forTest1 = document.getElementById("forTest1");
forTest1.innerHTML = "hi";



function HideIt2 () {
    const forTest2 = document.getElementById("forTest2");
    forTest2.innerHTML = "ok";
}




const forButtonTest3 = document.getElementById("forButtonTest3");
function HideIt3 () {
    const forTest3 = document.getElementById("forTest3");
    forTest3.innerHTML = "ok2";
}

forButtonTest3.onclick = HideIt3;




const forTest4 = document.getElementById("forTest4");
function HideIt4 () {
    const forTest4 = document.getElementById("forTest4");
    forTest4.innerHTML = "ok2";
}

forTest4.onclick = HideIt4;



const forTest5 = document.getElementById("forTest5");
function HideIt5 () {
    const forTest5 = document.getElementById("forTest5");
    forTest5.style.backgroundColor = "green";
}

forTest5.onclick = HideIt5;




const forButtonTest6 = document.getElementById("forButtonTest6");
function HideIt6 () {
    const forTest6 = document.getElementById("forTest6");
    forTest6.style.backgroundColor = "red";
}

forButtonTest6.onclick = HideIt6;




// const forButtonTest7 = document.getElementById("forButtonTest7");
// function HideIt7 () {
//     const forTest7 = document.getElementById("forTest7");
//     forTest7.style.grid-template-areas =
//     "header header header header header";
//     "main main main main main"
//     "footer footer footer footer footer";
//     return forTest7;
// }

// forButtonTest7.onclick = HideIt7;





// To change style file.
const forButtonTest8 = document.getElementById("forButtonTest8");
function HideIt8 () {
    const forTest8 = document.getElementById("forTest8");
    forTest8.setAttribute("href", "style.css");
    const forTest81 = document.getElementById("forTest81");
    forTest81.innerHTML = "";
}

forButtonTest8.onclick = HideIt8;