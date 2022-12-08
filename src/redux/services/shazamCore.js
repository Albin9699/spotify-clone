import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders:(headers)=>{
                headers.set('X-RapidAPI-Key', '7e14274e32msh72bb6dca2786629p176033jsne576f4045bc4');
                return headers;
            },
        }),
        endpoints:(builder) => ({
            getTopCharts: builder.query({query:()=>'/charts/world'}),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
            getSongDetails: builder.query({query:({ songid })=>`/tracks/details?track_id=${ songid }`}),
            getSongRelated:builder.query({query:({ songid })=>`/tracks/related?track_id=${ songid }`}),
            getArtistDetails:builder.query({query:( artistId )=>`/artists/details?artist_id=${artistId}` }),
            getSongByCountry:builder.query({query:( countryCode )=>`/charts/country?country_code=${countryCode}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        }),
        });
    
  
    export const {
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongsBySearchQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongByCountryQuery,
    } = shazamCoreApi;