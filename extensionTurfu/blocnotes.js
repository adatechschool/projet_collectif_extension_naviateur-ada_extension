window.onload = function() {
    let txt = document.getElementById("txt");
    txt.value = localStorage.getItem("txt");
  
    let button = document.getElementById("btn");
    button.addEventListener("click", saveData);
  
    function saveData () {
      localStorage.setItem("txt", txt.value);
    }
  }