import React, {useState} from "react"; 
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse (response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event){
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001fa63fce496924f408a3fcc56ce847356";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios 
      .get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <button type="submit" className="searchButton">🔎</button>
        </form>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}