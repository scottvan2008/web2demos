import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Web 2 Demos</h1>
            <p>Web 2 Demos</p>
            <p>
                Link to week 2: <Link href="week-2">Week 2</Link>
            </p>
            <p>
                Link to week 3: <Link href="week-3">Week 3</Link>
            </p>
        </div>
    );
}
