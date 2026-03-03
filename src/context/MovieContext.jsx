import { createContext, useState, useEffect, useContext } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('cine-favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cine-favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie) => {
        setFavorites((prev) => {
            const isFav = prev.find((m) => m.id === movie.id);
            if (isFav) {
                return prev.filter((m) => m.id !== movie.id);
            } else {
                return [...prev, movie];
            }
        });
    };

    return (
        <MovieContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);