import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className="p-8 bg-gray-900 min-h-screen">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">My Favorites</h2>
            {favorites.length === 0 ? (
                <p className="text-gray-400 text-center text-xl mt-20">No favorite movies added yet. Go explore!</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}