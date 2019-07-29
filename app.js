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

router.get('/store', function (req, res) {
    res.sendFile(path.join(__dirname + '/food court/store.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/food court/login.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/food court/signup.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/reservation', function (req, res) {
    res.sendFile(path.join(__dirname + '/food court/reservation.html'));
    //__dirname : It will resolve to your project folder.
});

//채린
router.get('/ans', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.email+', '+req.query.password)
});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
