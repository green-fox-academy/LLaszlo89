let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-"+ pageCounter +".json" );
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText); 
    renHTML(ourData)
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3 ){
    btn.classList.add("hide-me");
  }

});

function renHTML(data){
  let htmlString = '';

  for(let i = 0; i<data.length; i++ ){
    htmlString += "<p>"+ data[i].name + "that animal is" + data[i].species + "</p>" ;
  }
animalContainer.insertAdjacentHTML('beforeend',htmlString);
}

