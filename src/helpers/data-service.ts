import { API_URL, PROMPT_URL } from '../config';

export const getPromptsByStartingLetters = async ( letters: string ) => {
    const response = await fetch( `${ API_URL }${ PROMPT_URL }/${ letters }` );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    return await response.json();
};
