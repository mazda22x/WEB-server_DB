var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('test', {
    title: 'Express'
  });
});

module.exports = router;

/* var mass = [];
var i = 0; */
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('lab.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mylittle database.');
});

let select_sql = `SELECT id, login, pass FROM users
           ORDER BY id`;



db.serialize(function () {
  // db.run("CREATE TABLE lorem (info TEXT)");

  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  // for (var i = 0; i < 10; i++) {
  // stmt.run("Ipsum " + i);
  // }
  // stmt.finalize();

  /* db.each("SELECT id, login FROM users", function(err, row) {
    mass[i] = row.id + ": " + row.login + '\n' ;
    console.log(row.id + ": " + row.login);
    i++;

    });*/
});

var express = require('express');
var router = express.Router();
var count = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/test', function (req, res, next) {
  db.all(select_sql, [], function (err, rows) {
    if (err) {
      throw err;
    }
    mass = [];

    rows.forEach((row) => {
      mass.push(row.id + ": " + row.login + '\n');
      console.log(row);
    });
    count += 1;
    console.log(mass);
    res.render('test', {
      title: 'База данных',
      count: count,
      base: mass
    });
  });
});


router.post('/test', (req, res, next) => {
  let text = req.body;
  if (text) {
    count += 1;
    answer.status = 'success';
    answer.text = `${count}: ${text}`

    res.json(answer);
  } else {
    answer.status = 'error';
    answer.text = 'Something wrong with name or text';

    res.status(500).json(answer);
  }
})

module.exports = router;