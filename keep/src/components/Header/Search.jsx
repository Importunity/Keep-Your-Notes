import React from 'react';
import './Search.css'

function Search(){
    return (
        <div>
            <form className="search-bar">
                <i className="fas fa-search"></i> 
                <input className="search" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </div>
    );
}

export default Search;