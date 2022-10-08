let c=document.querySelector(".center");
let a=document.querySelector(".menu")
c.addEventListener("click",showmenu);
a.style.display="none";


function showmenu(){

    if (a.style.display === "none") {
        a.style.display = "block";
      }
      else {
        a.style.display = "none";
      } 
}
















