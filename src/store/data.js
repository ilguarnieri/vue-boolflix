import Vue from 'vue'

const data = Vue.observable({
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
    seriesTv: [],
    trending: {
        moviesWeek: [],
        seriesWeek: []
    }
})

export default data