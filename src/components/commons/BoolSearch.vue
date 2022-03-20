<template>

    <section class="search-wrapper">
        <input type="text" id="searchMovie" v-model="store.inputSearch" @keyup="getMovie()">
    </section>
    
</template>


<script>
import store from '../../store.js'
import axios from 'axios'

export default {
    name: 'BoolSearch',
    data() {
        return{
            store
        }
    },
    methods:{
        getMovie: function(){
            const value = store.inputSearch.trim()
            if(value != ''){
                axios.get(`${store.url}/search/movie`,{
                    params:{
                        api_key: store.apiKey,
                        language: `it-IT`,
                        query: store.inputSearch
                    }
                })
                .then(res =>{
                    store.searchArray = res.data.results
                })
                .catch(err => {
                    console.warn(err.response)
                })
            }else{
                store.searchArray = []
            }
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