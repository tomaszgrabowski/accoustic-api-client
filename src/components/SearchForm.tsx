import React from 'react';
import { InputHandlerProps } from '../helpers/common-types';
import Button from './Button';
import Input from './Input';

const SearchForm = (props: InputHandlerProps) => {
    return (
        <form>
            <div className="form-group text-center">
                <Input inputHandler={ props.inputHandler }/>
                <Button text='Search'/>
            </div>
        </form>
    );
};

export default SearchForm;
