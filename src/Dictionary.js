import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css"


export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});

  function handleResponse (response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }


  function search(event){
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }


  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <div className="col">
            <input 
            className="WordSearch"
            type="search" onChange={handleKeywordChange}
            />
            <Results results={results} />
          </div>
          <div className="col">
            <input 
            type="submit"
            className="SearchButton"
            value="Search"/>

          </div>

        </div>
      </form>
      
    </div>
  );
}