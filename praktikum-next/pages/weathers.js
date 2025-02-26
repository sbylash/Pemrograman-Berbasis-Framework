import { useState, useEffect } from 'react';

const Weathers = () => {
    const [weather, setWeather] = useState({
        location: { name: '' },
        current: { temp_c: '', condition: { text: '' } }
    });

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=c84fbf93ba314909b0825806252602&q=London&aqi=yes');
            const data = await response.json();
            setWeather(data);
        };

        fetchWeather();
    }, []);

    return (
        <div>
            <h1>Data Cuaca</h1>
            <p>Kota: {weather.location.name}, {weather.location.country}</p>
            <p>Suhu: {weather.current.temp_c}°C</p>
            <p>Cuaca: {weather.current.condition.text}</p>
            <p>Kelembapan: {weather.current.humidity}%</p>
            <p>Kecepatan Angin: {weather.current.wind_kph} km/h ({weather.current.wind_dir})</p>
            <p>Tekanan Udara: {weather.current.pressure_mb} mb</p>
        </div>
    );
};

export default Weathers;