<template>

    <section class="search-wrapper">
        <input type="text" id="searchMovie">
    </section>
    
</template>


<script>
export default {
    name: 'BoolSearch',    
}
</script>


<style lang="scss" scoped>
.search-wrapper{

    #searchMovie{
        width: 270px;
        height: 34px;
        padding: 6px;
        background-color: transparent;
        color: white;
        border: 1px solid red;
    }
}
</style>