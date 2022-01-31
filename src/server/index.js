const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const items = require('./items');
const search = require('./utils'); // custom function to handle filtering 

const app = express();

const port = process.env.PORT || 8080;

app.use(cors()); // used to handle cors 
app.use(bodyParser.json()); // used to parse json objects 
app.use(express.static('dist'));

//  handle list items and filter items
app.post('/api/items', (req, res) => {

if(req.body.key !== undefined){
    let input = req.body.key;
    let result= search(items,input);
    res.send({result})
} else {
    res.send({items})
}
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
