import React, {useState,useEffect} from 'react';
import axios from '../../Auth/TMDB_API/axios';
import  "../MovieList/movieList.css";
import YouTube from 'react-youtube';
import movieTralier from 'movie-trailer'

function MovieList({title,fetchURL,isPopular}) 
{
    const base_url=`https://image.tmdb.org/t/p/original/`;
    const [movies, setMovies] = useState([]); // for movie list
    const [trailerUrl,setTrailerUrl] = useState(""); // for movie trailer

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

    /* console.log("Movie List : ", movies) */

        //Youtube trailers opts
        const opts ={
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
        }

    const handleClick = (movie) =>{
        console.log('Handle click:',movie);
        if(trailerUrl){ // trailerUrl is open
            setTrailerUrl('');
        }else{
            movieTralier(movie?.title || "")
            .then((url)=>{
                console.log("Clicked URL",url)
                 //https://www.youtube.com/watch?v=SEyzZw7xiPo 
                 const urlParams = new URLSearchParams(new URL(url).search);
                 /* console.log("movie url :",urlParams); */
                 setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error)); 
        }
    }



    console.log("traile link,",trailerUrl);

    return ( 
        <>
            <div className="container">
                <h1 className="row_title">{title}</h1>
                <div className="poster_row">
                    {
                        movies.map(movie => (
                           <img 
                           key={movie.id}
                           className={`poster ${isPopular && "large_poster"}`}
                           src={`${base_url}${isPopular?movie.backdrop_path : movie.poster_path}`} 
                           alt={movie.title}
                           onClick={()=>handleClick(movie)} //for get movie
                           /> 
                        ))
                    }
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </>
    )
}

export default MovieList;