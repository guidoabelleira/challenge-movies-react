
const initialState = {
    allMovies: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                allMovies: action.payload,
            }
        
        default: {
            return state
            }
        }
    }
    
    
    export default rootReducer;