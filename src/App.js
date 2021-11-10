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

    const handleIncrease = () => {
        setCount(count + 1);
        utils.putData(count);
    };

    const handleDecrease = () => {
        setCount(count - 1);
        utils.putData(count);
    };

    const handleChange = (e) => {
        setCount(Number(e.target.value));
        utils.putData(count);
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
