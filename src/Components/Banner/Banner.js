import React,{ useState, useEffect } from "react";
import axios from '../../Auth/TMDB_API/axios';
import requests from "../../Auth/TMDB_API/request";
import  '../Banner/banner.css';

function Banner(){

    /* const base_url=`https://image.tmdb.org/t/p/original/`; */

    const [movie,setMovie] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            const res = await axios.get(requests.fetchNetflixOrignal);
            /* console.log('Banner data :',res.data.results) */
            /* setmovies(res.data.results); */
            setMovie(
                res.data.results[Math.floor(Math.random()*res.data.results.length-1)]
            );
            return res;
        }

        fetchData();

    },[]);

    console.log('Banner data :',movie);

    //Truncate Movie Description
    function truncateString(str, num) {
        if (str?.length > num) {
            console.log('str length:',str.length)
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

    return(
        <>
            {/* <h1>Banner Area</h1> */}
            <div className="banner" 
                style={{
                    backgroundSize:'cover',
                    backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                    backgroundPosition:'center top',
                    }}>
                <div className="banner-content">
                    <h1 className="movie-title">{movie?.title || movie?.original_title ||movie?.name}</h1>
                    <p className="movie-desc">{truncateString(movie?.overview,180)}</p>
                    <div className="movie-buttons">
                        <button className="btn"><span class="fas fa-play "></span> Play</button>
                        <button className="btn bg-light"><span class="fas fa-info-circle "></span> More Info</button>
                    </div>
                </div>
                <div className="banner-fade"></div>
            </div>
        </>
    )
}

export default Banner