import data from './data.js'
import axios from 'axios'

const trendPoints = [
    {
        endpoint: '/trending/tv/week',
        type: 'tv',
        contents: 'seriesWeek'
    },
    {
        endpoint: '/trending/movie/week',
        type: 'movie',
        contents: 'moviesWeek'
    }
];

//ricerca film e serie
export function getTrend(){
    trendPoints.forEach(obj => {
        axios.get(`${data.baseURI}` + obj.endpoint,{
            params:{
                api_key: data.apiKey,
                language: data.lg,
            }
        })
        .then(res =>{
            data.trending[obj.contents] = res.data.results
        })
        .catch(err => {
            console.warn(err.response)
        })
    })
}

//ricerca film e serie
export function getMovies(genre){
    const value = data.inputSearch.trim()
    if(value != ''){
        axios.get(`${data.baseURI}` + genre,{
            params:{
                api_key: data.apiKey,
                language: data.lg,
                query: data.inputSearch,
                include_adult: data.adult
            }
        })
        .then(res =>{
            if(genre === data.movie){
                data.moviesFilm = res.data.results
            }else{
                data.seriesTv = res.data.results
            }
        })
        .catch(err => {
            console.warn(err.response)
        })
    }else{
        data.moviesFilm = [],
        data.seriesTv = []
    }
}