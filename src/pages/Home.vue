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
export default {
    components: {
        CardMedicamento
    },
    data() {
        return {
            listaMedicamentos: [
                {
                    id: 1,
                    nome: "Paracetamol",
                    laboratorio: "Clamed",
                    preco: 20,
                    favorito: false
                }
            ]
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
    }
}
</script>

