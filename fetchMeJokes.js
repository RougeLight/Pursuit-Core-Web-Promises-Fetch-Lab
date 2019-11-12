document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", getIt)
})

const getIt = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
       
    .then(response => {
        //recieves http response and initiates parsing of response data
            return response.json();
        })
        .then(dataObj => {
        //recieves the parsed data after successful extractions/conversions
            displayJoke(dataObj.setup)
        //.setup is the key (punch-line) 
        })
        .catch(err => {
            console.log("Not found", err)
        })
    displayJoke = (joke) => {
        let prevJoke = document.querySelector('p')
        if (!prevJoke) {
            let tellJoke = document.createElement(tellJoke);
            tellJoke.innerHTML = joke
            document.body.appendChild(tellJoke);
        } else {
            let newJoke = document.createElement('p')
            newJoke.innerHTML = joke
            prevJoke.parentNode.replaceChild(newJoke, prevJoke)
        }
    }
    answer = (answer) => {
        let jokePunchline = document.getElementById('answer')
        jokePunchline.innerText = answer.punchline
    }
}