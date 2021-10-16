const API_KEY = "e57f0bd18fd6eb7375e929da68f06ded"; //TMDB API KEY (https://www.themoviedb.org/settings/api)

// API request
const requests={
    fetchTrending : `/trending/movie/week?api_key=${API_KEY}`,  //https://developers.themoviedb.org/3/trending/get-trending
    fetchNetflixOrignal:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_network=22803`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}`,

}

export default requests;