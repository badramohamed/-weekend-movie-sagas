import React, {useEffect}from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Details(){
    const movieDetails = useSelector(store=>store.Details);
    const homePage = ()=>{
        history.push('/');
        console.log('returning back to home');
    }
    
    
    return(
        <>
        <div>
        <h2>Movie Details</h2>
        <h3>{movieDetails.title}</h3>
        <img src={movieDetails.poster} alt={movieDetails.title}/>
            <h4>{movieDetails.genres}</h4>
            <h3>{movieDetails.description}</h3>
            <button onClick={homePage}>Back </button>
        </div>
        
        </>
        )
    }
    
    export default Details;