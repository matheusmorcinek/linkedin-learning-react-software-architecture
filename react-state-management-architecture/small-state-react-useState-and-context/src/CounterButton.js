import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { CounterContext } from "./CounterContext";

export const CounterButton = () => {

    const { numberOfClicks, increment } = useContext(CounterContext);
    const [incrementBy, setIncrementBy] = useState(1);

    return (
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <label>
                Increment By:
                <input
                    value={incrementBy}
                    onChange={e => setIncrementBy(Number(e.target.value))}
                    type='number'
                >
                </input>
            </label>
            <button onClick={() => increment(incrementBy)}>Click</button>
        </>
    )
};