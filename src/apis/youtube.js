import axios from 'axios'

const KEY = 'AIzaSyD4ocR2Oo3b1sWRh9kGGRteM-HJo9BaE9E'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})