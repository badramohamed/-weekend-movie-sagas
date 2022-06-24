import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react'; 
import { useHistory } from 'react-router-dom';

function MovieItem(){
    const history = useHistory();
    const dispatch= useDispatch();
    const [movieItem, setMovieItem]= useState('');
    console.log('in the movieItem>>>>', details);

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movieItem
        })
        history.push('/Details');
    }
    
    
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                
            </form>
        </div>
        </>
        )
    }
    export default MovieItem;