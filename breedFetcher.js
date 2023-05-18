const request = require('request')

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
    if (error) {
        console.log('Request error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.log('Request failed with status code:', response.statusCode);
        return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
        console.log('Breed not found. ')
        return
    }
    const breed = data[0];
    console.log(breed.description);
});