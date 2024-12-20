import {API_OPTION} from "../utils/constants";
import {addActionMovies} from "../utils/moviesSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useActionMovies = () => {

    const dispatch = useDispatch();
    const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/Action/`;
    API_OPTION.headers["x-rapidapi-host"] = "moviesminidatabase.p.rapidapi.com";

    const actionMovies = useSelector((store)=> store?.movies?.actionMovies);

    const getActionMovie = async () => {
    const response = await fetch(url, API_OPTION);
    const result = await response.json();
    dispatch(addActionMovies(result));
    };
    
    useEffect(() => {
        !actionMovies && getActionMovie();
    }, []);
}

export default useActionMovies;