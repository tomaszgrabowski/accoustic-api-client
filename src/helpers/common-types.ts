import { ChangeEvent } from 'react';

export type InputHandlerProps = {
    // normally I would go with redux to avoid extensive props propagation, but since this is quite small all I believe
    // its ok to do this...
    inputHandler: ( event: ChangeEvent<HTMLInputElement> ) => void;
}
