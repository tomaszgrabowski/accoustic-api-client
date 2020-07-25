import React, { useEffect, useState } from 'react';
import { RESULTS_PER_PAGE } from '../config';
import { getResultsBySearchText, getResultsCount } from '../helpers/data-service';
import { Prompt } from '../models/prompt';
import Button from './Button';

type Props = {
    searchText: string;
    clickAction: () => void
}

const SearchPage = ( props: Props ) => {
    const [results, setResults] = useState<Prompt[]>( [] );
    const [error, setError] = useState( '' );
    const [page, setPage] = useState( 0 );
    const [resultCount, setResultCount] = useState( 0 );
    const [totalPages, setTotalPages] = useState( 0 );
    
    
    useEffect( () => {
        if ( props.searchText ) {
            getResultsBySearchText( props.searchText, page )
                .then( response => setResults( response ) )
                .catch( err => setError( err.message ) );
        } else {
            setResults( [] );
        }
    }, [props.searchText, page] );
    
    useEffect( () => {
        if ( props.searchText ) {
            getResultsCount( props.searchText )
                .then( response => {
                    setResultCount( response );
                    const totalPages = Math.ceil( response / RESULTS_PER_PAGE );
                    setTotalPages( totalPages );
                } )
                .catch( err => setError( err.message ) );
        } else {
            setResultCount( 0 );
        }
    }, [props.searchText] );
    
    return (
        <>
            <div className="row">
                <Button text='Back' clickAction={ props.clickAction }/>
            </div>
            <b>Serving { resultCount } results!!!</b>
            <ul>
                { results.map( result => <li
                    key={ result.email }>{ result.firstName } { result.lastName } { result.email }</li> ) }
            </ul>
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    { Array.from( Array( totalPages ) ).map( ( item, index ) => <li className="page-item">
                        <em className="page-link" onClick={ () => setPage( index ) }>{ index }</em></li> ) }
                    {/*<li className="page-item disabled">*/ }
                    {/*    <a className="page-link" href="#" tabIndex={ -1 }>1</a>*/ }
                    {/*</li>*/ }
                    {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/ }
                    {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/ }
                </ul>
            </nav>
            <div className="row">
                <Button text='Back' clickAction={ props.clickAction }/>
            </div>
        </>
    );
};

export default SearchPage;
