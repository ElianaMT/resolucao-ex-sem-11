<template>
    <div class="ma-5 d-flex justify-end">
        <router-link to="/novo-medicamento">
            <v-btn title="Adicionar mais medicamentos" variant="outlined" color="success">Cadastrar Medicamentos</v-btn>
        </router-link>
    </div>

    <div class="d-flex mx-5" >
        <CardMedicamento v-if="!!listaMedicamentos" 
        v-for="medicamento in listaMedicamentos" 
        :key="medicamento.id"
            @favoritar="FavoritarMedicamento" 
            :nome="medicamento.nome" :laboratorio="medicamento.laboratorio"
            :preco="medicamento.preco" :id="medicamento.id" />

    </div>
</template>

<script>
import CardMedicamento from "../components/CardMedicamento/index.vue"
import axios from "axios" 
export default {
    components: {
        CardMedicamento
    },
    data() {
        return {
            listaMedicamentos: []
        }
    },

    methods: {

        FavoritarMedicamento(id) {

            this.listaMedicamentos = this.listaMedicamentos.map(item => {

                if (item.id === id) {
                    item.favorito = !item.favorito
                }
                return item
            })
        }
    },
    mounted() {
        axios.get(" http://localhost:50001/medicamentos")
        .then(res => this.listaMedicamentos = res.data)
        .catch(erro => console.log(erro))
        
    }
}
</script>

