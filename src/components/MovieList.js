import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../actions/index';

import Movie from './Movie';

const MovieList = () => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.allMovies);

    console.log(movies.results)

    useEffect(() => {
        async function getters(){
            await dispatch(getMovies())
        }
        getters();
    },[dispatch]);
    
    return movies.results ? (
        <div className="container">
            <div className="row">
                {movies.results.map(movie => (
                    <div className="col-md-4" key={movie.id}>
                        <Movie 
                            movie={movie}
                        />
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <>
            <p>Loading...</p>
        </>
    )
}

export default MovieList
