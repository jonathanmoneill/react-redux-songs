import { combineReducers } from "redux";

const songsReducer = () => {
    return[
        {title: 'Whats love got to do with it', duration: '4:05'},
        {title: 'Burning Heart', duration: '3:15'},
        {title: 'Straight Outta Compton', duration: '5:17'},
        {title: 'I would do anything for love', duration: '11:08'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
      return action.payload;
    }
  
    return selectedSong;
  };
  
  export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
  });