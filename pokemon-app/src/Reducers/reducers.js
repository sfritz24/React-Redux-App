import {FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL} from '../Actions/actions';

export const initialState ={
    isLoading: false,
    pokemon: [],
    error: ''
};

export const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload
            };
        case FETCH_POKEMON_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    };
};