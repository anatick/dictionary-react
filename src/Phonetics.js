import React from "react";
import "./Phonetics.css";



export default function Phonetics (props) {
 if (props.phonetics) {
   return (
     <div className="Phonetic">
        
        <a 
        href={props.phonetics.audio} 
        target="_blank" 
        rel="noopener noreferrer"
        > 
        {" "}
        Listen
       </a>
       <span className="phonetic-text">
         {" "} {props.phonetics.text}
        </span>
     </div>
   );
  }
 }
