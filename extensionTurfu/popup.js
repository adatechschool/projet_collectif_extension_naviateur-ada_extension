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

//ENTER
document.onkeydown = function () {
  if (window.event.keyCode == "13") {
    dictionary()
  }
}

//DICTIONARY
async function dictionary (){
  let define = document.querySelector("#mySearch").value
  console.log(define)
  let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${define}`
  const response = await fetch(url,{
    method:"GET"
  })
  const data = await response.json()
  console.log(data[0].meanings[0].definitions[0].definition)
  let answer = prompt( "is it a noun(n) a verb(v) or an adjective(a)?")
  if(answer=="n"){
    alert(data[0].meanings[0].definitions[0].definition)
  }else if(answer=="v")
  {
    alert(data[0].meanings[1].definitions[0].definition)
  }else if(answer=="a")
  {
    alert(data[0].meanings[2].definitions[0].definition)
  }else{
    prompt( "is it a noun(n) a verb(v) or an adjective(a)?")
  }
}