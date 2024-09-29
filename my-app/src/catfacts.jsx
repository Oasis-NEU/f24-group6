const catFactUrl = 'https://cat-fact.herokuapp.com';
// Replace 'cat fact board' with what the id for it is in html.
const outputElement = document.getElementById('cat fact board');
    
/**
 * Places data fetched from the Cat-Fact API onto the 'Cat Fact Board'.
 * Returns an error message if something goes wrong.
 */
function getCatFact() {
      fetch(catFactUrl)
        // .then handles asynchronous response from the server.
        // response.json() parses through the JSON data fetched. 
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong with the network response.")
            }
            return response.json();
        } )
        // Places returned data onto the "Cat Fact Board".
        .then(data =>  {
            outputElement.textConent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
    };
  