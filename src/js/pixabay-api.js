'use strict'
const API_KEY = "43985824-437e417885fe4ca625fa28e08"
const BASE_URL = "https://pixabay.com/api/"



export function getSearchResults(search) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })

}
