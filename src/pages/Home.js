import { useState } from "react";
import InputNumber from "../components/InputNumber";
import SubmitButton from "../components/SubmitButton";

const Home = () => {
    // save state for user input 
    const [input, setInput] = useState(0)

    return <div className="home">
        <InputNumber setInput={setInput} />
        <SubmitButton input={input} />
    </div>
};

export default Home;
