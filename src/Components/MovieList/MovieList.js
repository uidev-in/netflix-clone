import React, {useState,useEffect} from 'react';
import axios from '../../Auth/TMDB_API/axios';
import  "../MovieList/movieList.css";

function MovieList({title,fetchURL}) 
{
    const base_url=`https://image.tmdb.org/t/p/original/`;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //Fetch movie data from tmdb API

        async function fetchData() {
            const res = await axios.get(fetchURL);
            /* console.log(res); */
            console.log(res.data.results);
            setMovies(res.data.results);
            return res;
        }

        fetchData();

    }, [fetchURL]);

    console.log("Movie List : ", movies)

    return ( 
        <>
            <div className="container">
                <h1 className="row_title">{title}</h1>
                <div className="poster_row">
                    {
                        movies.map(movie => (
                           <img 
                           className="poster"
                           src={`${base_url}${movie.poster_path}`} 
                           alt={movie.title}/> 
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList;