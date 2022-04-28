import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function(definition, index) { 
        return (
          <div key={index}> 
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      </section>
      
        <section>
          <Synonyms synonyms ={props.meaning.synonyms} />
          <br />
          <Antonyms antonyms={props.meaning.antonyms} />
        </section>
        
          
    </div>
  );
}