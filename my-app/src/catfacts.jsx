const catFactUrl = 'https://catfact.ninja/fact';
import {useState, useEffect} from 'react';    


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
        <div>
            <p>{fact}</p>
        </div>
    );

}
