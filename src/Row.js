import React, { useState, useEffect } from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

    // if [], run once the row loads, and don`t run again
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        };
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters"></div>
            {/* row__posters */}
            {movies.map(movie => (
                <img 
                    className="row__poster" 
                    src={`${base_url}${movie.poster_path}`} 
                    alt={movie.name} 
                />
            ))}
        </div>
    )
}

export default Row;
