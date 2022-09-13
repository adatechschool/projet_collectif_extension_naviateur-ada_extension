// SEARCH BAR
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = () => {
  search.classList.toggle("active");
};

const btn = document.getElementById("clearbtn");
btn.onclick = () => {
  document.getElementById("mySearch").value = "";
};
