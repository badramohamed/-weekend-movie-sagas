import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react'; 
import { useHistory } from 'react-router-dom';


function MovieItem(){
    const history = useHistory();
    const dispatch= useDispatch();
    const [movieItem, setMovieItem]= 
    useState(
   {title: '',
    poster: '',
    description: ''
    
});
    console.log('in the movieItem>>>>', details);

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        dispatch({
            type: 'CREATE_MOVIE',
            payload: movieItem
        })
        history.push('/Details');
        // setMovieItem('')
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type= "text"
            placeholder="Title"
            value= {movieItem}
            onChange={(evt) => setMovieItem({...movieItem,title:evt.target.value})}/>
            <input 
            type= "text"
            placeholder="description"
            value= {movieItem}
            onChange={(evt) => setMovieItem({...movieItem,poster:evt.target.value})}/>
            <input 
            type= "text"
            placeholder="Title"
            value= {movieItem}
            onChange={(evt) => setMovieItem({...movieItem,description:evt.target.value})}/>
            </form>
            <button>add</button>
             <select> 
                <option value = 'Adventure'></option>
                <option value = 'Animated'></option>
                <option value = 'Biographical'></option>
                <option value = 'Comedy'></option>
                <option value = 'Disaster'></option>
                <option value = 'Drama'></option>
                <option value = 'Epic'></option>
                <option value = 'Fantasy'></option>
                <option value = 'Musical'></option>
                <option value = 'Romantic'></option>
                <option value = 'Science Fiction'></option>
                <option value = 'Space Opera'></option>
                <option value = 'Superhero'></option>
            </select> 

         </div> 
        </>
        )
    }
    export default MovieItem;