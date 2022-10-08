

// let slides=document.querySelector(".imageSlides")


let h=document.querySelector(".hello")
let by=document.querySelector(".bye")

const a=document.querySelector(".image1")
let b=document.querySelector(".image2")


a.style.display="block";
b.style.display="none";


by.addEventListener("click" , showimg1);

function showimg1(){
    a.style.display="block";
    b.style.display="none";
    
   

}
h.addEventListener("click" , showimg2);


function showimg2(){
    b.style.display="block";
    a.style.display="none";
    
}














// JS is to make the text editable for demo purpose, not required for the effect. Thanks for the suggestion @chriscoyier! 
var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});