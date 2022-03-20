import Vue from 'vue'
import axios from 'axios'


const store = Vue.observable({
    //setting API
    baseUrl:'https://api.themoviedb.org/3',
    apiKey:'22a5e9294f2ce2781f4a9ec0b6aed5d1',
    //language
    lg: 'it-IT',
    //contenuti adulti
    adult: false,

    inputSearch: '',
    moviesFilm: [],
    seriesTv: [],
})

export default store


export function getMovies(){
    const value = store.inputSearch.trim()
    if(value != ''){
        axios.get(`${store.baseUrl}/search/movie`,{
            params:{
                api_key: store.apiKey,
                language: store.lg,
                query: store.inputSearch,
                include_adult: store.adult
            }
        })
        .then(res =>{
            store.moviesFilm = res.data.results
        })
        .catch(err => {
            console.warn(err.response)
        })
    }else{
        store.moviesFilm = []
    }
}


export function getSeries(){
    const value = store.inputSearch.trim()
    if(value != ''){
        axios.get(`${store.baseUrl}/search/tv`,{
            params:{
                api_key: store.apiKey,
                language: store.lg,
                query: store.inputSearch,
                include_adult: store.adult
            }
        })
        .then(res =>{
            store.seriesTv = res.data.results
        })
        .catch(err => {
            console.warn(err.response)
        })
    }else{
        store.seriesTv = []
    }
}