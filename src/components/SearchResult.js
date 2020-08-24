import React from 'react';
import './SearchResult.css';
import { useStateValue } from '../StateProvider';

function SearchResult() {
    const [ {searchValue}, dispatchAction] = useStateValue();

    return (
        <div>
            Wyniki dla {searchValue}
        </div>
    );
}

export default SearchResult;
