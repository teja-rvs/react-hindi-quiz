import React from 'react';

const NumberList = ( { data } ) => {
    return (
        <ul className="list-group w-50 mx-auto">
            {data.map((value) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={value.Arabic}>
                    <h1>{value.Hindi}</h1>
                    <span className="border border-dark p-3 mb-2 bg-info text-dark">{value.Arabic}</span>
                </li>
            ))}
        </ul>

    )
}

export default NumberList;