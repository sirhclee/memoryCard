import React from 'react'

const Card = props => {
    return (
        <div className ="card" onClick={() => props.incrementGame(props.name)}
        style = { {border:"solid " + props.color + " 2px", borderRadius:"5px"}}>
            <img className = "card-image" src={props.source} alt={props.name} /> 

            <div className = "card-name"> {props.name} </div>

        </div> 
    )
}

export default Card;