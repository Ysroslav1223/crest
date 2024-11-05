import React from 'react';
import './Game.css'
import Information from './Information';
import { calculateWinner } from './winner';
import {useState} from 'react'

const Game = () => {

    const[information,setInformation]=useState(Array(9).fill(undefined))
    const[xIsNext,setXIsNext]=useState(true)
    const[isDraw,setIsDraw]=useState(false)

    const winner = calculateWinner(information)


    const handleClick=(index)=>{
        const copyInformation = [...information]

        if(winner||copyInformation[index]){
            return 
        }
        copyInformation[index]=xIsNext ? 'X':'O'

        setInformation(copyInformation)
        setXIsNext(!xIsNext)

        if(!winner&&copyInformation.every(square=>square !==undefined)){
            setIsDraw(true)
            
        }

    }
    const startGame=()=>{
        return(
            <button className='restart' onClick={()=>{setInformation(Array(9).fill(undefined))
                setIsDraw(false)
                setXIsNext(true)
            }}>начать заново</button>
        )
    }


    return (
        <div className='gameWrrap'>
            {startGame()}
            <Information squares={information} click={handleClick}/>
            <p className='move'>{winner ? "Победитель: "+winner: isDraw ? 'Ничья': "Сейчас ходит: "+(xIsNext ? 'X':'O')}</p>
        </div>
    );
}

export default Game;
