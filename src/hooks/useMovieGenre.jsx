import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../utils/api'

const fetchGenreMovie = () => {
  return api.get('/genre/movie/list')
}

export const useMovieGenreQuery = () => {
    return useQuery({
        queryKey: ['movie-genre'],
        queryFn: fetchGenreMovie,
        select: result => result.data.genres, 
        suspense: true,
        useErrorBoundary: true,
        staleTime: 300000,
    })
}