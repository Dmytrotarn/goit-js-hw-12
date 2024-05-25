'use strict'
import axios from 'axios'

const API_KEY = "43985824-437e417885fe4ca625fa28e08"
const perPage = 15
axios.defaults.baseURL = 'https://pixabay.com/api/'

export async function getSearchResults(search, page) {
    const response = await axios({
        params: {
            key: API_KEY,
            q: search,
            image_type: 'photo',
            safesearch: true,
            page: page,
            orientation: 'horizontal',
            per_page: perPage,
        }
    })

    return response.data
}