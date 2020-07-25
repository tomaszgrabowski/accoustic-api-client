import React from 'react';
import { InputHandlerProps } from '../helpers/common-types';

const Input = ( props: InputHandlerProps ) => {
    return (
        <>
            <input type='text' className='form-control' placeholder='Search user by email'
                   onChange={ props.inputHandler }/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your information with
                anyone else.</small>
        </>
    );
};

export default Input;
