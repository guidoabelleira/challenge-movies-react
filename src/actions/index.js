import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;


export function getMovies(dispatch){
    return async function(dispatch){
        try {
            let response = await axios.get(`/3/discover/movie?api_key=${key}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            // console.log("respuesta getMovies: ", response.data)
            response = response.data;
            dispatch({
                type: 'GET_MOVIES',
                payload: response.results
            })
        } catch (error){
            console.log(error)
            
        }
    }
}

// Referencia de API: https://developers.themoviedb.org/3/search/search-movies
export function searchMovies(input){
    return async function(dispatch){
        try {
            let response = await axios.get(`/3/search/movie?api_key=${key}&language=en-US&query=${input}&page=1&include_adult=false`);
            // console.log("respuesta searchMovies: ", response.data)
            response = response.data;
            dispatch({
                type: 'SEARCH_MOVIES',
                payload: response.results
            })
        } catch (error){
            console.log(error)
            
        }
    }
}

export function filterByRate(filter){
    console.log("action filter: ", filter)
    return function(dispatch){
        dispatch({
            type: 'FILTER_BY_RATE',
            payload: filter
        })
    }
}
