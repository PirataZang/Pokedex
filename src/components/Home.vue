<template>
    <div class="content">
        <div class="menu">
            <input type="text" class="search" v-model="pokemonName" placeholder="Pesquise aqui o Seu Pokemon!!!"
                @keyup.enter="fetchPokemon" />
            <button class="searchButton" @click="fetchPokemon">Pesquisar</button>
        </div>

        <div v-if="pokemon" class="card">
            <h2 class="title">{{ pokemon.name }}</h2>
            <div class="images">
                <img class="image" :src="pokemon.sprites.front_default" alt="Imagem do Pokémon" />
            </div>
            <div class="information">
                <div class="info">
                    <h2><i class="fas fa-home"></i> Informações</h2>
                    <div class="stats">
                        <p><b>ID:</b> {{ pokemon.id }}</p>
                        <p><b>Altura:</b> {{ pokemon.height }} m</p>
                        <p><b>Peso:</b> {{ pokemon.weight }} kg</p>
                        <p><b>Tipo: </b>
                            <span> {{ pokemonTypes }}</span>
                        </p>
                    </div>
                </div>

                <div class="status">
                    <h2>Status</h2>
                    <div class="stats">
                        <p><b>Ataque:</b> {{ status.attack }} </p>
                        <p><b><i class="fa-solid fa-heart"></i> HP:</b> {{ status.hp }} </p>
                        <p><i class="fa-solid fa-shield"></i> <b>Defesa:</b> {{ status.defense }} </p>
                        <p><b>Velocidade:</b> {{ status.speed }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import collect from 'collect.js';

export default {
    name: 'Home',

    data: () => {
        return {
            pokemon: null,
            pokemonName: '',
            pokemonTypes: null,
            status: null,
        }
    },

    methods: {
        async fetchPokemon() {
            try {
                if(!this.pokemonName){
                    alert('Informe o Nome do Pokemon');
                    return false
                }

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`);
                this.pokemon = response.data
                this.pokemon.height = this.pokemon.height / 10
                this.pokemon.weight = this.pokemon.weight / 10
                this.getTypesPokemons(this.pokemon.types)
                this.getStatusPokemon(this.pokemon.stats)

            } catch (error) {
                alert('Pokémon não encontrado')
                this.pokemon = null
            }
        },


        getTypesPokemons(pokemonType) {
            let types = []
            collect(pokemonType).filter(pokemon => {
                types.push(pokemon.type.name)
            })
            this.pokemonTypes = types.join(', ');
        },

        getStatusPokemon(status) {
            let stat = {}
            collect(status).filter(s => {
                stat[s.stat.name] = s.base_stat
            })
            this.status = stat

        }
    }
}
</script>