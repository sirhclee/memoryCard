import React, {useEffect, useState} from "react"; 
import Header from './Header';
import Card from './Card';
import warrior_img from '../Images/warrior.webp'
import warlock_img from '../Images/warlock.webp'
import rogue_img from '../Images/rogue.webp'
import hunter_img from '../Images/hunter.webp'
import mage_img from '../Images/mage.webp'
import priest_img from '../Images/priest.webp' 
import shaman_img from '../Images/shaman.webp'
import druid_img from '../Images/druid.webp'
import paladin_img from '../Images/paladin.webp'


const Game = () =>{
    const [currentScore, setCurrentScore] = useState(0);
    const [currentHighScore, setCurrentHighScore] = useState(0);
    const [comparisonArray, setComparisonArray] = useState([]); 
    const [display, setDisplay] = useState('Click each class only once'); 
    const [color, setColor] = useState('black'); 

    const characters = [{name: "Warrior", image: warrior_img}, {name:"Rogue", image:rogue_img},
    {name: "Hunter", image:hunter_img}, {name:"Mage", image:mage_img}, {name:"Warlock", image:warlock_img}, 
    {name:"Priest", image:priest_img},{name:"Shaman", image:shaman_img}, {name:"Druid", image:druid_img},{name:"Paladin", image:paladin_img}, ]

    const shuffle_images = a => { 
        for (let i = a.length-1; i>0; i--){
            let j = Math.floor(Math.random()*(i-1));
            let x = a[i];
            a[i] = a[j]; // flip current index with a random index
            a[j] = x; // 
        }
        return a; 
    }

    const incrementGame = (clickedName) => {
        if (comparisonArray.includes(clickedName)){ //check if name selected is existing 
            setComparisonArray([]); //reset array 
            setCurrentScore(0); //reset score
            setColor('red'); 
            setDisplay('Try again!'); 
        }
        else{
            setComparisonArray( [...comparisonArray, clickedName]); //add name to list 
            setCurrentScore(currentScore+1); //increase score value
            if (currentScore===8){
                setColor('green');
                setDisplay('You win!');}
            else {setColor('black');
                setDisplay('Keep on going!')
        }
    }
    }

    useEffect( ()=> {
        if (currentScore>currentHighScore){
            setCurrentHighScore(currentScore); //set high score
        }}, [currentScore, currentHighScore]) //runs when values update

    // useEffect( ()=> {
    //     const changeColor = () => { 
    //         if (currentScore===1){
    //             setColor('green');}


    //     };
    //     document.addEventListener("click", changeColor);
    //     return () => { document.removeEventListener("click", changeColor);
    // };
    // }, [color]); 
    
    return (
        <div style={ {color: color}} >
            <Header current_score = {currentScore} high_score = {currentHighScore} display = {display} /> 
            <div className = "cards-container" > 
                {shuffle_images(characters).map( (character)=> {
                    return <Card source = {character.image} name ={character.name} color = {color}
                        incrementGame= { (clickedName)=>{incrementGame(clickedName)}}/>
                })}
                

            </div>
        </div>
    )    
}

export default Game; 


