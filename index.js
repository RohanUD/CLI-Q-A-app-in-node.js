var bundle=require('readline-sync');
var Userinfo=bundle.question("your name? ");
console.log("welcome "+Userinfo+" how's youu");
  var score=0;

function play(question,answer){
  var userInfo=bundle.question(question);
  if(userInfo===answer){
    console.log('you are right');
    score++;
  }
  else{

    console.log('you are wrong');
    score--;
  }
    console.log(score);

    console.log('========');
}

var questionOne={
  question:'what food you like',
  answer:'pizza',
}

var questionTwo={
  question:'what place you like',
  answer:'LA',
}

var arr=[questionOne,questionTwo];
for(var i=0;i<arr.length;i++){
  play(arr[i].question,arr[i].answer);
}
