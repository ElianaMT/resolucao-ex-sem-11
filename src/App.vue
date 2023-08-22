<template>
  <Header />
  
  
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
import Header from "./components/Header.vue"
import CardMedicamento from "./components/CardMedicamento/index.vue"

export default {
  components: {
    Header,
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
  