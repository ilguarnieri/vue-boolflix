<template>

    <div class="movie__card">

        <!-- copertina -->
        <figure>
            <img :src="getPoster">
        </figure>
        <!-- titolo -->
        <h3>{{title}}</h3>
        <!-- titolo originale -->
        <p>{{originalTitle}}</p>
        <!-- bandiera -->
        <figure class="movie__flag">
            <img :src="flags[element.original_language]">
        </figure>
        <!-- star voto -->
        <div class="star__vote">
            <i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote ? 'fa' : 'far'"></i>
        </div>        

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
            imgBaseURI: 'https://image.tmdb.org/t/p/',
            imgWidth: 'w342',
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

    computed:{
        //controllo titolo film serie
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
        },

         //recupero copertina
        getPoster: function(){
            const img = this.element.poster_path;
            if(img !== null){
                return this.imgBaseURI + this.imgWidth + img
            }
            return require('../../assets/img/notFind.jpg')
        },

        //trasformazione del voto
        vote: function(){
            return Math.ceil(this.element.vote_average / 2)
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

    .star__vote{
        color: #FED502;
    }
}

</style>