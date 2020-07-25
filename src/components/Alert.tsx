import React from 'react';
import { alertType } from '../enums/alerts';

type Props = {
    message: string;
    type: alertType
}

const Alert = (props: Props) => {
    return (
        <section className={`alert ${props.type}`}>{ props.message }</section>
    );
};

export default Alert;
