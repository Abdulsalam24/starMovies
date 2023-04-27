import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { MovieContextProvider } from './context/MovieContext';
import Home from './pages/Home'
import MovieSearch from './pages/MovieSearch';
import SingleMovie from './pages/SingleMovie';
import BottomNav from './components/BottomNav';

function App() {

    return (
        <>
            <Router>
                <MovieContextProvider>
                    <div className="app relative">
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                            <Route path='/movie-search/:search' exact element={<MovieSearch />} />
                            <Route path='/singleMovie/:id/:type' exact element={<SingleMovie />} />
                        </Routes>
                    </div>
                </MovieContextProvider>
            </Router>
        </>
    )
}

export default App



