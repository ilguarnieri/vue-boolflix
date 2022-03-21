<template>

    <section>
        <CardWrapper title="Film" :selectStore="store.moviesFilm" />
        <CardWrapper title="Serie" :selectStore="store.seriesTv" />
    </section>
    
</template>

<script>
import store from '../../store.js'
import CardWrapper from '../commons/CardWrapper.vue'

export default{
    name: 'BoolMain',
    
    components: {
        CardWrapper
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