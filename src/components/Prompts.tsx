import React from 'react';
import { Prompt } from '../models/prompt';
import Button from './Button';
import PromptsList from './PromptsList';

type Props = {
    prompts: Prompt[]
    clickAction: () => void
}

const Prompts = ( props: Props ) => {
    return (
        <section style={ styles.prompt }>
            <PromptsList prompts={ props.prompts }/>
            <div className='text-center'>
                <Button text='Search' clickAction={ props.clickAction }/>
            </div>
        </section>
    );
};

export default Prompts;

const styles = {
    prompt: {
        position: 'relative' as 'relative',
        top: '-4.5rem',
        backgroundColor: 'white',
        border: '1px solid #ced4da',
        padding: '1rem 0 1rem 0'
    }
};
