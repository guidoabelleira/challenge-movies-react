
const initialState = {
    allMovies: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_MOVIES':
            return {
                
                allMovies: action.payload,
            }
        case 'SEARCH_MOVIES':
            return {
                
                allMovies: action.payload,
            }
        case 'FILTER_BY_RATE':
            return {
                
                allMovies: action.payload,
            }

        default: {
            return state
            }
        }
    }
    
    
    export default rootReducer;