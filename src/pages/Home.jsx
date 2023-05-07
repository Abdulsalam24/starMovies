import { useContext, useEffect } from "react";
import Popular from "../components/home/Popular";
import Spinner from "../components/Loader";
import MovieContext from "../context/MovieContext";
import RefreshPage from "../components/RefreshPage";
import Nav from "../components/TopNav";
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
    <>
      <Nav />
      <Popular />
      <BottomNav />
    </>
  );
};

export default Home;
