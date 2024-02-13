player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("p1name").innerHTML=player1name+" : ";
document.getElementById("p2name").innerHTML=player2name+" : ";

document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;

document.getElementById("player_ques").innerHTML="Question turn : "+player1name;
document.getElementById("player_ans").innerHTML="Answer turn : "+player2name;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 +" X " + number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn = "player1";
answer_turn = "player2";



function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
  {
      if(answer_turn == "player1"){
        player1score=player1score +1;
        document.getElementById("p1score").innerHTML=player1score;
      }
      else{
        player2score=player2score +1;
        document.getElementById("p2score").innerHTML=player2score; 
      }
  }
  if(question_turn == "player1"){
    question_turn="player2";
    document.getElementById("player_ques").innerHTML="Question Turn : "+player2name;
  }
  else{
    question_turn="player1";
    document.getElementById("player_ques").innerHTML="Question Turn : "+player1name;
  }

  if(answer_turn == "player1"){
    answer_turn="player2";
    document.getElementById("player_ans").innerHTML="Answer Turn : "+player2name;
  }
  else{
    answer_turn="player1";
    document.getElementById("player_ans").innerHTML="Answer Turn : "+player1name;
  }
  document.getElementById("output").innerHTML="";
}   

