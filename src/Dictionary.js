import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"

export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse (response) {
    setResults(response.data[0]);
  }

  function search(event){
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <header className="App-header"> Dictionary </header>
        <h2 className="subheader"> What word do you want to search? </h2>
        <form onSubmit={search}>
          <input 
          className="WordSearch"
          placeholder="Search word..."
          type="search" 
          onChange={handleKeywordChange}
          />
          <button type="submit">🔎</button>
        </form>
      </section>

      <Results results={results} />
    </div>
  );
}