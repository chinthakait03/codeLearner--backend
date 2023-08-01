var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to the SQLite database.');

    db.run(`CREATE TABLE codebook4 (
     
      title TEXT, 
      lesson TEXT
    )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        var insert = 'INSERT INTO codebook4 (title, lesson) VALUES (?, ?)';
        db.run(insert, ["log", "console.log('hello')"]);
      }
    });
    db.run(`CREATE TABLE codebook1 (
     
      title TEXT, 
      lesson TEXT
    )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        var insert = 'INSERT INTO codebook1 (title, lesson) VALUES (?, ?)';
        db.run(insert, ["warn", "console.warn('hello')"]);
      }
    });
    db.run(`CREATE TABLE codebook2 (
     
      title TEXT, 
      lesson TEXT
    )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        var insert = 'INSERT INTO codebook2 (title, lesson) VALUES (?, ?)';
        db.run(insert, ["error", "console.error('hello')"]);
      }
    });
    db.run(`CREATE TABLE codebook3 (
     
      title TEXT, 
      lesson TEXT
    )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        var insert = 'INSERT INTO codebook3 (title, lesson) VALUES (?, ?)';
        db.run(insert, ["alert", "alert('hello')"]);
      }
    });


  }
});

module.exports = db;
