import React from "react";
import "../styles/SearchBar.css";

function SearchBar({TrackTitle, handleSubmit, handleTrackTitleInput}){
   

    return (
        <div className="search-container">
            <h1>Spotify playlist maker</h1>
        <form onSubmit={handleSubmit}> 
            <label for="TrackTitle">Search on Track Title</label>
            <input id="TrackTitle" 
                type="text"
                value={TrackTitle}
                onChange={handleTrackTitleInput} />
            <input className="search-button" type="submit" value="Search"/>
            
        </form>
        </div>
    )

}

export default SearchBar;