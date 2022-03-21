<template>

    <div class="movie__card">

        <!-- copertina -->
        <figure>
            <img :src="getPoster(element.poster_path)">
        </figure>

        <!-- titolo -->
        <h3>{{title}}</h3>
        <!-- titolo originale -->
        <p>{{originalTitle}}</p>
        <!-- bandiera -->
        <figure class="movie__flag">
            <img :src="flags[element.original_language]">
        </figure>
        <!-- voto -->
        <p>{{element.vote_average}}</p>        

    </div>
  

</template>

<script>
import store from '../../store.js'

export default{
    name: 'CardItem',

    props:{
        element:{
            type: Object,
            required: true
        }
    },

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
        //recupero copertina
        getPoster: function(value){
            if(value !== null){
                return `https://image.tmdb.org/t/p/w342/${value}`
            }
            return require('../../assets/img/notFind.jpg')
        }
    },

    computed:{
        title: function(){
            if(this.element.name !== undefined){
                return this.element.name
            }

            return this.element.title
        },
        originalTitle: function(){
            if(this.element.original_name !== undefined){
                return this.element.original_name
            }

            return this.element.original_title
        }
    }

   
}
</script>


<style lang="scss" scoped>

.movie__card{
    padding: 10px;
    border: 1px solid red;

    .movie__flag{
        max-width: 30px;
    }
}

</style>