import { useState, useEffect } from 'react';
import tmdbApi from '../api/tmdb';

export function useMovies(query, page) {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setMovies([]);
    }, [query]);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(false);
            try {
                const url = query ? `/search/movie` : `/movie/popular`;
                const params = { page: page };
                if (query) params.query = query;

                const { data } = await tmdbApi.get(url, { params });

                setMovies((prev) => {
                    return [...new Set([...prev, ...data.results.map(m => m)])];
                });

                setHasMore(data.results.length > 0 && data.page < data.total_pages);
            } catch (err) {
                setError(true);
                console.error("API Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query, page]);

    return { loading, movies, hasMore, error };
}