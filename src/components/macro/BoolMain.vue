<template>

    <section>
        <div v-for="movie in store.searchArray" :key="movie.id">
            {{movie.original_title}}
        </div>       
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


</style>