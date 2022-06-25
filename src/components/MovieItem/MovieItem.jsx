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
            type: 'CREATE_DETAILS',
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
        </div>
        </>
        )
    }
    export default MovieItem;