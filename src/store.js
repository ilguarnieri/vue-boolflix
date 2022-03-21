import Vue from 'vue'
import axios from 'axios'


const store = Vue.observable({
    //setting API
    baseURI:'https://api.themoviedb.org/3',
    apiKey:'22a5e9294f2ce2781f4a9ec0b6aed5d1',
    //language
    lg: 'it-IT',
    //contenuti adulti
    adult: false,

    //post URI
    movie: '/search/movie',
    tv:'/search/tv',

    inputSearch: '',
    moviesFilm: [],
    seriesTv: []    
})

export default store

//ricerca film e serie
export function getMovies(genre){
    const value = store.inputSearch.trim()
    if(value != ''){
        axios.get(`${store.baseURI}` + genre,{
            params:{
                api_key: store.apiKey,
                language: store.lg,
                query: store.inputSearch,
                include_adult: store.adult
            }
        })
        .then(res =>{
            if(genre === store.movie){
                store.moviesFilm = res.data.results
            }else{
                store.seriesTv = res.data.results
            }
        })
        .catch(err => {
            console.warn(err.response)
        })
    }else{
        store.moviesFilm = [],
        store.seriesTv = []
    }
}