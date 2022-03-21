<template>

    <section class="card__wrapper">
        <h2>{{title}}</h2>
        <CardItem v-for="movie in selectStore" :key="movie.id" :element="movie" />
    </section>
    
</template>


<script>
import store from '../../store.js'
import CardItem from '../commons/CardItem.vue'

export default{
    name:'CardWrapper',

    props:{
        title: String,
        selectStore:{
            type: Array,
            required: true
        }
    },

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