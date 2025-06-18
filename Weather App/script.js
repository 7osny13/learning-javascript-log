const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const errorMsg = document.getElementById('errorMsg');
const loading = document.getElementById('loading');
const weatherCard = document.getElementById('weatherCard');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

const url = 'https://api.openweathermap.org/data/2.5/weather';


const getWeather = async () => {
    errorMsg.textContent = '';
    weatherCard.classList.add('hidden');
    loading.classList.remove('hidden');
    
    const enteredCity = cityInput.value;
    const key = 'b589b8e1125e16fdecfef3bed3dfc280';
    try{

        if(!cityInput.value) {
            throw new Error('please enter city name');
        }
        let response = await fetch(`${url}?q=${enteredCity}&appid=${key}&units=metric`);
        if(!response.ok){
            throw new Error(`City not found `);
        }
        loading.classList.add('hidden')
        let data = await response.json();
        weatherCard.classList.remove('hidden'); 
        cityName.textContent = data.name;
        temperature.textContent = `${data.main.temp} °C`
        if(	data.weather[0].main == 'Clouds'){
            description.textContent = `${data.weather[0].description} 🌧️ `;
        } else if(data.weather[0].main == 'Clear'){
            description.textContent = `${data.weather[0].description} ☀️  `;
        } else if(data.weather[0].main == 'Rain') {
            description.textContent = `${data.weather[0].description}  🌩️  `;
        } 
        cityInput.value = '';
    } catch(err) {
        errorMsg.textContent = err.message;
        loading.classList.remove('hidden');
    }
}

getWeatherBtn.addEventListener('click' , getWeather);