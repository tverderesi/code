function bkbtn() {
  const anim = document.getElementsByTagName("body")[0];
  anim.classList.replace("text-focus-in", "text-blur-out");
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
}

let back_btn = document.getElementById("back");
back_btn.addEventListener("click", () => {
  bkbtn();
});
