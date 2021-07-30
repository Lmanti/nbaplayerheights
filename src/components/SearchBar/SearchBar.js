import React, { useEffect, useState } from "react";
import Players from "../Players/Players.js";
import style from "./SearchBar.module.css";
import ball from "../../img/button.png";

const SearchBar = () => {
  const [players, setPlayer] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  
  useEffect(() => {
    return fetch("https://mach-eight.uc.r.appspot.com")
            .then(res => res.json())
            .then(json => setPlayer(json.values))
  }, []);
  
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let aux = [];
    let i = 0;
    let j = i + 1;
    while (i < (players.length) - 1) {
      if (j > players.length) {
        i++;
        j = i + 1;
      }
      else {
        if (j < players.length && Number(players[i].h_in) + Number(players[j].h_in) === Number(input)) {
          aux.push(`${players[i].first_name} ${players[i].last_name} - ${players[j].first_name} ${players[j].last_name}`);
          j++;
        }
        else j++;
      }
    };
    if (aux.length) setResult(aux);
    else setResult("Empty");
    setInput("");
  };

  return (
    <div className={style.container} >
        <form onSubmit={handleSubmit} className={result.length ? `${style.form} ${style.formChange}` : style.form} >
            <input type="number" onChange={handleInput} value={input} className={style.searchBar} ></input>
            <button className={style.button} >
              <img src={ball} alt="" ></img>
            </button>
        </form>
        <Players result={result} />
    </div>
  );
}

export default SearchBar;