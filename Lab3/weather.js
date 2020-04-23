
function windDirection(degree)
{
    const circle = (degree + 22.5) % 360;
    if (circle < 45) return "С"
    else if (circle < 90) return "СВ"
    else if (circle < 135) return "В"
    else if (circle < 180) return "ЮВ"
    else if (circle < 225) return "Ю"
    else if (circle < 270) return "ЮЗ"
    else if (circle < 315) return "З"
    else return "СЗ";
}

fetch('https://api.openweathermap.org/data/2.5/weather?lang=ru&q=Moscow&appid=d194c5a4457d9146180953f9de89a906')
.then(function (resp) { return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.name').textContent = data.name;
    document.querySelector('.temp').innerHTML =  Math.round(data.main.temp - 273) + '&deg;' + 'C';
    document.querySelector('.desc').textContent = 'Сегодня - ' + data.weather[0]['description'];
    document.querySelector('.feels').innerHTML = 'Ощущается как: ' + Math.round(data.main.feels_like - 273) + '&deg;' + 'C';
    document.querySelector('.minTemp').innerHTML = 'Минимальная температура: ' + Math.round(data.main.temp_min - 273) + '&deg;' + 'C';
    document.querySelector('.maxTemp').innerHTML = 'Максимальная температура: ' + Math.round(data.main.temp_max - 273) + '&deg;' + 'C';
    document.querySelector('.wind').innerHTML = 'Ветер: ' + data.wind.speed + ' м/с ' + windDirection(data.wind.deg);
    document.querySelector('.pressure').innerHTML = 'Давление: ' + Math.round(data.main.pressure * 0.750062) + ' мм рт. ст.';
    document.querySelector('.humidity').innerHTML = 'Влажность: ' + data.main.humidity + '%';
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function () {
 
});