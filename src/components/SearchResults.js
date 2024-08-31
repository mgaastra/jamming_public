import React from "react";
import "../styles/SearchResults.css";

function SearchResults({ data, handleAddTrack }) {
  const handleClick = (track) => {
    handleAddTrack(track);
  };

  return (
    <div className="search-container">
      <h2>Search Results</h2>
      {data.map(({ name, artist, id, album,uri }) => {
        const trackObject = { name, artist, id, album,uri };
        return (
          <div className="Track" key={id} onClick={() => handleClick(trackObject)}>
            <p>
              <span className="song-title">{name}</span><br /> 
              {artist} ({album})
            </p>
            <button>+</button>
          </div>
        );
      })}
      
    </div>
  );
}

export default SearchResults;
