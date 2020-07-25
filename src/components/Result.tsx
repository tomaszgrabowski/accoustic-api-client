import React from 'react';
import { Prompt } from '../models/prompt';

type Props = {
    result: Prompt
}

const Result = ( props: Props ) => {
    return (
        <li key={ props.result.email } className="list-group-item">{ props.result.firstName } { props.result.lastName }
            <br/>{ props.result.email }</li>
    );
};

export default Result;
