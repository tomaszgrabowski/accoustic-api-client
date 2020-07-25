import { API_URL, COUNT_URL, PROMPT_URL, SEARCH_URL } from '../config';

export const getPromptsByStartingLetters = async ( letters: string ) => {
    const response = await fetch( `${ API_URL }${ PROMPT_URL }/${ letters }` );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    return await response.json();
};

export const getResultsBySearchText = async ( searchedText: string, page: number ) => {
    const response = await fetch( `${ API_URL }${ SEARCH_URL }/${ searchedText }/${ page }` );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    return await response.json();
};

export const getResultsCount = async ( searchedText: string ) => {
    const response = await fetch( `${ API_URL }${ COUNT_URL }/${searchedText} ` );
    if ( !response.ok ) throw new Error( `Api responded with error: ${ response.statusText }` );
    return await response.json();
};
