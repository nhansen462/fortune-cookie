const fortunes = require('./fortunes.json')

const getFortune = () => {
    const rand = Math.floor(Math.random() * fortunes.length)
    return fortunes[rand]
}

module.exports = getFortune