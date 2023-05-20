import React, { useState } from "react";
import Square from "./Square";
import { Link, useParams } from "react-router-dom";

function Board() {
  const Params = useParams();
  const First = Params["first"];
  const Second = Params["second"];
  const newData1= localStorage.getItem('data')  
  console.log(newData1.Name)

  const [data, setData] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState("X");
  

 

  const handleClick = (index) => {
    const copyData = [...data];
    if (isWinner || copyData[index]) return;
    copyData[index] = isXTurn;
    setData(copyData);
    setIsXTurn(isXTurn === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (data[a] !== null && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const resetGame = () => {
    setData(Array(9).fill(null));
    setIsXTurn("X");
  };
  const continueGame = () => {
    setData(data.slice(0, 3));
    setIsXTurn("X");
  };


  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 > Tic Tac Toe </h1>
        <Link style={{color:"#7c52b7", textDecoration:"none", fontSize:"18px"}} to={"/"}>Back to Dashboard</Link>
      </div>
      
      <hr />

      <div className="board-container">
        {isWinner ? (
          <>
            {" "}
            <h1 style={{fontSize:"28px", color:"green"}}>{isWinner} Won</h1> <Link style={{color:"#7c52b7", textDecoration:"none", fontSize:"18px"}} to={"/"}>Play Again</Link>
          </>
        ) : (
          <>
            <h2 style={{fontSize:"18px"}}>Players: {`${First} & ${Second} are playing`} </h2>

            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={data[0]} />
              <Square onClick={() => handleClick(1)} value={data[1]} />
              <Square onClick={() => handleClick(2)} value={data[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={data[3]} />
              <Square onClick={() => handleClick(4)} value={data[4]} />
              <Square onClick={() => handleClick(5)} value={data[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={data[6]} />
              <Square onClick={() => handleClick(7)} value={data[7]} />
              <Square onClick={() => handleClick(8)} value={data[8]} />
            </div>
            <div>
              <button
                style={{ marginTop: "10px" }}
                className="reset"
                onClick={resetGame}
              >
                Reset Game
              </button>
            </div>
            <div>
              <button
                style={{ marginTop: "10px" }}
                className="reset"
                onClick={continueGame}
              >
                Re-arrange Game
              </button>
            </div>

            <div>
              <h3>Activity:</h3>

              {data.map((item, index) => {
                return (
                  <>
                    <div key={index} style={{ display: "flex" }}>
                      <h4 style={{ margin: "0px" }}> {item}</h4>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Board;
