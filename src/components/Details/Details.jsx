import React, {useEffect}from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Details(){
    const genresList = useSelector(store=>store.genres);
    const homePage = ()=>{
        history.push('/');
        console.log('returning back to home');
    }
    
    
    return(
        <>
        <div>
        <h2>Movie Details</h2>
        <h3>{genresList.title}</h3>
        <img src={genresList.poster} alt={genresList.title}/>
            <h4>{genresList.genres}</h4>
            <h3>{genresList.description}</h3>
            <button onClick={homePage}>Back </button>
        </div>
        
        </>
        )
    }
    
    export default Details;