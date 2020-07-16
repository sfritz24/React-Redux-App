import React, { useEffect } from "react";
import { connect } from "react-redux";

import {fetchPokemon} from '../Actions/actions';

const Pokemon = props =>{

    useEffect(() =>{
        props.fetchPokemon();
    }, []);

    return (
        <div>
            {props.isLoading && <h4>Loading Data...</h4>}
            {props.error && <p style='color:red;'>There was an error: {props.error}</p>}
            {props.pokemon.length > 0 && (
                <div>
                    {props.pokemon.map(pokemon =>(
                        <div key={pokemon.name} className='pokemon'>{pokemon.name}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        isLoading: state.isLoading,
        pokemon: state.pokemon,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchPokemon}
)(Pokemon);