import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from '../src/img/acoustic.png';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import Input from './components/Input';
import Prompts from './components/Prompts';
import { alertType } from './enums/alerts';
import { getPromptsByStartingLetters } from './helpers/data-service';
import { Prompt } from './models/prompt';

function App () {
    
    const [search, setSearch] = useState( '' );
    const [prompts, setPrompts] = useState<Prompt[]>( [] );
    const [error, setError] = useState( '' );
    
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
            <header className='text-center'>
                <img src={ logo } alt='Accoustic logo'/>
            </header>
            <hr/>
            <section>
                <form>
                    <div className="form-group text-center">
                        <Input inputHandler={handleUserInput}/>
                        <Button text='Search'/>
                    </div>
                </form>
                { prompts.length !== 0 &&
                <Prompts prompts={ prompts }/>
                }
                { error &&
                <Alert message={ `Unable to fetch the data! Error: ${ error }` } type={ alertType.danger }/>
                }
            </section>
        </div>
    );
}

export default App;


