import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchPoplarMovies = () =>{
    return api.get(`/movie/popular`);
}

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPoplarMovies,
        suspense: true,
        useErrorBoundary: true,
        select:(result)=> result.data,
    })
}