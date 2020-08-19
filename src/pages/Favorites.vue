<template>
  <div class="videos-container">
    <h1>Filmes favoritos</h1>
    <ul>
      <li v-for="movie in favorites" v-bind:key="movie.title">
        <p><strong>Favoritos:</strong>{{ movie.title }}</p>
        <p><strong>Overview:</strong>{{ movie.overview }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favs;
    },
  },
};
</script>

<style scoped></style>>
