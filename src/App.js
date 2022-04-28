import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer className="App-footer">
          <a href="https://github.com/anatick/anatick" 
          target="_blank" 
          rel="noopener noreferrer">
            Open-source code </a> 
            by Ana Carraça
        </footer>
      </div>
    </div>
  );
}


