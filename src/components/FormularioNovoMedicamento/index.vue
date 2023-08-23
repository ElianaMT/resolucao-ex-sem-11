<template>
    <h1 class="titulo">Formulario de Cadastro de Medicamentos</h1>

    <v-form ref="form" class="d-flex">

        <v-text-field 
        label="Nome Medicamento" 
        type="text" 
        v-model="medicamento" 
        class="w-25 px-2"
        :rules="[v => !!v || 'O nome é obrigatorio' ]"
        required
        ></v-text-field>

        <v-text-field 
        label="Laboratorio" 
        type="text" 
        v-model="laboratorio" 
        class="w-25 px-2"
        :rules ="[v => !!v || 'O nome do laboratorio é obrigatorio' ]"
        required
        ></v-text-field>

        <v-text-field 
        label="Ingrese o preco" 
        type="text" 
        v-model="preco" 
        class="w-25 px-2"
        :rules="[v => !!v || 'O preco é obrigatorio']"
        required
        ></v-text-field>

        <v-btn color="success" class="me-2" size="x-large" @click="AdicionarMedicamento">Cadastrar</v-btn>
       
    </v-form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
export default {
    data() {
        return {
            medicamento: "",
            laboratorio: "",
            preco: 0
        }
    },

    methods: {
        async AdicionarMedicamento() {
            const {valid} = await this.$refs.form.validate()
            if(!valid){ 
                return
            }

          
            const novoMedicamento = {
                id: uuidv4(),
                nome: this.medicamento,
                laboratorio: this.laboratorio,
                preco: this.preco,
                favorito: false
            }
            try {
                await axios.post(" http://localhost:50001/medicamentos", novoMedicamento)
                
            } catch (erro) {
                console.log(erro)
            }

          },
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