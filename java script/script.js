const elementos = document.querySelectorAll(".query-container");

let condition = [];

for (let i = 0; i < elementos.length; i++) {
    condition[i] = false;
    elementos[i].addEventListener("click", ()=>{
        if (condition[i]) {
            toUp(i);
        } else {
            toDown(i);
        }
    });
    elementos[i].addEventListener("mouseenter", ()=>{
        document.querySelectorAll("h3")[i].style.fontWeight = "200";
    });
    elementos[i].addEventListener("mouseleave", ()=>{
        if (condition[i]) {
            document.querySelectorAll("h3")[i].style.fontWeight = "900";
        } 
    });
}

const toDown = (id) => {
    const text = document.querySelectorAll(".item-container p")[id];
    text.style.display = "block";
    condition[id] = 1;
    const query = document.querySelectorAll("h3")[id];
    query.style.fontWeight = "900";
    const img = document.querySelectorAll(".query-container img")[id];
    img.style.rotate = "180deg";
}


const toUp = (id) => {
    const text = document.querySelectorAll(".item-container p")[id];
    text.style.display = "none";
    condition[id] = 0;
    const query = document.querySelectorAll("h3")[id];
    query.style.fontWeight = "200"
    const img = document.querySelectorAll(".query-container img")[id];
    img.style.rotate = "360deg";
}
