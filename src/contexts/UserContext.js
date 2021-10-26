import React, { createContext, useState } from 'react';

const UserContext = createContext();



const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    const login = () => {
        const setInitialUser = JSON.parse(localStorage.getItem('localMovie'))

        const initialUserBase = { id: 1, name: 'Guido', favoriteMovies: []}

        const initialUser = setInitialUser? setInitialUser : initialUserBase;
        
        setUser(initialUser);
    }

    const logout = () => {
        localStorage.setItem('localMovie', JSON.stringify(user));
        setUser(null)
    }

    const toggleFavoriteMovieToUser = (movieId) => {

        const isFavorite = user.favoriteMovies.includes(movieId);
        const favoriteMovies = isFavorite 
            ? user.favoriteMovies.filter(favMovieId => favMovieId !== movieId)
            : [...user.favoriteMovies, movieId];

        setUser({
            ...user,
            favoriteMovies
        })
    }

    const data = {user, login, logout, toggleFavoriteMovieToUser}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext;