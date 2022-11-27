import { useState } from 'react';

function Search() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/cocktails/' + name;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Search