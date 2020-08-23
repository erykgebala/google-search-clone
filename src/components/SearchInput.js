import React from 'react';
import './SearchInput.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function SearchInput() {
    return (
        <div className='search-main'>
            <div className='search-input'>
                <SearchIcon/>
                <input/>
                <MicIcon/>
            </div>
            <div className='search-buttons'>
                <Button variant='outlined'>Szukaj w Google</Button>
                <Button variant='outlined'>Szczęśliwy traf</Button>
            </div>
        </div>
    );
}

export default SearchInput;
