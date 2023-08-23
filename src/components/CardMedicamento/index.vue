<template>
    
        <v-card elevation="5" class="mx-3">
            <template v-slot:title>
                <div class="d-flex justify-end">
                    <v-btn variant="text" :icon="favorito ? 'mdi-heart' : 'mdi-heart-outline'" color="teal-lighten-1" @click="$emit('favoritar', id)"></v-btn>
                </div>                
            </template>
        
        <v-card-text class="d-flex flex-column">
        <img :width="120" src="https://s3.ppllstatics.com/elcorreo/www/multimedia/2023/03/20/medicamentos-faltan-farmacias-k7LE-U190957054944cXD-1200x840@El%20Correo.jpeg" alt="imagen do medicamento">
        <p> <span class="font-weight-bold">Nome:</span> {{nome}} </p>
        <p> <span class="font-weight-bold">Laboratorio:</span> {{laboratorio}} </p>
        <p> <span  class="font-weight-bold">Preco: </span> {{preco}} </p>
        </v-card-text>
        </v-card>                
   
</template>

<script>
export default {
    props: ["nome", "laboratorio", "preco", "favorito", "id"]
}
</script>


<style scoped>

.card {
    display: flex;
    flex-direction: column;
    width: calc(100% / 4 -2em);
    margin: 1em;
    background-color: #c4c4c4;
}

</style>