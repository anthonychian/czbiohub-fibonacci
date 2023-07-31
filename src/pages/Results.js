import { useParams } from "react-router-dom";

const Results = () => {
    // get the input from the user located in the URL
    let { number } = useParams();

    return <>
        <h1>Results for {number}</h1>
        <h2>Fibonacci sequence...</h2>
    </>
};

export default Results;