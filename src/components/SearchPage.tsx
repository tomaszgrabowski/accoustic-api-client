import React, { useEffect, useState } from 'react';
import { RESULTS_PER_PAGE } from '../config';
import { alertType } from '../enums/alerts';
import { getResultsBySearchText, getResultsCount } from '../helpers/data-service';
import { Prompt } from '../models/prompt';
import Alert from './Alert';
import Button from './Button';
import Pagination from './Pagination';
import ResultsList from './ResultsList';

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
            <div className="row mb-3">
                <Button text='Back' clickAction={ props.clickAction }/>
            </div>
            { !error && <>
              <ResultsList results={results}/>
              <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
              <div className="row">
                <Button text='Back' clickAction={ props.clickAction }/>
              </div>
            </> }
            { error &&
            <Alert message={ `Unable to fetch the data! Error: ${ error }` } type={ alertType.danger }/>
            }
        
        </>
    );
};

export default SearchPage;
