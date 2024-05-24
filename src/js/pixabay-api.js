'use strict'
import axios from 'axios'

const API_KEY = "43985824-437e417885fe4ca625fa28e08"

axios.defaults.baseURL = 'https://pixabay.com/api/'

export async function getSearchResults(search) {
    const response = await axios({
        params: {
            key: "43985824-437e417885fe4ca625fa28e08",
            q: search,
            image_type: 'photo',
            safesearch: true,
        }
    })

    return response.data

}