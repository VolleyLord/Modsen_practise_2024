'use strict';

async function fetchAndProcessData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;  // successfull
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'Произошла ошибка при загрузке данных';  // not successful
    }
}

fetchAndProcessData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.log(error));
