import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Header from './components/Header';
import Prompts from './components/Prompts';
import SearchForm from './components/SearchForm';
import SearchPage from './components/SearchPage';
import { alertType } from './enums/alerts';
import { getPromptsByStartingLetters } from './helpers/data-service';
import { Prompt } from './models/prompt';

function App () {
    
    const [search, setSearch] = useState( '' );
    const [prompts, setPrompts] = useState<Prompt[]>( [] );
    const [error, setError] = useState( '' );
    const [onSearchPage, setOnSearchPage] = useState( false );
    
    const handleUserInput = ( event: ChangeEvent<HTMLInputElement> ) => setSearch( event.target.value );
    
    useEffect( () => {
        if ( search ) {
            getPromptsByStartingLetters( search )
                .then( response => setPrompts( response ) )
                .catch( err => setError( err.message ) );
        } else {
            setPrompts( [] );
        }
    }, [search] );
    
    return (
        <div className="container">
            <Header/>
            <hr/>
            { !onSearchPage &&
            <SearchForm inputHandler={ handleUserInput } clickAction={ () => setOnSearchPage( true ) }/>
            }
            { onSearchPage &&
            <SearchPage searchText={ search } clickAction={ () => {
                setOnSearchPage( false );
                setSearch( '' );
            } }/>
            }
            { !onSearchPage && prompts.length !== 0 &&
            <Prompts prompts={ prompts } clickAction={ () => setOnSearchPage( true ) }/>
            }
            { error &&
            <Alert message={ `Unable to fetch the data! Error: ${ error }` } type={ alertType.danger }/>
            }
        </div>
    );
}

export default App;


