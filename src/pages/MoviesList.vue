<template>
  <div class="videos-container">
    <ul>
      <li v-for="movie in moviesList" :key="movie.id">
        <MovieItem :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem";
import { GET_MOVIES } from "../store/actions.type";
export default {
  computed: {
    moviesList() {
      return this.$store.state.moviesList;
    },
  },
  async mounted() {
    this.$store.dispatch(GET_MOVIES);
  },
  components: {
    MovieItem,
  },
};
</script>

<style scoped>
.videos-container {
  background: #eee;
  width: 600px;
  margin: 0 auto;
}

.videos-container li {
  list-style-type: none;
  padding: 2rem;
}

.videos-container ul li {
  border-bottom: 10px;
}

.videos-container:last-child {
  border-bottom: 0;
}</style
>>
