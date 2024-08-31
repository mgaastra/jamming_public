import "../styles/AppContainer.css";
import SearchBar from "../components/SearchBar";
import React, { useState} from "react";
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist";
import Spotify from "../components/Spotify";

function AppContainer() {
  const [TrackTitle, setTrackTitle] = useState("");
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [data, setData] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [uriList, setUriList] = useState([]);


  const handleTrackTitleInput = async (e) => {
    setTrackTitle(e.target.value);
    const result = await Spotify.search(e.target.value);
    
    setData(result);
    console.log(data[0]);
  };

  const handleplaylistNameInput = (e) => {
    setPlaylistName(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Track title: ${TrackTitle} is submitted.`);
  };

  const handleSave = (event) => {
    event.preventDefault();
    Spotify.savePlaylist(playlistName, uriList);
    alert(`The playlist "${playlistName}" is saved to spotify!`);
  };

  const handleAddTrack = (track) => {
    // Check if the track ID already exists in the playlist
    const trackExists = playlist.some(
      (existingTrack) => existingTrack.id === track.id
    );

    if (!trackExists) {
      setPlaylist((prev) => [track, ...prev]);
      setUriList((prev) => [track.uri, ...prev]);
    } else {
      alert(`This track already exists in the playlist!`);
    }
    
  };

  const handleRemoveTrack = (trackToRemove) => {
    setPlaylist((prevPlaylist) => {
      // Filter out the track to be removed based on its unique identifier (e.g., id)
      return prevPlaylist.filter((track) => track.id !== trackToRemove.id);
      
    });

    setUriList((prevUriList) => {
      return prevUriList.filter((uri) => uri !== trackToRemove.uri);
    });

    
  };

  return (
    <div className="App">
      <div className="App-container">
        <SearchBar
          TrackTitle={TrackTitle}
          handleSubmit={handleSubmit}
          handleTrackTitleInput={handleTrackTitleInput}
        />
        <div className="search-results">
          <SearchResults data={data} handleAddTrack={handleAddTrack} />
          <Playlist
            playlist={playlist}
            handleSave={handleSave}
            handleRemoveTrack={handleRemoveTrack}
            playlistName={playlistName}
            handleplaylistNameInput={handleplaylistNameInput}
          />
        </div>
      </div>
    </div>
  );
}

export default AppContainer;
