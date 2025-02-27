
export default function Dashboard() {
    const test = ["title 1", "title 2", "title 3", "title 4"]

    return (
        <div className="p-16 flex flex-row gap-2 max-w-4xl mx-auto">
            {test.map((el, index) => (<div key={index}>{el}</div>))}
        </div>
    )
}