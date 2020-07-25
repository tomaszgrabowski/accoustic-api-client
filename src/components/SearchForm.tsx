import React, { ChangeEvent } from 'react';
import Button from './Button';
import Input from './Input';

type Props = {
    inputHandler: ( event: ChangeEvent<HTMLInputElement> ) => void;
    clickAction: () => void
}

const SearchForm = ( props: Props ) => {
    return (
        <form>
            <div className="form-group text-center">
                <Input inputHandler={ props.inputHandler }/>
                <Button text='Search' clickAction={ props.clickAction }/>
            </div>
        </form>
    );
};

export default SearchForm;
