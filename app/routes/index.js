'use strict'

const fs = require('fs')
const router = require('express').Router()

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/api/:year', (req, res) => {
	let reqJSON = JSON.parse(fs.readFileSync('./app/data/' + req.params.year + '_sentiment.txt', 'utf8'))
	res.json(reqJSON)
})

router.get('/api/meta/:year', (req, res) => {
	let reqJSON = JSON.parse(fs.readFileSync('./app/data/' + req.params.year + '_meta.txt', 'utf8'))
	res.json(reqJSON)
})

module.exports = router