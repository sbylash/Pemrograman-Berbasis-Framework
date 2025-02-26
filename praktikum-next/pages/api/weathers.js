export default async function handler(req, res) {
    const response = await fetch('https://openweathermap.org/weathers');
    const products = await response.json();

    res.status(200).json(weathers);
}