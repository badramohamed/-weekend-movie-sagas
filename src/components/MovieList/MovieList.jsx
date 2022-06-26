import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
    //  consts that will be used to dispatch,
    // save history and push as well as my selector that calls my moviestore
    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // use effect that will be used to dispatch my fetchMovies 
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        
    }, []);


    // handlesubmit that will push the data and post as well as push users to the details page
    const handleSubmit = (id)=>{
        console.log(id);
        const details = id
        dispatch({
            type: 'POST_MOVIES',
            payload: details,
            
        })
        history.push('/Details');
        
    }
    
    // return that will loops through the data to grab each one needed
    return (
        <main>
        <h1>MovieList</h1>
        <section className="movies">
        {movies.map(movie => {
            return (
                <div onClick = {()=> handleSubmit(movie.id)} key= {movie.id}>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}/>
                </div>
                );
            })}
            </section>
            </main>
            
            );
        }
        
        export default MovieList;