// const file = require('./../sample3.html')
const path = require('path')

module.exports = {
    test: (req, res) => {
        res.sendFile(path.join(__dirname, 'sample4.html'))
    }
}