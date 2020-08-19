<template>
  <div>
    <div class="movie-detail">
      <h1>{{ movie.title }}</h1>
      <p><strong>Total de votos </strong>: {{ movie.vote_count }}</p>
      <div class="movie-description">
        {{ movie.overview }}
      </div>
    </div>
  </div>
</template>

<script>
import { MoviesService } from "../services/MoviesService";
export default {
  data() {
    return {
      movie: {},
    };
  },
  async mounted() {
    const movieId = this.$route.params.id;
    const { data } = await MoviesService.getMovieById(movieId);

    this.movie = data;
  },
};
</script>
>

<style>
.movie-detail {
  margin: 0 auto;
  max-width: 600px;
}</style
>>
