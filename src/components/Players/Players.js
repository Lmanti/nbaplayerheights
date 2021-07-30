import React from "react"

const Players = ({result}) => {
    return (
        <div>
            {
                result && result !== "Empty" && result.map((n, m) => (
                <h1 key={m} >{n}</h1>
                ))
            }
            {
                result === "Empty" && <h1>No matches found</h1>
            }
        </div>
    )
}

export default Players