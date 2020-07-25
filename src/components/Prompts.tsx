import React from 'react';
import { Prompt } from '../models/prompt';
import Button from './Button';

type Props = {
    prompts: Prompt[]
}

const Prompts = ( props: Props ) => {
    return (
        <section style={ styles.prompt }>
            <ul style={ styles.ul }>
                {
                    props.prompts.map( prompt => <li>{ prompt.email } : { prompt.firstName } { prompt.lastName }</li> )
                }
            </ul>
            <div className='text-center'>
                <Button text='Search'/>
            </div>
        </section>
    );
};

export default Prompts;

const styles = {
    prompt: {
        position: 'relative' as 'relative',
        top: '-4.5rem',
        backgroundColor: 'white'
    },
    ul: {
        listStyleType: 'none'
    }
};
