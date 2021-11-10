import React from "react";
import "./Counter.css";

function CounterValue({ value }) {
    return (
        <div className="counter_value_div">
            <h3>Counter Value</h3>
            <h5>{value}</h5>
        </div>
    );
}

export default CounterValue;
