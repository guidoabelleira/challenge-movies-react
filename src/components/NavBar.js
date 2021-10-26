import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';


const NavBar = () => {

    const { user, login, logout } = useContext(UserContext);

    // Referencia de API: https://developers.themoviedb.org/3/search/search-movies

    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <span className="navbar-brand mb-3">
                    <h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
                </span>
        
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                { user ? 
                    <button className="btn btn-primary" onClick={logout}>
                        Cerrar Sesion
                    </button>
                :
                    <button className="btn btn-primary" onClick={login}>
                        Iniciar Sesion
                    </button>
                    }

            </div>
        </nav>
    )
}

export default NavBar