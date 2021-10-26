import axios from 'axios';

const key = process.env.REACT_APP_API_KEY;

export function getMovies(idOrder){
    return async function(dispatch){
        try {
            const response = await axios.get(`/3/discover/movie?api_key=${key}&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            console.log("respuesta getMovies: ", response.data)
            dispatch({
                type: 'GET_MOVIES',
                payload: response.data
            })
        } catch (error){
            console.log(error)
            
        }
    }
}

