function adduser()
{
p1_name=document.getElementById("p1nameinput").value;
p2_name=document.getElementById("p2nameinput").value;
localStorage.setItem("player1",p1_name);
localStorage.setItem("player2",p2_name);
window.location="game_page.html";
}