import React from "react"
import style from "./Players.module.css"

const Players = ({result}) => {
    return (
        <div className={ result.length && style.container } >
            {
                result && result !== "Empty" && result.map((n, m) => (
                <h1 key={m} >{n}</h1>
                ))
            }
            {
                result === "Empty" && <h1 className={style.noMatch} >No matches found</h1>
            }
        </div>
    )
}

export default Players