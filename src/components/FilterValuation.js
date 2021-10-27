import React, { useState} from 'react';
import { filterByRate, getMovies } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

import style from './filterValuation.module.css'

const FilterValuation = () => {
    const dispatch = useDispatch();
    const [rate, setRate] = useState(0);
    const state = useSelector(state => state.allMovies);

    function filter(rateFilter){
        let x = rateFilter;
        let y = x - 2;
        
        let newState = state?.map(function(movie, key){
            if(Math.floor(movie.vote_average) >= y && Math.floor(movie.vote_average) < x){
                return movie
            } else {
                return null
            }
        })
        return newState.filter(e => e !== null);
    }
    
    const handleReviewRate = (e) => {
        e.preventDefault();
        setRate(e.target.value);
        if(rate !== e.target.value){
            let result = filter(e.target.value);
            dispatch(filterByRate(result));
        } else {
            dispatch(getMovies());
        } 
        
    }

    return (
        <div className={style.wrapper}>
            <p>Rating filter: </p>
            <input name="ratingRadio" type="radio" id="st5" value="10" onClick={e => handleReviewRate(e)}/>
            <label htmlFor="st5"></label>
            <input name="ratingRadio" type="radio" id="st4" value="8" onClick={e => handleReviewRate(e)}/>
            <label htmlFor="st4"></label>
            <input name="ratingRadio" type="radio" id="st3" value="6" onClick={e => handleReviewRate(e)}/>
            <label htmlFor="st3"></label>
            <input name="ratingRadio" type="radio" id="st2" value="4" onClick={e => handleReviewRate(e)}/>
            <label htmlFor="st2"></label>
            <input name="ratingRadio" type="radio" id="st1" value="2" onClick={e => handleReviewRate(e)}/>
            <label htmlFor="st1"></label>
        </div>
    )
}

export default FilterValuation;