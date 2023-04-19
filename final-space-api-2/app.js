const request = require('postman-request');

const url = 'https://finalspaceapi.com/api/v0/characters/';

request({ url, json: true }, (error, response) => {
    if(error || response.body.error)
        console.log('Unable to connect to the server')
    else
        console.log(response.body)
})