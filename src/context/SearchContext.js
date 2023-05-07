import axios from 'axios'
import { createContext, useState } from "react";

const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {

    return (
        <SearchContext.Provider value={{
        }}>
            {
                children
            }
        </SearchContext.Provider>
    )
}

export default SearchContext