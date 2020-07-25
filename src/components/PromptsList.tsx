import React from 'react';
import { Prompt } from '../models/prompt';
import PromptItem from './PromptItem';

type Props = {
    prompts: Prompt[]
}

const PromptsList = (props: Props) => {
    return (
        <ul style={ styles.ul }>
            {
                props.prompts.map( prompt => <PromptItem prompt={ prompt }/> )
            }
        </ul>
    );
};

export default PromptsList;

const styles = {
    ul: {
        listStyleType: 'none'
    }
};
