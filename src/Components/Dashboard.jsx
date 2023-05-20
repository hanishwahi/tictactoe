import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 
const TicTacToe = () => {
const Navigate= useNavigate();

   const [players, setPlayers] = useState([ 
    {Name: "A", Value:"X"},
    {Name: "B", Value:"O"},
    {Name: "C", Value:"X"},
    {Name: "D", Value:"O"},
    {Name: "E", Value:"X"}
    ]);

const [selectedPlayer1, setSelectedPlayer1] = useState("")
const [selectedPlayer2, setSelectedPlayer2] = useState("")
  
 
const selectUser1=(index)=>{
    setSelectedPlayer1(players[index])
    console.log(players[index])
}
const selectUser2=(index)=>{
    setSelectedPlayer2(players[index])
    console.log(players[index])
}
 
const startGame=()=>{
 
    localStorage.setItem("data", JSON.stringify([[selectedPlayer1], [selectedPlayer2]]));
       
 
if(!selectedPlayer1 || !selectedPlayer2){
    alert("selectPlayer")
}
else if (selectedPlayer1.Value===selectedPlayer2.Value){
    alert("Please Select Different Player")
}

else{
    Navigate(`./Board/f/${selectedPlayer1.Name}/s/${selectedPlayer2.Name}`)
}   
}

   return (
 <>
      <div style={{background:"#7c52b7",color:"#fff", padding:"20px 0px" }}>
        <h1 style={{ textAlign: "center",margin:"0px" }}> Dashboard </h1>
      </div>
      {/* <hr style={{margin:"0px" }} /> */}
 <div style={{textAlign:"center"}}>
 <h3>Choose First  player</h3>
  <div className="player" style={{display:"flex", gap:"10px", justifyContent:"center"}}>
    <button onClick={() => selectUser1(0)} value={players[0]}>A</button>
    <button onClick={() => selectUser1(1)} value={players[1]}>B</button>
    <button onClick={() => selectUser1(2)} value={players[2]}>C</button>
    <button onClick={() => selectUser1(3)} value={players[3]}>D</button>
    <button onClick={() => selectUser1(4)} value={players[4]}>E</button>   
</div>
<h3>Choose Second  player</h3>
<div className="player" style={{display:"flex", gap:"10px", justifyContent:"center"}}>
    <button onClick={() => selectUser2(0)} value={players[0]}>A</button>
    <button onClick={() => selectUser2(1)} value={players[1]}>B</button>
    <button onClick={() => selectUser2(2)} value={players[2]}>C</button>
    <button onClick={() => selectUser2(3)} value={players[3]}>D</button>
    <button onClick={() => selectUser2(4)} value={players[4]}>E</button>   
</div>
 </div>
 
  
 <div style={{textAlign:"center",fontSize:"14px" }}>
 <h2 >Player-1: {selectedPlayer1.Name} your sign is {selectedPlayer1.Value}</h2>
  </div>

 <div style={{textAlign:"center", fontSize:"14px"}}>
 <h2>Player-2: {selectedPlayer2.Name} your sign is {selectedPlayer2.Value}</h2>
  </div>
<div className="playGame" style={{textAlign:"center"}}>
    <button onClick={startGame}>Play Game</button>
</div>
 </>      
     
  );
};

 
 

export default TicTacToe;
