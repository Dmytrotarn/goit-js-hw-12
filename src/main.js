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
let page = 1;
const perPage = 15;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

form.addEventListener('submit', handleSearch)

async function handleSearch(e) {
    e.preventDefault()

    const searchValue = search.value.trim()
    // Порожній запит
    if (searchValue === '') {
        iziToast.error({
            message: 'Input field can not be empty',
            position: "topRight",
            // timeout: false,
            displayMode: 2,
        })
        search.value = ''
        gallery.innerHTML = ''
        return
    }

    load.classList.remove('is-hidden')


    await getSearchResults(searchValue)
        .then((data) => {
            if (data.total === 0) {                             //нічого не знайдено
                iziToast.show({
                    message: '"Sorry, there are no images matching your search query. Please try again!"',
                    color: 'blue',
                    position: 'topRight',
                    // timeout: false,
                    displayMode: 2
                })
                load.classList.add('is-hidden')
                gallery.innerHTML = ''
                return
            }

            gallery.innerHTML = renderImages(data.hits)
            lightbox.refresh()
        })
        .catch(e => {
            iziToast.error({ message: `${e}` })
        }).finally(() => {
            search.value = ''
            load.classList.add('is-hidden')
        })
    // iziToast.destroy()
}