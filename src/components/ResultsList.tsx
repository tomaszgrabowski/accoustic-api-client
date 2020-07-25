import React from 'react';
import { Prompt } from '../models/prompt';
import Result from './Result';

type Props = {
    results: Prompt[]
}

const ResultsList = (props: Props) => {
    return (
        <ul className='list-group'>
            { props.results.map( result => <Result result={ result }/> ) }
        </ul>
    );
};

export default ResultsList;
