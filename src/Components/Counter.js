import React from "react";
import "./Counter.css";

function Counter(props) {
    return (
        <>
            <div className="saved_text">
                {props.saving ? "saving counter value" : "saved"}
            </div>
            <div className="counter">
                <button
                    className="counter_Item decrease"
                    onClick={props.handleDecrease}
                >
                    -
                </button>
                <input
                    className="counter_value_input"
                    type="number"
                    value={props.value}
                    onChange={props.handleChange}
                />
                <button
                    className="counter_Item increase"
                    onClick={props.handleIncrease}
                >
                    +
                </button>
            </div>
        </>
    );
}

export default Counter;
