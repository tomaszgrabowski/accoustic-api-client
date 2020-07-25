import React, { ChangeEvent } from 'react';

interface Props {
    // normally I would go with redux to avoid extensive props propagation, but since this is quite small all I believe
    // its ok to do this...
    inputHandler: ( event: ChangeEvent<HTMLInputElement> ) => void;
}

const Input = ( props: Props ) => {
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
