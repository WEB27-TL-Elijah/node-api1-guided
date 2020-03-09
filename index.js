// similar to import express from 'express'
const express = require('express') // npm i express
const shortid = require('shortid') // npm i shortid
const server = express()

let hubs = []
let lesson = []

server.use(express.json()) // <-- add this line

server.get('/', (req, res) => {
	res.status(200).json({ api: 'is running' })
})

server.post('/api/hubs', (req, res) => {
	// axios.post(/api/hubs, data) <-- the data shows up as the req.body on the server
	const hubInfo = req.body

	//validate that the hubInfo is correct before saving
	hubInfo.id = shortid.generate()

	hubs.push(hubInfo)

	res.status(201).json(hubInfo)
})

// create an endpoint to create Lessons
server.post('/api/lessons', (req, res) => {
	const lessonInfo = req.body
	//validate
	lessonInfo.id = shortid.generate()

	lesson.push(lessonInfo)

	res.status(201).json(lessonInfo)
})

// create the endpoint '/hello' that returns { hello: 'Web 27' }
server.get('/hello', (req, res) => {
	res.status(200).json({ hello: 'Web 27' })
})

const PORT = 5000
server.listen(PORT, () => console.log(`\n ** API on localhost:${PORT} ** \n`))
