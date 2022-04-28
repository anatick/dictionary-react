import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function(definition, index) { 
          return (
            <div key={index}> 
              <div className="definition">
                {definition.definition}
              </div>
              <div className="example">
                {definition.example}
              </div>
            </div>
          );
        })}
        <br />
        <Synonyms synonyms ={props.meaning.synonyms} />
        <br />
        <Antonyms antonyms={props.meaning.antonyms} />
      </section>
        
          
    </div>
  );
}