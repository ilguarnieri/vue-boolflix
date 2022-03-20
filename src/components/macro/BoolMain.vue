<template>

    <section>
        <ul class="movie__wrapper">
            <li v-for="movie in store.searchArray" :key="movie.id" class="movie__card">
                <p>{{movie.title}}</p>
                <p>{{movie.original_title}}</p>
                <p>{{movie.original_language}}</p>
                <p>{{movie.vote_average}}</p>
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
            store
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
    }
}
</style>