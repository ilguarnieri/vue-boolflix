<template>

    <!-- input search -->
    <section class="search-wrapper">
        <input type="text" id="searchMovie" v-model="store.inputSearch" @keyup="setSearch">
    </section>
    
</template>


<script>
import store from '../../store.js'
import {getMovies} from '../../store.js'

export default {
    name: 'BoolSearch',

    data() {
        return{
            store
        }
    },

    methods:{
        setSearch: function(){
            getMovies(store.movie),
            getMovies(store.tv)
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
        background-color: transparent;
        border: 1px solid $clText;
        color: $clText;
    }
}
</style>