"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newId = Math.floor(Math.random() * 1000);
        const newDog = { id: newId, name, age };
        onAddDog(newDog);
        setName("");
        setAge(0);
    };

    return (
        <div>
            <h2 className="text-2xl">Add a Dog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(event) =>
                            setAge(parseInt(event.target.value))
                        }
                    />
                </div>
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}
