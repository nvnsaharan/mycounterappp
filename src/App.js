import { useEffect, useState } from "react";
import Counter from "./Components/Counter";
import CounterValue from "./Components/CounterValue";
import "./App.css";

import { utils } from "./Utils";

function App() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        utils.getData(setCount);
        return () => {};
    }, []);

    useEffect(() => {
        utils.putData(count);
        return () => {};
    }, [count]);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    const handleChange = (e) => {
        setCount(Number(e.target.value));
    };

    return (
        <div className="App">
            <Counter
                value={count}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleChange={handleChange}
            />
            <CounterValue value={count} />
        </div>
    );
}

export default App;
