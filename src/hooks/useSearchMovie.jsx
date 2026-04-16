import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchSearchMovie = ({keyword, page, genre, sort}) => {
    let url = `/discover/movie?page=${page}`;

    if(keyword){
        url = `/search/movie?query=${keyword}&page=${page}`;
        api.get(url);
    } 

    if(genre){
        url += `&with_genres=${genre}`;
    }

    if (sort === "popular") {
        url += `&sort_by=popularity.desc`;
    } else if (sort === "rate") {
        url += `&sort_by=vote_average.desc`;
    } else if (sort === "latest") {
        url += `&sort_by=release_date.desc`;
    }

    return api.get(url);
}

export const useSearchMovieQuery = ({keyword, page, genre, sort}) => {
    return useQuery({
        queryKey:['movie-search', {keyword, page, genre, sort}],
        queryFn: () => fetchSearchMovie({keyword, page, genre, sort}),
        suspense: true,
        useErrorBoundary: true,
        select: (result) => result.data
    })
}
