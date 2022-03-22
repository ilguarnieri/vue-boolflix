<template>

    <!-- input search -->
    <section class="search-wrapper">
        <input type="text" id="searchMovie" v-model="data.inputSearch" @keyup="setSearch" placeholder="Cerca un film o una serie TV">
    </section>
    
</template>


<script>
import data from '../../store/data.js'
import {getMovies} from '../../store/apiCalls.js'

export default {
    name: 'BoolSearch',

    data() {
        return{
            data
        }
    },

    methods:{
        setSearch: function(){
            getMovies(data.movie),
            getMovies(data.tv)
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.search-wrapper{

    #searchMovie{
        width: 270px;
        height: 34px;
        padding: 6px;
        font-size: 16px;
        background-color: transparent;
        border: 1px solid $clText;
        color: $clText;
    }
}
</style>