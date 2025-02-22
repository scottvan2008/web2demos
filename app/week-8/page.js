"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");

    const getRandomDog = async (breed) => {
        const response = breed
            ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random
        `)
            : fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        const url = data.message;
        setRandomDogUrl(url);
    };

    const getDogBreeds = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message);
        setDogBreeds(breeds);
    };

    const handleBreedChange = (event) => {
        setSelectedBreed(event.target.value);
    };

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []);

    useEffect(() => {
        if (selectedBreed === "") return;
        getRandomDog(selectedBreed);
    }, [selectedBreed]);

    return (
        <div>
            <h1>Week 8</h1>
            <div>
                <select onChange={handleBreedChange}>
                    {dogBreeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>
            <p>
                <img src={randomDogUrl} />
            </p>
        </div>
    );
}
