<template>

    <section>
        <div>
            <h2>Film</h2>
            <CardItem v-for="movie in store.moviesFilm" :key="movie.id" :element="movie" />
        </div>

        <div>
            <h2>Series</h2>
             <CardItem v-for="serie in store.seriesTv" :key="serie.id" :element="serie" />
        </div>

    </section>
    
</template>

<script>
import store from '../../store.js'
import CardItem from '../commons/CardItem.vue'

export default{
    name: 'BoolMain',
    components: {
        CardItem
    },
    data(){
        return{
            store,
        }
    }
}
</script>


<style lang="scss" scoped>

</style>