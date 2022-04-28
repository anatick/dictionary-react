import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

import "./Results.css"

export default function Results (props) {
  if (props.results) {
    return (
      <div className="Results"> 
        <section>
          <h3>{props.results.word}</h3>

          {props.results.phonetics
          .filter(function (phonetic) {
            return phonetic.audio;
          })
          .map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        
        {props.results.meanings.map(function (meaning, index) { 
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

