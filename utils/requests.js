/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default{
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=30`
    },
    fetchMysteryMovies:{
        title:'Mystery',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=40`
    },
    fetchFantasyMovies:{
        title:'Fantasy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=50`
    },
    fetchThrillerMovies:{
        title:'Thriller',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=60`
    },
    fetchSciFiMovies:{
        title:'Science Fiction',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=70`
    },
    fetchAnimationMovies:{
        title:'Animation',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=80`
    },
    fetchTVSeries:{
        title:'TV Series',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=100`
    },
    fetchTV:{
        title:'TV Movies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=300`
    },
}