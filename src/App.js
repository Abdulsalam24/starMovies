import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { MovieContextProvider } from './context/MovieContext';
import { SearchContextProvider } from './context/SearchContext';
import Home from './pages/Home'
import MovieSearch from './pages/MovieSearch';
import SingleMovie from './pages/SingleMovie/SingleMovie';
import MovieCast from './pages/showMore/MovieCast';
import ShowMore from './pages/showMore';

export const movieUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

function App() {

    return (
        <>
            <Router>
                <MovieContextProvider>
                    <SearchContextProvider>
                        <div className="app relative">
                            <Routes>
                                <Route path='/' exact element={<Home />} />
                                <Route path='/movie-search/:search' element={<MovieSearch />} />
                                <Route path='/singleMovie/:id/:type' element={<SingleMovie />} />
                                <Route path='/singleMovie/:viewMore/:id/:type' element={
                                    <ShowMore>
                                        <MovieCast />
                                    </ShowMore>
                                } />
                            </Routes>
                        </div>
                    </SearchContextProvider>
                </MovieContextProvider>
            </Router>
        </>
    )
}

export default App



