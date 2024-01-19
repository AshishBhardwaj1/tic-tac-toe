import React, { useState } from 'react'
import Square from './Square'

const FunctionBoard = () => {

    const Winner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5,],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for  (let i =0; i<lines.length; i++){
            const [a,b,c] =lines[i]
            if (squares[a] && squares[a]===squares[b]&& squares[a]===squares[c]) {
    
                return squares[a]
            }
        }
     return null
    }

const initialMove = Array(9).fill(null);
     const [xIsNext, setXIsNext] = useState(true);

    const [squares,setSquares] =useState(initialMove)
    const handleClick=(i)=>{
        if (Winner(squares)|| squares[i]){
            return;
        }
        if (squares[i]){
            return
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            
            nextSquares[i]="X";
        }else {
            nextSquares[i]="0";
        }
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }
    const winner  = Winner(squares);
    const isBoardFull = squares.every((square)=> square!== null)
    let status;
    if(winner) {
        status = "winner " +winner
    } else  if (isBoardFull){
        status ="the game is Draw"
    }
    
    else {
        status = ' player: ' + (xIsNext ? '1 X' : '2 O');
        
        
    }
    const reset = ()=>{
       setSquares(initialMove)
       setXIsNext(true)
    }
    return (
        

    <div className='tic-tac-toe'> 
                
                 <div><h1>TIC-TAC-TOE</h1></div>
                         <div className='status'>{status} </div>

    <div className='board-row'>
    <Square val= {squares[0]} onSquareClick={()=>handleClick(0)}/>
 
    <Square  val= {squares[1]} onSquareClick={()=>handleClick(1)}/>
   
    <Square  val= {squares[2]} onSquareClick={()=>handleClick(2)}/>

    </div>

    <div className='board-row'>
    <Square  val= {squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Square  val= {squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Square  val= {squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>

    <div className='board-row'>
    <Square  val= {squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Square  val= {squares[7]} onSquareClick={()=>handleClick(7)}/>
    
    <Square  val= {squares[8]} onSquareClick={()=>handleClick(8)} />
    </div>
    <button style={{backgroundColor:"purple",height:"30px",width:'100px',fontSize:"15px",borderRadius:"20px",margin:"20px",color:"white"}} onClick={reset}> play again </button>
  
 
    </div>
  )
}

export default FunctionBoard