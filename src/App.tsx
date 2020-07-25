import React, { ChangeEvent, useEffect, useState } from 'react';
import logo from '../src/img/acoustic.png';
import './App.css';
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
                        <input type='text' className='form-control' placeholder='Search user by email'
                               onChange={ handleUserInput }/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your information with
                            anyone else.</small>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
                { prompts.length !== 0 &&
                <section style={styles.prompt}>
                  <ul style={styles.ul}>
                      {
                          prompts.map( prompt => <li>{ prompt.email } : { prompt.firstName } { prompt.lastName }</li> )
                      }
                  </ul>
                  <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Search</button>
                  </div>
                </section>
                }
                { error &&
                <section className='alert alert-danger'>Unable to fetch the data! Error: { error }</section>
                }
            
            </section>
        </div>
    );
}

export default App;

const styles = {
    prompt: {
        position: 'relative' as 'relative',
        top: '-4.5rem',
        backgroundColor: 'white'
    },
    ul: {
        listStyleType: 'none'
    }
}
