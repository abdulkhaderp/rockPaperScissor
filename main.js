var opts = [".rock_option", ".scissor_option", ".paper_option"];
var img  = ["rock.png","scissor.png","paper.png"];
var ruleMap = { //userSelection-computerSelection
  "0-1" : "You Won :)",
  "0-2" : "You Lost :(",
  "1-0" : "You Lost :(",
  "1-2" : "You Won :)",
  "2-0" : "You Won :)",
  "2-1" : "You Lost :)"
}
var timer;
function startGame(arg){
    document.querySelector(".home_wrapper").style.display="none";
    document.querySelector(".action_wrapper").style.display="block";
    timer = setInterval(change, 1000);
}
function change() {
  opts.forEach(function(i){
    document.querySelector(i).style.border="solid 1px grey";
  });      
  var index = getRandomInt(0,3);
  document.querySelector(opts[index]).style.border = "solid 2px green";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function selectOption(arg){
    document.querySelector(".action_wrapper").style.display="none";
    document.querySelector(".result_wrapper").style.display="block";
    clearInterval(timer);
    //Set computer selection
    var index = getRandomInt(0,3);
    document.querySelector(".p1").style.backgroundImage  = "url('img/"+img[index]+"')";
    //Set player selection
    document.querySelector(".p2").style.backgroundImage = "url('img/"+img[arg]+"')";
    var result = findGameResult(arg,index);
    setTimeout(function(){
      document.querySelector(".result_box span").textContent = result;
    },0)
}
function findGameResult(j,k){
  var result;
  if(j == k){
    result = "It's a draw!!!";
    return result;
  }
  result = ruleMap[j+"-"+k];
  return result;

}
function playAgain(){
  document.querySelector(".action_wrapper").style.display="block";
  document.querySelector(".result_wrapper").style.display="none";
  timer = setInterval(change, 1000);
}