import React, {useState} from 'react';
import './SearchInput.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionsTypes } from '../reducer';

function SearchInput() {
    const [{}, dispatchAction] = useStateValue();
    const history = useHistory();
    const [input, setInput] = useState("");

    const search = (e) => {
        e.preventDefault();
        dispatchAction({
            type: actionsTypes.SEARCH_ACTION,
            searchValue: input
        });
        history.push("/search")
    }

    return (
        <div className='search-main'>
            <div className='search-input'>
                <SearchIcon/>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            <div className='search-buttons'>
                <Button onClick={search} variant='outlined'>Szukaj w Google</Button>
                <Button variant='outlined'>Szczęśliwy traf</Button>
            </div>
        </div>
    );
}

export default SearchInput;
