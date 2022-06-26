import React, {useEffect}from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Details(){
    // using history to push users back to main page as well as calling my details reducer
    const history = useHistory();
    const details = useSelector(store=>store.details);
    const homePage = ()=>{
        history.push('/');
        console.log('returning back to home');
    }
    
    
    // the return is grabbing all the data to display onto the DOM 
    return(
        <>
        <div>
        <h2>Movie Details</h2>
            <h3>{details.title}</h3>
            <img src={details.poster} alt={details.title}/>
            <h4>{details.genres}</h4>
            <h3>{details.description}</h3>
        <button onClick={homePage}>Back </button>
        </div>
        
        </>
        )
    }
    
    export default Details;