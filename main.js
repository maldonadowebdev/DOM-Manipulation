

const theHeader = document.getElementById('main-heading');
theHeader.innerHTML = "New DOM Layout";
theHeader.classList.add("bg-success");

const firstP = document.getElementById('para1');
firstP.innerHTML = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
const secondP = document.getElementById('para2');
secondP.innerHTML = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";


document.getElementById("btn").onclick = function() {clicked()};
function clicked() {
   
    const newArticle = document.createElement("article");
    newArticle.classList.add("m-2", "p-2", "border", "border-secondary");

    const para = document.getElementById("para4");

    const parent = para.parentNode;
    const parentDiv = parent.parentNode;
    parentDiv.appendChild(newArticle);
    const newP = document.createElement("p");
    newP.innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
    newArticle.appendChild(newP);    
};  

const redBox = document.getElementById("red").firstElementChild;
redBox.classList.add("bg-danger");

const blueBox = document.getElementById("blue").firstElementChild;
blueBox.classList.add("bg-primary");

const yellowBox = document.getElementById("yellow").firstElementChild;
yellowBox.classList.add("bg-warning");

const greenBox = document.getElementById("green").firstElementChild;
greenBox.classList.add("bg-success");

const blackBox = document.getElementById("black").firstElementChild;
blackBox.classList.add("bg-dark");
blackBox.style.color = "white";

