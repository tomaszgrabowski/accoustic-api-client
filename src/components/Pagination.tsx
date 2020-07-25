import React from 'react';

type Props = {
    totalPages: number;
    page: number;
    setPage: (index: number)=>void;
}

const Pagination = (props: Props) => {
    return (
        <nav aria-label="..." className='mt-3'>
            <ul className="pagination pagination-sm">
                { Array.from( Array( props.totalPages ) ).map( ( item, index ) => {
                    const active = index === props.page ? 'active' : '';
                    return <li key={ index } className={ `page-item ${ active }` }>
                        <em className="page-link" onClick={ () => props.setPage( index ) }>{ index }</em>
                    </li>;
                } ) }
            </ul>
        </nav>
    );
};

export default Pagination;
