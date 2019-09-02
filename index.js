const http = require('http') //important

const server = http.createServer((request, response) => {
	switch (request.url) {
		case '/':
			response.write(`
		<div style="background-color: aliceblue; height: 100vh; width:100%">
		<h1 style="text-align: center; padding-top: 5%;">Welcome</h1>
		<ul style="text-align: center; list-style-type: none;display: flex; justify-content: flex-end; margin-right: 10%;">
		<li style="margin: auto 1%;"><a href="/about">About</a></li>
		<li style="margin: auto 1%;"><a href="/fun">Fun fact</a></li>
		</ul>
		</div>
		`)
			response.end()
			break;
		case '/about':
			response.write(`
		<div style="background-color: aliceblue; height: 100vh; width:100%">
		<h1 style="text-align: center; padding-top: 5%;">About</h1>
		<ul style="text-align: center; list-style-type: none;display: flex; justify-content: flex-end; margin-right: 10%;">
		<li style="margin: auto 1%;"><a href="/">Home</a></li>
		<li style="margin: auto 1%;"><a href="/fun">Fun fact</a></li>
		</ul>
		</div>
		`)
			response.end()
			break;

		case '/fun':
			response.write(`
		<div style="background-color: aliceblue; height: 100vh; width:100%">
		<h1 style="text-align: center; padding-top: 5%;">Fun fact</h1>
		<ul style="text-align: center; list-style-type: none;display: flex; justify-content: flex-end; margin-right: 10%;">
		<li style="margin: auto 1%;"><a href="/">Home</a></li>
		<li style="margin: auto 1%;"><a href="/about">About</a></li>
		</ul>
		</div>
		`)
			response.end()
			break;


		default:
			break;
	}
})


// const server  = http.createServer( (request, response) =>{
// 	if (request.url === '/') {
// 		//console.log(request)
// 	response.write(`<h1>Hola</h1>`) //write this
// 	response.end() //and End
// 	} else if (request.url === '/about') {
// 		//console.log(request)
// 	response.write(`<h1>Estás en About</h1>`) //write this
// 	response.end() //and End
// 	}
// })

// server.listen(8728, ()=>{
// 	console.log(`corriendo en puerto: 8728`)
// })



console.log(`Hello from Script ¯\\_(ツ)_/¯ -- using Nodemon`)