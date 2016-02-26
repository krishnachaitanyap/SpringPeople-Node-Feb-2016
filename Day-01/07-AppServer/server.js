if (request is for static resource [.html, .xml, .js, .png], path.extname){
	handle it like a static web server
} else if (request is for '/calculator' and req.method === 'GET'){
	url.parse(req.url, true)
	invoke the calculator accordingly
	write the result in the response
} if (request is for '/calculator' and req.method === 'POST'){
	url.parse(req.url, true)
	treat the req obj as a stream and read the data from req stream and use querystring.parse to parse the data
	invoke the calculator accordingly
	write the result in the response
} else {
	404
}



localhost:8080/calculator?op=add&n1=100&n2=200