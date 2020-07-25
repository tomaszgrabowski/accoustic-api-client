import React, { ChangeEvent } from 'react';

type Props = {
    inputHandler: ( event: ChangeEvent<HTMLInputElement> ) => void;
}

const Input = ( props : Props ) => {
    return (
        <>
            <input type='text' className='form-control' placeholder='Search user by email' autoFocus={true}
                   onChange={ props.inputHandler }/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your information with
                anyone else.</small>
        </>
    );
};

export default Input;
