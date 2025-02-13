"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // 0 is the initial value of the counter, it returns an array with two elements:
    //count and setCount, const is the current value of the counter and setCount is the function that updates the value of the counter.

    const increment = () => setCount(count + 1); // increment function that increases the value of the counter by 1
    if (count === 10) {
        alert("You've reached the maximum value of 10!"); // alert message when the counter reaches
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button
                onClick={increment}
                className="p-2 m-2 bg-blue-500 hover:bg-blue-300 active:bg-yellow-400 w-38 rounded"
            >
                Increment
            </button>
        </div>
    );
}
