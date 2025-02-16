"use client";

import { useState } from "react";

import dogsData from "./dogs.json";

export default function Page() {
    const [selectedDogId, setSelectedDogId] = useState(null);

    let dogs = [...dogsData];

    // dogs.sort((a, b) => {
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     return 0;
    // }

    dogs.sort((a, b) => a.name.localeCompare(b.name));

    //filter out the bad dogs
    dogs = dogs.filter((d) => d.id !== 3);

    const handleClick = (id) => {
        if (selectedDogId === id) {
            setSelectedDogId(null);
            return;
        }
        setSelectedDogId(id);
    };

    return (
        <main>
            <h1>Dogs</h1>
            <ul>
                {dogs.map((dog) => (
                    <li
                        key={dog.id}
                        onClick={() => handleClick(dog.id)}
                        className={`m-2 lg:max-w-md cursor-pointer ${
                            selectedDogId === dog.id ? "bg-blue-200" : ""
                        }`}
                    >
                        <div className="flex">
                            <img
                                src={dog.imageUrl}
                                alt={dog.name}
                                className="w-24 h24 object-cover rounded-md m-2"
                            />

                            <div className="flex-1">
                                <h2 className="text-xl">{dog.name}</h2>
                                <p className="text-sm text-gray-600">
                                    {dog.description}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>{selectedDogId}</div>
        </main>
    );
}
