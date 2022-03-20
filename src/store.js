import Vue from 'vue'

export default Vue.observable({
    //setting API
    url:'https://api.themoviedb.org/3',
    apiKey:'22a5e9294f2ce2781f4a9ec0b6aed5d1',
    //language
    lg: 'it-IT',

    inputSearch: '',
    searchArray: []
})