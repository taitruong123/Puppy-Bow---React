import React from "react";

const SearchBar = (props) => {
    return (
        <div id="search-bar">
            <label>Search for puppy by name:</label>
            <input name="searchTerm"></input>
            <button onClick={() =>{ props.search("")}}>Search</button>
        </div>
    )
}

export default SearchBar;