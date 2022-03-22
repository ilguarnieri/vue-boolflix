<template>

    <header>
        <div class="container-fluid">
            <div class="col-12">
                <!-- logo -->
                <figure class="logoHeader">
                    <img src="../../assets/img/logo.png" alt="logo">
                </figure>

                <!-- search bar -->
                <BoolSearch />
            </div>
        </div>        
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
@import '../../assets/scss/_variables.scss';

header{
    position: sticky;
    top: 0;

    .container-fluid{
        background-color: rgba($bgAll,0.9);
        padding: 20px 60px;
        

        .col-12{
            display: flex;
            justify-content: space-between;
            gap: 10px;

            .logoHeader{
                max-width: 120px;
            }
        }
    }
}

@media screen and (max-width: 597px){
    .container-fluid{

        .col-12{
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>