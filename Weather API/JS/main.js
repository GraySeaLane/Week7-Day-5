const getData = async (cityName) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=549576cfed285c6a6842db5452e59eba&units=imperial`);
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

const getImage = async (cityName) => {
    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=LAObrDDjugZcM40lNoWakaOKD8xG4m6xiuXyOKr596o&query=${cityName}`);
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};

const createList = (cityName, description, tempMax, tempMin, humidity, wind, imageUrl) => {
    const html = `<div class="card mt-3 mb-3" style="width: 20rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">${cityName}'s weather is ${description}</li>
            <li class="list-group-item text-center">The high will be ${tempMax.toFixed(0)}°</li>
            <li class="list-group-item text-center">The low will be ${tempMin.toFixed(0)}°</li>
            <li class="list-group-item text-center">The humidity is ${humidity}%</li>
            <li class="list-group-item text-center">The wind blows at ${wind.toFixed(0)} mph</li>
        </ul>
        <div class="card-body text-center">
            <img src="${imageUrl}" alt="City Image" style="max-width: 100%;">
        </div>
    </div>`;
    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html);
};

const createImage = (photo) => {
    
    document.querySelector('.image-container').innerHTML = html;

};

const loadData = async (event) => {
    event.preventDefault();
    let queryCity = document.querySelector("#city-name").value;
    try {
        const getCityData = await getData(queryCity);
        const getImages = await getImage(queryCity);
        createList(queryCity, getCityData.weather[0].description, getCityData.main.temp_max, getCityData.main.temp_min, getCityData.main.humidity, getCityData.wind.speed, getImages.results.length > 0 ? getImages.results[0].urls.regular :'');
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
};

const clearData = () => {
    document.querySelector('.weather-list').innerHTML = '';
    document.querySelector('.image-container').innerHTML = ''; // Clear the image container
};
//test rain
const rainLife = () =>{
    const water = document.createElement
    (`div`);
    water.classList.add(`water`);
    water.innerText = "💧";
    water.style.left = Math.random() *
    100 + "vw";
    document.body.appendChild(water);

    setTimeout(()=>{
        water.remove();
    },5000);
}
setInterval(rainLife, 100);

// setTimeout(rainLife);