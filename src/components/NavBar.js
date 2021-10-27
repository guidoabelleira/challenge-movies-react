import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { useDispatch } from 'react-redux';

import { searchMovies } from '../actions/index';


const NavBar = () => {

    const { user, login, logout } = useContext(UserContext);

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    
    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(searchMovies(input))
    }


    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <span className="navbar-brand mb-3">
                    <h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
                </span>
        
                <form className="d-flex">
                    <input className="form-control me-2" 
                    type="search" placeholder="Buscar" 
                    aria-label="Search"
                    onChange={(handleInputChange)}
                    />
                    <button className="btn btn-primary" 
                    type="submit"
                    onClick={handleSubmit}>
                        Buscar
                    </button>
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