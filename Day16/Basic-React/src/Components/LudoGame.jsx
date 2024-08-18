import { useState } from "react";

export default function(){

    //UseState

    let [moves , setMoves] = useState({
        blue : 0,
        yellow : 0,
        green : 0,
        red : 0
    })

    let updateBlue = () => {
        setMoves ((preMoves)=>{
            return {...preMoves , blue : preMoves.blue + 1}
        })
    }
    let updateminBlue = () => {
        setMoves ((preMoves)=>{
            return {...preMoves , blue : preMoves.blue - 1}
        })
    }
    let updateyellow = () => {
        setMoves ((preMoves)=>{
            return {...preMoves , yellow: preMoves.yellow + 1}
        })
    }
    let updateminyellow = () => {
        setMoves ((preMoves)=>{
            return {...preMoves , yellow: preMoves.yellow - 1}
        })
    }

    let updategreen= () => {
        setMoves ((preMoves)=>{
            return {...preMoves , green: preMoves.green + 1}
        })
    }
    let updatemingreen= () => {
        setMoves ((preMoves)=>{
            return {...preMoves , green: preMoves.green - 1}
        })
    }

    let updatered = () => {
        setMoves ((preMoves)=>{
            return {...preMoves , red: preMoves.red + 1}
        })
    }
    let updateminred = () => {
        setMoves ((preMoves)=>{
            return {...preMoves , red: preMoves.red - 1}
        })
    }
    return(<div>
        <p>Game Begins!</p>
        <div className="board" >
            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
            <button style={{backgroundColor: "blue" , marginLeft:"10px"}} onClick={updateminBlue}>-1</button>

            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateyellow}>+1</button>
            <button style={{backgroundColor: "yellow" , marginLeft:"10px"}} onClick={updateminyellow}>-1</button>


            <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updategreen}>+1</button>
            <button style={{backgroundColor: "green" , marginLeft:"10px"}} onClick={updatemingreen}>-1</button>


            <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updatered}>+1</button>
            <button style={{backgroundColor: "red" , marginLeft:"10px"}} onClick={updateminred}>-1</button>


        </div>
    </div>)
}