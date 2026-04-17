import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../utils/api'

const fetchMovieVideo = ({id}) => {
  return api.get(`/movie/${id}/videos`)
}

export const useMovieVideoQuery = ({id}) => {
    
    return useQuery({
        queryKey: ['movie-video', {id}],
        queryFn: () => fetchMovieVideo({id}),
        select: result => result.data, 
        suspense: true,
        useErrorBoundary: true,
    })
}