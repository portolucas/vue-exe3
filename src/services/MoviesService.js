import axios from "axios";

const API_KEY = "0ef0f39c3ffad8c8f4d8265e5960cb35";
export const getBaseUrl = (path) =>
  `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getTopRated() {
    return axios(getBaseUrl("movie/top_rated"));
  }

  static getMovieById(id) {
    return axios(getBaseUrl(`movie/${id}`));
  }
}
