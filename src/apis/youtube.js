import axios from 'axios';

const KEY = 'AIzaSyA78kQa5KAwymJEuV8-wmzOfv8tvborKNw';


export default  axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});
