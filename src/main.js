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
const loadMore = document.querySelector('.load-more')

let userInput = ''
let page = 1;
const perPage = 15;
let totalPages

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

form.addEventListener('submit', handleSearch)

async function handleSearch(e) {
    e.preventDefault()
    page = 1
    userInput = search.value.trim()
    loadMore.classList.add('hidden')


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

    load.classList.remove('hidden')

    try {
        const { hits, total, totalHits } = await getSearchResults(userInput, page)

        if (!total) {                             //нічого не знайдено
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color: 'blue',
                position: 'topRight',
                displayMode: 2
            })
            load.classList.add('hidden')
            gallery.innerHTML = ''
            form.reset()
            return
        }
        gallery.innerHTML = renderImages(hits)
        lightbox.refresh()
        totalPages = Math.ceil(totalHits / perPage)
        //  більше ніж одна сторінка
        if (totalPages > 1) {
            loadMore.classList.remove('hidden')
        }
    }
    catch (error) {
        iziToast.error({ message: `${error}` })
    }
    form.reset()
    load.classList.add('hidden')
}

const scrollOnLoad = () => {
    const lastItem = document.querySelector('.item-results');
    const imageHeight = lastItem.getBoundingClientRect().height;
    const scrollHeight = imageHeight * 2;
    console.log(scrollHeight);

    window.scrollBy({
        top: scrollHeight,
        behavior: 'smooth',
    });
};



const onLodadMore = async () => {
    load.classList.remove('hidden')
    try {
        page += 1

        const { hits } = await getSearchResults(userInput, page)

        gallery.insertAdjacentHTML('beforeend', renderImages(hits))
        // плавне прокрручування
        scrollOnLoad()

        lightbox.refresh()
        // кінець колекції
        if (page >= totalPages) {
            loadMore.classList.add('hidden')
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                color: 'blue',
                position: 'topRight',
            })
        }
        load.classList.add('hidden')
    } catch (error) {
        iziToast.error({ message: `${error}` })
    }
}

loadMore.addEventListener('click', onLodadMore)

