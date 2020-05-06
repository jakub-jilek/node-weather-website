const request = require('request')

const forecast = (latitude, longitude , callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=df81ca0f53d2a024335cb6ec9af0d59c&query=' + latitude + ',' + longitude

    request({ url, json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out.' + 
            ' It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast