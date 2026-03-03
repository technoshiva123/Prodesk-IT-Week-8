import { useMovieContext } from '../context/MovieContext';
import { Heart } from 'lucide-react';

export default function MovieCard({ movie, innerRef }) {
    const { favorites, toggleFavorite } = useMovieContext();
    const isFavorite = favorites.some((m) => m.id === movie.id);
    const IMG_PATH = import.meta.env.VITE_TMDB_IMAGE_BASE;

    return (
        <div ref={innerRef} className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 relative group shadow-lg">
            <img
                src={movie.poster_path ? `${IMG_PATH}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster'}
                alt={movie.title}
                className="w-full h-80 object-cover"
                loading="lazy"
            />
            <button
                onClick={() => toggleFavorite(movie)}
                className="absolute top-3 right-3 p-2 bg-black/60 rounded-full backdrop-blur-sm transition hover:scale-110"
            >
                <Heart size={20} fill={isFavorite ? "red" : "none"} color={isFavorite ? "red" : "white"} />
            </button>
            <div className="p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold truncate text-white">{movie.title}</h3>
                <p className="text-gray-400 text-sm">{movie.release_date?.split('-')[0] || 'N/A'}</p>
            </div>
        </div>
    );
}