<template>
    <header>
        <router-link to="/">
            <img src="../assets/logo.jpg" width="90" alt="logo" >         
       
        </router-link>   

    </header>
</template>

<script>

import { RouterLink } from "vue-router"

export default {
    components: {
        RouterLink
    }
}

</script>

<style scoped>
header {
    display: 100%;
    height: 90px;
    background-color: #5cb85c;

}


</style>