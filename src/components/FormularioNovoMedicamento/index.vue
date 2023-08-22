<template>
    <h1 class="titulo">Formulario de Cadastro de Medicamentos</h1>

    <div class="d-flex">

        <v-text-field label="Nome Medicamento" type="text" v-model="medicamento" class="w-25 px-2"></v-text-field>
        <v-text-field label="Laboratorio" type="text" v-model="laboratorio" class="w-25 px-2"></v-text-field>
        <v-text-field label="Ingrese o preco" type="text" v-model="preco" class="w-25 px-2"></v-text-field>

        <v-btn color="success" class="me-2" size="x-large" @click="$emit('cadastrar', medicamento, laboratorio, preco)" 
        >
        Cadastrar Medicamento</v-btn>

    </div>
</template>

<script>
export default {
    data() {
        return {
            medicamento: "",
            laboratorio: "",
            preco: 0
        }
    }

}

</script>

<style scoped>

.titulo {
    padding: 50px;
    color: #000;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
}

</style>