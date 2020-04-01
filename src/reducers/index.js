   import {combineReducers} from 'redux';

   const songReducer = () => {
       return [
           {title: 'No ac', duration : '4.05'},
           {title: 'No air', duration : '3.00'},
           {title: 'kill me', duration : '5.01'}
       ];
   }; 

   const selectedSongReducer = ( selectedSong = null , action ) => {
       if(action.type === 'SONG_SELECTED'){
           return action.payload;
       }
       return selectedSong;

   }

   export default combineReducers({
        songs: songReducer,
        selectedSong: selectedSongReducer
   });