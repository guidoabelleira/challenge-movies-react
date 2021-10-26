import React from 'react';
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { UserProvider } from './contexts/UserContext';

function App() {
    
    return (
        <div>
            <UserProvider>
                    <NavBar />              
                    <MovieList />
            </UserProvider>
        </div>
  );
}

export default App;
