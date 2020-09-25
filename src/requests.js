const API_KEY = "6ed5e402d66c7fc2a5c4b6b9b56ff66b";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovis: `/trending/all/week?api_key=${API_KEY}&language`,
    fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&language`,
    fetchHorroMovies: `/trending/all/week?api_key=${API_KEY}&language`,
    fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&language`,
    fetchDocumentarys: `/trending/all/week?api_key=${API_KEY}&language`
};


export default requests;