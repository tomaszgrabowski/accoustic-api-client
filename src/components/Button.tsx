import React from 'react';

type Props = {
    text: string;
    clickAction: () => void
}

const Button = (props: Props ) => {
    return (
        <button type="submit" className="btn btn-primary" onClick={props.clickAction}>{props.text}</button>
    );
};

export default Button;
