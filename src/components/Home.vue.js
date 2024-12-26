import axios from 'axios';
import collect from 'collect.js';
export default (await import('vue')).defineComponent({
    name: 'Home',
    data: () => {
        return {
            pokemon: null,
            pokemonName: '',
            pokemonTypes: null,
            status: null,
        };
    },
    methods: {
        async fetchPokemon() {
            try {
                if (!this.pokemonName) {
                    alert('Informe o Nome do Pokemon');
                    return false;
                }
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`);
                this.pokemon = response.data;
                this.pokemon.height = this.pokemon.height / 10;
                this.pokemon.weight = this.pokemon.weight / 10;
                this.getTypesPokemons(this.pokemon.types);
                this.getStatusPokemon(this.pokemon.stats);
            }
            catch (error) {
                alert('Pokémon não encontrado');
                this.pokemon = null;
            }
        },
        getTypesPokemons(pokemonType) {
            let types = [];
            collect(pokemonType).filter(pokemon => {
                types.push(pokemon.type.name);
            });
            this.pokemonTypes = types.join(', ');
        },
        getStatusPokemon(status) {
            let stat = {};
            collect(status).filter(s => {
                stat[s.stat.name] = s.base_stat;
            });
            this.status = stat;
        }
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("menu") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onKeyup: (__VLS_ctx.fetchPokemon) }, type: ("text"), ...{ class: ("search") }, value: ((__VLS_ctx.pokemonName)), placeholder: ("Pesquise aqui o Seu Pokemon!!!"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.fetchPokemon) }, ...{ class: ("searchButton") }, });
    if (__VLS_ctx.pokemon) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title") }, });
        (__VLS_ctx.pokemon.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("images") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("image") }, src: ((__VLS_ctx.pokemon.sprites.front_default)), alt: ("Imagem do Pokémon"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("information") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-home") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stats") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.pokemon.id);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.pokemon.height);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.pokemon.weight);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.pokemonTypes);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("status") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("stats") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-bomb") }, });
        (__VLS_ctx.status.attack);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-heart") }, });
        (__VLS_ctx.status.hp);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-shield") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (__VLS_ctx.status.defense);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fa-solid fa-bolt") }, });
        (__VLS_ctx.status.speed);
    }
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['searchButton'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['images'];
    __VLS_styleScopedClasses['image'];
    __VLS_styleScopedClasses['information'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-home'];
    __VLS_styleScopedClasses['stats'];
    __VLS_styleScopedClasses['status'];
    __VLS_styleScopedClasses['stats'];
    __VLS_styleScopedClasses['fa-solid'];
    __VLS_styleScopedClasses['fa-bomb'];
    __VLS_styleScopedClasses['fa-solid'];
    __VLS_styleScopedClasses['fa-heart'];
    __VLS_styleScopedClasses['fa-solid'];
    __VLS_styleScopedClasses['fa-shield'];
    __VLS_styleScopedClasses['fa-solid'];
    __VLS_styleScopedClasses['fa-bolt'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
