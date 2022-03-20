<template>

    <header>
        <!-- logo -->
        <figure class="logoHeader">
            <img src="../../assets/img/logo.png" alt="logo">
        </figure>

        <!-- search bar -->
        <BoolSearch />
    </header>
    
</template>


<script>
import BoolSearch from '../commons/BoolSearch.vue'

export default{
    name: 'BoolHeader',
    components: {
        BoolSearch
    }
}
</script>


<style lang="scss" scoped>
header{
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    .logoHeader{
        width: 120px;
    }
}
</style>