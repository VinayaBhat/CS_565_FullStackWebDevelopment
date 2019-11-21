const expressobj = require('express');
const appobject = expressobj(); // Appobject has many methods
const path = require('path');
const bodyparser = require('body-parser');


appobject.use(bodyparser.urlencoded({ extended: false }));

appobject.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

appobject.post('/submit', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write("Name : "+req.body.Name +"\n");
    res.write("Email : "+req.body.Email +"\n");
    res.write("Comment : "+req.body.Comment+"\n");
    res.end();
});

appobject.listen(8080);
console.log("Server running on http://localhost:8080/");

