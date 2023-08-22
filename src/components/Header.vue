<template>          
    <header>
        <router-link to="/">
           FARMACIA Z
        </router-link>
    </header>
          
</template>

<script>

import {RouterLink} from "vue-router"

export default{
    components: { 
        RouterLink
    }
 }

</script>

<style scoped>
header{ 
    display: 100%;
    height: 75px;
    background-color: rgb(141, 137, 137);
    
}

a{ 
    text-decoration: none;
    font-size: 2em;
    color: black;
    font-weight: bold;
    
}


</style>