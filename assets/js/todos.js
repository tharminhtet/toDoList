var li = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".done");
var inputText = document.querySelector("#input");
var ul = document.querySelector("ul");
var plusIcon = document.querySelector(".fa-plus");

ul.addEventListener("click", function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  }else if(event.target.tagName === "I"){
    event.target.parentNode.parentNode.remove();
    event.cancelBubble = true;
  }
})

plusIcon.addEventListener("click", function(){
  if(inputText.style.display === "none"){
    inputText.style.display = "block";
  }else{
    inputText.style.display = "none";
  }
})

inputText.addEventListener("keypress", function(e){
  if(e.keyCode === 13){
    var todoText = inputText.value;
    var ul = document.querySelector("ul");
    ul.innerHTML += "<li><span class=\"done\"><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>";
  }
})
