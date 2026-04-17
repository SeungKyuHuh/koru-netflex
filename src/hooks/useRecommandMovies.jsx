import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../utils/api'

const fetchMovieRecommand = ({movieId}) => {
  return api.get(`/movie/${movieId}/recommendations`)
}

export const useRecommandMoviesQuery = ({movieId}) => {

    return useQuery({
        queryKey: ['movie-recommand', {movieId}],
        queryFn: () => fetchMovieRecommand({movieId}),
        select: result => result.data, 
        suspense: true,
        useErrorBoundary: true,
    })
}