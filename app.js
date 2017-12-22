const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('hello Fiona!')
})

const server = app.listen(3030, function(){
	const host = server.address().address
	const port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
	
})
