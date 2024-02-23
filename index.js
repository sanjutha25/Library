let express = require('express');
let book_routes = require('./Routes/bookroutes')
let app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname+'/views'))
app.use('/books',book_routes)
app.listen(8080)