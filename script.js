let addSentence = document.getElementById("p-button");
let addImage = document.getElementById("img-button"); 

let p_div = document.getElementById("p-div");
let img_div = document.getElementById("img-div")

function sentence(){
    img_div.style.display = 'none';
    p_div.style.display = 'block';
    var newParagraph = document.createElement ("p");
    newParagraph.innerHTML = 'Hello World';
    p_div.appendChild(newParagraph);
    newParagraph.style.backgroundColor = "black"; 
    newParagraph.style.color = "white";
}

addSentence.onclick = sentence;

function images(){
    img_div.style.display = "block";
    p_div.style.display = "none"; 
    var newImage = document.createElement ("img");
    newImage.src = "https://facts.net/wp-content/uploads/2023/07/20-facts-about-pikachu-1689578613.jpg"
    img_div.appendChild(newImage); 
    newImage.style.width = "400px"
}

addImage.onclick = images;