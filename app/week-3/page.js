import Dog from "./dog";

export default function Page() {
    const dog1 = {
        name: "Fido",
        age: 5,
        breed: "Golden Retriever",
        color: "Golden",
    };
    const dog2 = {
        name: "Spot",
        age: 3,
        breed: "Dalmatian",
        color: "White with black spots",
    };
    const dog3 = {
        name: "Rex",
        age: 10,
        breed: "German Shepherd",
        color: "Black and tan",
    };

    return (
        <main>
            <h1 className="text-3xl font-bold">Meet the dogs</h1>
            <Dog
                name={dog1.name}
                age={dog1.age}
                breed={dog1.breed}
                color={dog1.color}
            />
            <Dog
                name={dog2.name}
                age={dog2.age}
                breed={dog2.breed}
                color={dog2.color}
            />
            <Dog
                name={dog3.name}
                age={dog3.age}
                breed={dog3.breed}
                color={dog3.color}
            />
        </main>
    );
}
