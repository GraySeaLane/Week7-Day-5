
const getData = async (cityName) => {
    // await will wait for the axios promise to fulfill before setting response variable and moving on
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=549576cfed285c6a6842db5452e59eba&units=imperial`)
    console.log(response)
    console.log(response.data)
    return response.data
}

// function to create and insert html for each ranger object from the api call
//I know I need to change these out.......
const createList = (description, tempMax, tempMin, humidity, wind) => {
    const html = `<div class="card mt-3 mb-3" style="width: 20rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">Today's weather is ${description}</li>
    <li class="list-group-item text-center">The high will be ${tempMax.toFixed(0)}°</li>    
    <li class="list-group-item text-center">The low will be ${tempMin.toFixed(0)}°</li> 
    <li class="list-group-item text-center">The humidity is ${humidity}%</li>
    <li class="list-group-item text-center">The wind blows at ${wind.toFixed(0)} mph</li>
    </ul>
</div>`;
    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html)
};


const loadData = async (event) => {
    event.preventDefault()
    let queryCity = document.querySelector("#city-name").value
    
    const getCityData = await getData(queryCity)


    createList(getCityData.weather[0].description, getCityData.main.temp_max, getCityData.main.temp_min, getCityData.main.humidity, getCityData.wind.speed)
}

const clearData = () => {
    document.querySelector('.weather-list').innerHTML = '';
}
