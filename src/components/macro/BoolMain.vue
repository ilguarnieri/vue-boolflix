<template>

    <section>
        <ul class="movie__wrapper">
            <h1>Film</h1>
            <li v-for="movie in store.moviesFilm" :key="movie.id" class="movie__card">
                <p>{{movie.title}}</p>
                <p>{{movie.original_title}}</p>
                <div class="movie__flag">
                    <img v-if="flags[movie.original_language.toLowerCase()]" :src="flags[movie.original_language]">
                    <p v-else>{{movie.original_language.toUpperCase()}}</p>
                </div>
                <p>{{movie.vote_average}}</p>
            </li>
        </ul>    

        <ul class="movie__wrapper">
            <h1>Serie TV</h1>
            <li v-for="serie in store.seriesTv" :key="serie.id" class="movie__card">
                <p>{{serie.name}}</p>
                <p>{{serie.original_name}}</p>
                <div class="movie__flag">
                    <img v-if="flags[serie.original_language.toLowerCase()]" :src="flags[serie.original_language]">
                    <p v-else>{{serie.original_language.toUpperCase()}}</p>
                </div>
                <p>{{serie.vote_average}}</p>
            </li>
        </ul>   
    </section>
    
</template>

<script>
import store from '../../store.js'

export default{
    name: 'BoolMain',
    data(){
        return{
            store,
            flags:{
                de: require('../../assets/img/flags/de.png'),
                en: require('../../assets/img/flags/en.png'),
                es: require('../../assets/img/flags/es.png'),
                fr: require('../../assets/img/flags/fr.png'),
                it: require('../../assets/img/flags/it.png'),
                ja: require('../../assets/img/flags/ja.png')
            }
        }
    },
    methods:{
        chooseFlag: function(){
            console.log('a')
        }
    }
}
</script>


<style lang="scss" scoped>
.movie__wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    .movie__card{
        padding: 10px;
        border: 1px solid red;

        .movie__flag{
            max-width: 30px;
        }
    }
}
</style>