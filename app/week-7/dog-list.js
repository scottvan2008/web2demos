import Dog from "./dog.js";

export default function DogList({ dogs }) {
    return (
        <div>
            <h2>Dog List</h2>

            {/* IMPORTANT */}
            <ul>
                {dogs.map((dog) => (
                    <Dog key={dog.id} name={dog.name} age={dog.age} />
                ))}
            </ul>
        </div>
    );
}
