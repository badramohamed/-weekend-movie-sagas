import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react'; 
import { useHistory } from 'react-router-dom';


function MovieItem(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle]=  useState('');
    const [poster, setPoster]=  useState('');
    const [description, setDescription]=  useState('')
    
    console.log('in the movieItem>>>>');
    
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        dispatch({
            type: 'CREATE_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description
            }
        })
        history.push('/Details');
     
    }
    
    return(
        <>
        <div>
        <form onSubmit={handleSubmit}>
        <input type= "text" placeholder="Title"value= {title} onChange={(evt) =>{setTitle(evt.target.value)}}/>
        <input type= "text"placeholder="image"value= {poster} onChange={(evt) => {setPoster(evt.target.value)}}/>
        <input type= "text" placeholder="Description"value= {description} onChange={(evt) => {setDescription(evt.target.value)}}/>
        <button>add</button>
        </form>
        </div> 
        </>
        )
    }
    export default MovieItem;