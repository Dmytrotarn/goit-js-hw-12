import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
import { getSearchResults } from './js/pixabay-api'
import { renderImages } from './js/render-functions'


const search = document.querySelector('.search-input')
const gallery = document.querySelector('.gallery')
const load = document.querySelector('.loader')
const form = document.querySelector('.form')
const loadMore = document.querySelector('load-more')

let userInput = ''
let page = 1;
const perPage = 15;


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

form.addEventListener('submit', handleSearch)

async function handleSearch(e) {
    e.preventDefault()

    userInput = search.value.trim()

    // Порожній запит
    if (userInput === '') {
        iziToast.error({
            message: 'Input field can not be empty',
            position: "topRight",
            // timeout: false,
            displayMode: 2,
        })
        form.reset()
        gallery.innerHTML = ''
        return
    }

    load.classList.remove('is-hidden')

    try {
        const { hits, total } = await getSearchResults(userInput, page)

        if (total === 0) {                             //нічого не знайдено
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color: 'blue',
                position: 'topRight',
                // timeout: false,
                displayMode: 2
            })
            load.classList.add('is-hidden')
            gallery.innerHTML = ''
            form.reset()
            return
        }
        gallery.innerHTML = renderImages(hits)
        lightbox.refresh()
    }
    catch (error) {
        iziToast.error({ message: `${error}` })
    }
    form.reset()
    load.classList.add('is-hidden')
}
    // iziToast.destroy()