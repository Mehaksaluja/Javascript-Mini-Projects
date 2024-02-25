const buttons = document.querySelectorAll(".boxes");
const bgColor = document.querySelector("body");

buttons.forEach(function(boxes){
  console.log(boxes);
  boxes.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === "green"){
      bgColor.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "blue"){
      bgColor.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "yellow"){
      bgColor.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "red"){
      bgColor.style.backgroundColor = e.target.id ;
    }
  });
});