var porScore;
var argScore;
var porPenaulty= document.querySelectorAll("#portugal-pen .penalty")
var argPenaulty= document.querySelectorAll("#argentina-pen .penalty")
var messages=  document.getElementById("result");
var selected;
var inaitial;
var count ;
var total ;
function start() {
  porScore = 0;
  argScore = 0;
  count=0;
  total=0;
  document.getElementById("portugal-score").innerHTML = porScore;
  document.getElementById("argentina-score").innerHTML = argScore;
  inaitial = Math.random() > 0.5 ? 1 : 0;
  selected = inaitial == 1 ? "Portugal" : "Argentina";
  document.getElementById("shoot").style.display = "block";
  document.getElementById("try-again").style.display = "block";
  document.getElementById("start").style.display = "none";
  document.getElementById("shoot").innerHTML = selected + " Hit";
  messages.innerHTML="";
  porPenaulty.forEach(element=>{
    element.classList.remove("scored");
  element.classList.remove("missed")});
  argPenaulty.forEach(element=>{
    element.classList.remove("scored");
  element.classList.remove("missed")});
}
function shoot() {
  var goal = Math.random() > 0.5 ? 1 : 0;
  count+=1;
  total+=1;
  messages.style.display="block";
  if (inaitial == 1) {
    porScore = parseInt(porScore) + goal;
    porScore = porScore.toString();
    document.getElementById("portugal-score").innerHTML = porScore;
    if(goal==1){
      porPenaulty[count-1].classList.add("scored");
      messages.innerHTML = selected + " Scored";
    }
    else{
      porPenaulty[count-1].classList.add("missed");
      messages.innerHTML = selected + " Missed";
    }
    if (count == 5) {
      inaitial = 0;
      count = 0;
      selected="Argentina";
      document.getElementById("shoot").innerHTML = selected + " Hit";
    }
  } else {
    argScore = parseInt(argScore) + goal;
    argScore = argScore.toString();
    document.getElementById("argentina-score").innerHTML = argScore;
    if(goal==1){
      argPenaulty[count-1].classList.add("scored");
      messages.innerHTML = selected + " Scored";
    }
    else{
      argPenaulty[count-1].classList.add("missed");
      messages.innerHTML = selected + " Missed";
    }
    if (count == 5) {
      inaitial = 1;
      count = 0;
      selected="Portugal";
      document.getElementById("shoot").innerHTML = selected + " Hit";
    }
  }
  if(total==10){
    document.getElementById("shoot").style.display = "None";
    if(porScore>argScore) 
      messages.innerHTML = "PORTUGAL WON THE MATCH";
    else if(porScore<argScore)
      messages.innerHTML = "ARGENTINA WON THE MATCH";
    else
    messages.innerHTML = "MATCH DRAW"  
  }
  
}
