import { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";

import '../assets/styles/searchInput.scss'

function SearchInput() {
  
  const { searchHandle } = useContext(MovieContext);
  const [text, setText] = useState("");

  const onSubmitSearch = (e) => {
    e.preventDefault();
    searchHandle(text);
    setText("")
  };

  return (
    <form onSubmit={onSubmitSearch}>
      <input
        type="text"
        placeholder="Search Movie"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onSubmitSearch}>search</button>
    </form>
  );
}

export default SearchInput;
