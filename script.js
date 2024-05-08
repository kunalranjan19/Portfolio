const hamburger = document.querySelector(".hamburger");
const icon = document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",() =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))




function darkMode() {
  if (document.body.style.backgroundColor == "black") {
      document.body.style.backgroundColor = "white";
  } else {
      document.body.style.backgroundColor = "black";
  }
  console.log(document.body.style.backgroundColor);   // ctrl + j and you can see which mode you're in
}
