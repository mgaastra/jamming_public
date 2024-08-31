import React from "react";
import "../styles/SearchResults.css";
import "../styles/Playlist.css"

function Playlist({playlist, handleSave, handleRemoveTrack, playlistName, handleplaylistNameInput}) {
  return (
    <div className="playlist-container">
      <input id="playlistName" 
                type="text"
                value={playlistName}
                onChange={handleplaylistNameInput} />
      
      {playlist.map(({ name, artist, id, album,uri }) => {
        const trackObject = { name, artist, id, album,uri };
      return (
        <div className="Track" key={id} onClick={() => handleRemoveTrack(trackObject)}>
          <p>
          <span className="song-title">{name}</span><br /> 
              {artist} ({album})
          </p>
          <button>-</button>
        </div>
      );
      })}
      <button onClick={handleSave} className="save-button">Save to Spotify</button>
    </div>
  );
}

export default Playlist;
