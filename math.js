p1_name=localStorage.getItem("p1_name");
p2_name=localStorage.getItem("p2_name");
p1_score=0;
p2_score=0;
document.getElementById("p1_name").innerHTML=p1_name +" ; ";
document.getElementById("p2_name").innerHTML=p2_name +" ; ";
document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;
document.getElementById("?").innerHTML="?-"+ p1_name;
document.getElementById("answer").innerHTML="answer-"+ p1_name;
function send()
{
get_word=document.getElementById("word").value;
word=get_word.toLowerCase;
console.log("word="+ word);
charAt1=word.charAt(1);
console.log(charAt1)
length_d_2=Math.floor(word.length/2);
charAt2=word.charAt(length_d_2);
console.log(charAt2);
length_m_1=word.length-1;
charAt3=word.charAt(length_m_1);
console.log(charAt3);
remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);
question_word="<h4 id='word_display'> Q."+ remove_charAt3+ "</h4>";
input_box="<br> answer: <input type='text' id='i_c_b'>";
check_button="<br> <br> <button class='btn btn-primary' onclick='check()'>check</button>"
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row
document.getElementById("word").value=""
}
question_turn="player1";
answer_turn="player2";
function check()
{
get_answer=document.getElementById("i_c_b").value;
answer1=get_answer.toLowerCase();
console.log("answer1="+answer1);
if (answer1==word)
{
if ("answer_turn==player1")
{
p1_score=p1_score+1;
document.getElementById("p1_score").innerText=p1_score;
}
else 
{
    p2_score=p2_score+1;
    document.getElementById("p2_score").innerText=p2_score;
}
}
if (question_turn="player1")
{
question_turn="player2";
document.getElementById("?").innerHTML="?turn-"+p2_name;
}
else
{
    question_turn="player1";
    document.getElementById("?").innerHTML="?turn-"+p1_name;
}
if (answer_turn="player1")
{
answer_turn="player2";
document.getElementById("answer").innerHTML="answerturn-"+p2_name;
}
else
{
    answer_turn="player1";
    document.getElementById("answer").innerHTML="answerturn-"+p1_name;
}
document.getElementById("output").innerHTML="";
}