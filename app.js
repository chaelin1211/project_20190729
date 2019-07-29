const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/food court/main.html'));
    //__dirname : It will resolve to your project folder.
});

//채린
router.get('/ans', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.email+', '+req.query.password)
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
