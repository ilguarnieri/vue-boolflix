<template>

    <section class="container">

        <div v-if="!data.inputSearch.length > 0">
            <CardWrapper title="I film del momento" :selectArray="data.trending.moviesWeek" />
            <CardWrapper title="Le serie TV del momento" :selectArray="data.trending.seriesWeek" />
        </div>

        <div v-else-if="data.moviesFilm.length > 0">
            <h1>Risultati della ricerca</h1>
            <CardWrapper title="Film" :selectArray="data.moviesFilm" />
            <CardWrapper title="Serie Tv" :selectArray="data.seriesTv" />
        </div>

        <div v-else class="no__results">
            <p>Nessun risultato per la ricerca di "{{data.inputSearch}}".</p>
            <p>Suggerimenti:</p>
            <ul>
                <li>
                    Prova con parole chiave diverse 
                </li>
                <li>
                    Cerchi un film o un programma TV?
                </li>
                <li>
                    Prova ad usare il titolo di un film o programma TV
                </li>
            </ul>
        </div>
    </section>
    
</template>

<script>
import data from '../../store/data'
import {getTrend} from '../../store/apiCalls.js'
import CardWrapper from '../commons/CardWrapper.vue'

export default{
    name: 'BoolMain',
    
    components: {
        CardWrapper
    },

    data(){
        return{
            data,
        }
    },

    created(){
        getTrend()
    }
}
</script>


<style lang="scss" scoped>

.container{
    padding: 30px;

    .no__results{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & > *{
            margin-bottom: 10px;
        }

        ul{
            list-style: inside;
        }
    }
}

</style>