<template>
  <div>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.overview }}</p>
    <div class="see-details">
      <router-link :to="'/movie/' + movie.id">Ver Detalhes </router-link>
    </div>
    <div class="add-to-fav" v-on:click="addToFav">
      Adicionar aos favoritos
    </div>
  </div>
</template>

<script>
import { INCLUDE_FAV } from "../store/actions.type";
export default {
  props: {
    movie: Object,
  },
  methods: {
    addToFav() {
      this.$store.dispatch(INCLUDE_FAV, this.movie);
    },
  },
};
</script>

<style>
.add-to-fav {
  cursor: pointer;
}
</style>
