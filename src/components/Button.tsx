import React from 'react';

type Props = {
    text: string;
}

const Button = (props: Props) => {
    return (
        <button type="submit" className="btn btn-primary">{props.text}</button>
    );
};

export default Button;
