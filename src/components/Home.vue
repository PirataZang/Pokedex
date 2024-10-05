<template>
    <div class="menu">
        <input type="text" class="search" v-model="pokemonName" placeholder="Pesquise aqui o Seu Pokemon!!!" @keyup.enter="fetchPokemon"/>
        <button @click="fetchPokemon">Pesquisar</button>
    </div>
    
    <div v-if="pokemon" class="card">
      <h2 class="title">{{ pokemon.name }}</h2>
      <img :src="pokemon.sprites.front_default" alt="Imagem do Pokémon" />
      <p><strong>ID:</strong> {{ pokemon.id }}</p>
      <p><strong>Tipo(s):</strong> {{ pokemonTypes }}</p>
      <p><strong>Altura:</strong> {{ pokemon.height }}</p>
      <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
    </div>
</template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'Home',

    data: () => {
        return{
            pokemon: null,
            pokemonName: ''
        }
    },

    methods:{
        async fetchPokemon(){
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`);
                this.pokemon = response.data
                debugger
            } catch (error) {
                alert('Pokémon não encontrado')
                this.pokemon = null
            }
        },
    }
  }
  </script>