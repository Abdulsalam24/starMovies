import { useContext, useEffect } from "react";
import Popular from "../components/home/Popular";
import Spinner from "../components/Spinner";
import MovieContext from "../context/MovieContext";
import RefreshPage from "../components/RefreshPage";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";

const Home = () => {
  const { fetchMovies, isLoading, isError } = useContext(MovieContext);

  useEffect(() => {
    fetchMovies("movie");
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <RefreshPage />;
  }

  return (
    <div>
      <Nav />
      <Popular />
      <BottomNav />
    </div>
  );
};

export default Home;
