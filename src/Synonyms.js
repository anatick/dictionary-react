import React from "react";

export default function Synonyms(props){
  if(props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h5>Synonyms:</h5>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else return null;
}