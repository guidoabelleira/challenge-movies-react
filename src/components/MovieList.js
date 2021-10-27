import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../actions/index';

import Movie from './Movie';

const MovieList = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.allMovies);

    console.log("moviesList state: ",movies)

    useEffect(() => {
        // if(movies.length === 0){
        //     dispatch(getMovies())
        // }   
        dispatch(getMovies())
    },[dispatch]);
    
    return movies.length !== 0 ? (
        <div className="container">
            <div className="row">
                {movies.map(movie => (
                    movie !== null ? (
                        <div className="col-md-4" key={movie.id}>
                        <Movie 
                            movie={movie}
                        />
                    </div>
                    ) : ( <></> )
                ))}
            </div>
        </div>
    ) : (
        <div className="d-grid gap-2">
            <div className="alert alert-primary" role="alert">
                Algo salio mal!
            </div>
            <button className="btn btn-primary" type="button">Recargar</button>
        </div>
    )
}

export default MovieList
