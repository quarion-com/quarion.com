var app = require('express')()
var hbs = require('express-handlebars')

app.cache = {}

//View engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'page.hbs' }));
app.set('view engine', 'hbs');

app.get('/favicon.ico', function (req, res, next) { res.sendStatus(404) })

//Response
app.all('*', function (req, res) {
  var p = req.path.substring(1)
  if (!p) p = 'index'
    
  res.render(p)
})

app.listen(80)