import { Link } from 'react-router-dom';
import { Clapperboard, Heart } from 'lucide-react';
import { useMovieContext } from '../context/MovieContext';

export default function Navbar() {
    const { favorites } = useMovieContext();

    return (
        <nav className="flex justify-between items-center p-6 bg-black text-white sticky top-0 z-50 border-b border-gray-800">
            <Link to="/" className="text-2xl font-bold text-red-600 flex items-center gap-2">
                <Clapperboard /> CINE-STREAM
            </Link>

            <Link to="/favorites" className="relative flex items-center gap-2 hover:text-red-500 transition group">
                <div className="relative">
                    <Heart size={24} className="group-hover:scale-110 transition-transform" />

                    {favorites.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-black animate-in fade-in zoom-in duration-300">
                            {favorites.length}
                        </span>
                    )}
                </div>
                <span className="hidden sm:block font-medium">My Favorites</span>
            </Link>
        </nav>
    );
}