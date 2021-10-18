import './App.css';
import MovieList from "./Components/MovieList/MovieList";
import requests from './Auth/TMDB_API/request';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {/* <h1>Nteflix clone</h1> */}
      <MovieList title="Trending Movie" fetchURL={requests.fetchTrending} isPopular={true}/>
      <MovieList title="Netflix Orignal" fetchURL={requests.fetchNetflixOrignal}/>
      <MovieList title="Top Rated Movie" fetchURL={requests.fetchTopRated}/>
      <MovieList title="Action Movie" fetchURL={requests.fetchActionMovies}/>
      <MovieList title="Comedy Movie" fetchURL={requests.fetchComedyMovies}/>
      <MovieList title="Horror Movie" fetchURL={requests.fetchHorrorMovies}/>
      <MovieList title="Romance Movie" fetchURL={requests.fetchRomanceMovies}/>
      <MovieList title="Documentaries Movie" fetchURL={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
