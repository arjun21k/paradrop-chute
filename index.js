const express= require('express')
const app = express()

app.get('/',function(req,res) {
	res.send('<h1>Hello World</h1><p> This is a sample chute by Arjun and Bidyut</p>')
})

app.listen(3000, function(){
	console.log('Example app listening on port 3000')

})

