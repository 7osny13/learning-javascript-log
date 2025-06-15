const getJokeBtn = document.getElementById('getJokeBtn');
const jokeBox = document.getElementById('jokeBox');
const jokeUrl = 'https://official-joke-api.appspot.com/random_joke';



const getJoke = () => {
    fetch(jokeUrl)
    .then(res => res.json())
    .then(data => {
        jokeBox.textContent = data.setup;
        setTimeout(() =>{
            jokeBox.textContent = data.punchline;
        } , 10000)
    }) 
    .catch(err => {
        alert(err);
    })
}

getJokeBtn.addEventListener('click' , getJoke);