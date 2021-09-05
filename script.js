const sketchpad_div = document.querySelector(".sketchpad");
const clear_btn = document.getElementById("clear");
function createDivs(size) {
    let i = 0;
    
    for(i; i< size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = "black";
        });
        sketchpad_div.appendChild(div);
    }
}

clear_btn.addEventListener("click", () => {
    const gridSize = prompt("The grid is going to be cleared, what is the next size n x n?");

    if (isNaN(gridSize) || gridSize === null || gridSize === "") {
        alert("Not a number")
        return;
    }

    if(gridSize > 100) {
        alert("Cannot be above 100")
        return;
    }

    sketchpad_div.innerHTML = "";

    sketchpad_div.setAttribute("style", `grid-template-columns: repeat(${gridSize}, 1fr)`);

    createDivs(gridSize);

    /*Array.from(divs).forEach(element => {
        element.style.backgroundColor = "white";
    });*/


});

createDivs(16);