import React from 'react';
import FilterValuation from './components/FilterValuation';
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { UserProvider } from './contexts/UserContext';

function App() {
    
    return (
        <div>
            <UserProvider>
                    <NavBar /> 
                    <FilterValuation />             
                    <MovieList />
            </UserProvider>
        </div>
  );
}

export default App;
