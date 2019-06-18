window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden Vises");
    console.log("Click");
    document.querySelector("#mere").addEventListener("click", readMore);
    document.querySelector(".mere_2").addEventListener("click", readMore_2);
}

function readMore() {
    console.log("Read More");
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}

function readMore_2() {
    console.log("Read More");
    document.querySelector(".box_2").classList.toggle("stor");
    document.querySelector(".box_2").classList.toggle("lille");
}
