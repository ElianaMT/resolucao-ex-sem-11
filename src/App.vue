<template>
  <Header />
  
  <FormularioNovoMedicamento @cadastrar ="AdicionaMedicamento" />
  <div class="container1">

    <CardMedicamento v-if="!!listaMedicamentos" 
    v-for="medicamento in listaMedicamentos" 
    :key="medicamento.id"
      @favoritar="FavoritarMedicamento" 
      :nome="medicamento.nome" 
      :laboratorio="medicamento.laboratorio"
      :preco="medicamento.preco" 
      :id="medicamento.id" />

  </div>

  <router-view></router-view>
</template>
  
<script >
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header.vue"
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento/index.vue"
import CardMedicamento from "./components/CardMedicamento/index.vue"

export default {
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento
  },

  data() {
    return {
      listaMedicamentos: []
    }
  },

  methods: {
    AdicionaMedicamento(nome, laboratorio, preco) {
      if (nome === "" || laboratorio === "" || preco === 0) {
        alert("Preencha todos os dados")
        return
      }

      const novoMedicamento = {
        id: uuidv4(),
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false
      }

      this.listaMedicamentos.push(novoMedicamento)

    },
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
  
<style scoped>
.container1 {
  display: flex;
  flex-wrap: wrap;
  widows: 100vw;
  padding: 1em;
}
</style>
  