const catFactUrl = 'https://catfact.ninja/fact?max_length=100';
import {useState, useEffect} from 'react';    

const boardStyle = {
    width: "200px",
    height: "200px",
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "${fontSize}px"
}

/**
 * Fetches data from the Cat-Fact API and displays it on the screen.
 * Returns an error message if something goes wrong.
 * Note: Because of React.StrictMode, this function is called twice.
 * This behavior should stop in production mode. 
 */
export default function CatFact() {
     const [fact, setFact] = useState([])
     useEffect (() => {
      fetch(catFactUrl)
        .then(response => response.json())
        .then(data => setFact(data.fact))
        .catch(error => console.log("Error:", error));
    }, []);

    return (
        <div id ='factText' style={boardStyle}>
            {fact}
        </div>
    );

}
