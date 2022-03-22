<template>

    <div class="card__item"
    :style="{backgroundImage: `url(${getPoster})`}">

        <div class="card__overlay">
            <!-- titolo -->
            <h3>{{title}}</h3>

            <!-- titolo originale -->
            <p>{{originalTitle}}</p>

            <!-- bandiera -->
            <figure class="movie__flag">
                <img :src="flags[element.original_language]">
            </figure> 

            <!-- star voto -->
            <div v-show="element.vote_average > 0" class="star__vote">
                <span class="section__title">Voto: </span>
                <i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote ? 'fa gold' : 'far gray'"></i>
            </div>

            <!-- overview -->
            <div v-show="element.overview !== ''" class="section__overview">
                <span class="section__title">Overview: </span>
                <p class="overview__description">{{element.overview}}</p>

            </div>
        </div>

    </div>
</template>

<script>
import data from '../../store/data.js'

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
            data,
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
@import '../../assets/scss/_variables.scss';

.card__item{
    width: 250px;
    aspect-ratio: 2/3;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    overflow: auto;
    display: flex;
    flex-direction: column;

    .card__overlay{
        opacity: 0;;
        flex-grow: 1;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        background-color: rgba(0,0,0,0.7);

        .section__title{
            font-weight: bold;
        }

        .overview__description{
            color: $textGray;
        }

        .movie__flag{
            max-width: 30px;
        }

        .gold{
            color: gold;
        }

        .gray{
            color: gray;
        }
    }

    &:hover .card__overlay{
        animation: showOverlay 400ms linear;
        opacity: 1;
        position: relative;
    }
}

/* SCROLL-BAR STYLE */
::-webkit-scrollbar {
    width: 0px;
}

@keyframes showOverlay{
    0%{
        opacity: 0;
        top: 100%;
    }
    100%{
        opacity: 1;
        top: 0;
    }
}

</style>