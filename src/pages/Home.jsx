import { useState, useRef, useCallback } from 'react';
import { useDebounce } from '../Hooks/useDebounce';
import { useMovies } from '../Hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { Search } from 'lucide-react';

export default function Home() {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const debouncedSearch = useDebounce(query, 500);

    const { movies, hasMore, loading } = useMovies(debouncedSearch, page);

    const observer = useRef();
    const lastElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prev => prev + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPage(1);
    };

    return (
        <div className="p-6 bg-gray-900 min-h-screen">
            <div className="relative max-w-2xl mx-auto mb-10">
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700"
                    onChange={handleSearch}
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={`${movie.id}-${index}`}
                        movie={movie}
                        innerRef={movies.length === index + 1 ? lastElementRef : null}
                    />
                ))}
            </div>
            {loading && <p className="text-center text-red-600 mt-4">Loading...</p>}
        </div>
    );
}