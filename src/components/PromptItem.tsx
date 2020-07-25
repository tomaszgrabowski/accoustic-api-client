import React from 'react';
import { Prompt } from '../models/prompt';

type Props = {
    prompt: Prompt
}

const PromptItem = (props: Props) => {
    return (
        <li key={props.prompt.email}>{ props.prompt.email } : { props.prompt.firstName } { props.prompt.lastName }</li>
    );
};

export default PromptItem;
