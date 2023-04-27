import axios from 'axios'

export default axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "6c288757e59a68ab616ba95e467779dc"
    }
})