<template>
    <h1 class="titulo">Formulario de Cadastro de Medicamentos</h1>

    <div class="container">


        <label for="medicamento">Nome do Medicamento</label>
        <input id="medicamento" type="text" placeholder="Medicamento" v-model="medicamento" >

        <label for="laboratorio">Nome do Laboratorio</label>
        <input id="laboratorio" type="text" placeholder="Laboratorio" v-model="laboratorio" >

        <label for="PRECO">Preco</label>
        <input id="preco" type="text" placeholder="Ingrese o preco" v-model="preco" >

        <button @click="$emit( 'cadastrar' ,medicamento,laboratorio,preco)" type="number">Cadastrar Medicamento</button>


    </div>
</template>

<script>
export default{
    data(){
        return {
            medicamento: "",
            laboratorio: "",
            preco:0
        }
    }

}

</script>

<style scoped>
.container {
   
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    padding: 30px 20px;
    gap: 10px;
}

.titulo {
    padding: 50px;
    color: #000;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
}

label {
    font-family: Comic Sans MS;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

input {
    color: var(--black, #000);
    font-family: Comic Sans MS;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.48px;
    height: 40px;
}

button {
    display: flex;
    width: 102px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--ffffff-white, #838282);
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

</style>