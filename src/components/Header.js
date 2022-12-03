import React from 'react'

const Header = props => {
    return(
        <div className="header-div">
            <header>
                <div>
                    <p> {props.display} </p>
                    <p>Current Score: {props.current_score}</p>
                    <p>High Score: { props.high_score} </p>
                </div>
            </header>
        </div>
    )
}

export default Header;