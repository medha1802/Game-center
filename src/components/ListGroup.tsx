function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    return (
        <div>
            <h1>List</h1>
            <ul className="list-group">
                {items.map((item) =>
                    <li>{item}</li>)}
            </ul>
        </div>
    );
}
export default ListGroup;