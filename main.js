const root = document.getElementById('container');
const btn = document.querySelector('button');
const wrapper = document.querySelector('.text');

btn.addEventListener('click', () => { fetchQuote(BASE_URL) })

const BASE_URL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const API_KEY = 'xxDePq23V9QiLgPowVqoYA==uQwWky8pzy9jAz7q';

function fetchQuote(url) {
    return fetch(url, {
            headers: {
                'X-Api-Key': API_KEY
            }
        }).then(
            response => {
                if (!response.ok) {
                    throw new Error(response.status)
                }
                return response.json()
            }
        ).then(data => {
            renderResult(data)
        })
        .catch(error => error.message)
}



function renderResult(data) {
    wrapper.innerHTML = "";
    const text = document.createElement('p');
    text.innerText = data[0].quote;
    wrapper.appendChild(text)

}