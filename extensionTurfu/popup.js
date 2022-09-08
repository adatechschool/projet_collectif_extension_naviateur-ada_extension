<<<<<<< HEAD
// if (localStorage.getItem("nom") != null)
//     h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;

//     bouton.onclick = () =>{
//         localStorage.setItem("nom",nom.value);
//     }
=======
// SEARCH BAR
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = () => {
  search.classList.toggle("active");
};

// LOCAL STORAGE
// Stocker indéfiniment - 10mb max -- CHROME only
//localStorage.setItem("alex", "delhia");
//localStorage.removeItem("alex");

mysearch.onclick = () => {
  console.log("coucou");
  let textUser = document.getElementById("mysearch").value;
  if (textUser != null) console.log(textUser);
  console.log(document.getElementById("mysearch").value);
  localStorage.setItem("name", document.getElementById("mysearch").value);
};
>>>>>>> 764f9b6327a74d02808662b05a77d594d844583d
