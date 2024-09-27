let tog = document.getElementById('toggle')
let nav = document.getElementById('nav')


tog.addEventListener('click',function(){
    nav.classList.toggle('active')
})





let swt = document.getElementById("switch");
let header = document.getElementById("h");
let dark = document.getElementsByClassName("dark");

swt.addEventListener("click", function () {
  if (swt.classList.contains("fa-sun")) {
    setTimeout(() => {
      swt.classList.replace("fa-sun", "fa-moon");
    }, 500);

    document.body.style.backgroundColor = "#2D033B";
    header.style.backgroundColor = "#2D033B";

    for (let i = 0; i < dark.length; i++) {
      dark[i].style.color = "#C147E9";
    }
  } else {
    setTimeout(() => {
      swt.classList.replace("fa-moon", "fa-sun");
    }, 500);

    document.body.style.backgroundColor = "";
    header.style.backgroundColor = "";

    for (let i = 0; i < dark.length; i++) {
      dark[i].style.color = "";
    }
  }
});
