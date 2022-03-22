<template>
    <section>

        <div v-show="selectArray.length > 0 " class="category__section">
            <h2 class="category__title">{{title}}</h2>
            <div class="cards__wrapper">
                <CardItem v-for="movie in selectArray" :key="movie.id" :element="movie" />
            </div>
        </div>

    </section>    
</template>


<script>
import data from '../../store/data.js'
import CardItem from '../commons/CardItem.vue'

export default{
    name:'CardWrapper',

    props:{
        title: String,
        selectArray:{
            type: Array,
            required: true
        }
    },

    components: {
        CardItem
    },

    data(){
        return{
            data
        }
    }
}

</script>


<style lang="scss" scoped>

.category__section{
    margin-bottom: 50px;

    .category__title{
        margin-bottom: 20px;
    }

    .cards__wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
}

@media screen and (max-width: 597px){
    .cards__wrapper{
        justify-content: center;
    }
}

</style>