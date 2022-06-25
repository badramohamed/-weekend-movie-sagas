import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

///////////////// ROOTS ///////////////////////

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('CREATE_MOVIE', PostMovies);
    yield takeEvery('POST_MOVIES', fetchDetails);
}

//////////////////////// SAGAS //////////////////////

function* fetchAllMovies() {
  //  get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
        
    } catch {
        console.log('get all error');
    }
    
}

function* fetchDetails (action){
        console.log('made it to fetchResults!', action);
       
        try {
            const res = yield axios.get(`/api/movie/${action.payload}`);
            console.log('res.data', res.data[0]);
            yield put({ type: 'SET_DETAILS', payload: res.data[0]});
        }
        catch (err) {
            console.error('oh no', err);
            return;
        }
    }


function* PostMovies (){
    try{
        const movies = action.payload
        console.log(action.payload);
        yield axios.post({
            method:'POST',
            url: '/',
            data: movies
        })
       yield put({
            type: 'FETCH_MOVIES',     
        })
    } catch {
    console.log('error posting')}
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


//////////////// REDUCER LIST: ///////////////////////

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
        return action.payload;
        default:
        return state;
    }
}

const details = (state = {}, action)=>{
    switch(action.type){
        case 'SET_DETAILS':
        return action.payload;
        default: 
        return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
        return action.payload;
        default:
        return state;
    }
}

///////////////////// STORE ///////////////////////////
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
    );
    
    // Pass rootSaga into our sagaMiddleware
    sagaMiddleware.run(rootSaga);
    
    ReactDOM.render(
        <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
        </React.StrictMode>,
        document.getElementById('root')
        );
        