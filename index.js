async function get_weather(weather_city) {
    let url = `http://api.weatherapi.com/v1/current.json?key=efd7bc1aefc140a6aec182805232207&q=${weather_city}&aqi=no`;
    let response = await fetch(url);
    console.log(`Статус ответа сервера: ${response.status}`);
    if (response.ok) {
        let weather = await response.json();
        return weather;
    } else {
        return console.log('Ошибка доступа');
    }
}

function add_weather() {
    let parent = document.querySelector('.weather-now__weather-block')
    let weather = document.createElement('div')
    weather.className='weather'
    weather.textContent = 'Погода тут'
    parent.before(weather)
    document.querySelector('.weather-now__weather-block').classList.add('weather-now__weather-block_hidden')
}
let weather_get_button = document.querySelector('.weather-now__weather-block')
weather_get_button.addEventListener('click',add_weather)
// let city = prompt('Введите город', 'Пермь');
// get_weather(city);

