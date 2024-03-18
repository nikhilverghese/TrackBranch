const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = process.env.Port || 3000;

const db = new sqlite3.Database('./db/TrackBranch.db', err => {
    if(err) {
        console.log(err.message);
    }
    console.log('Connected to TrackBranch Database');
});

app.use(express.json());

app.get('/db', (req, res) => {
    db.all('SELECT * FROM Project JOIN ProjectFile ON Project.projectFile_id = projectFile.projectFile_id JOIN filters ON Project.filters_id = filters.filters_id', 
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.json(rows);
      }
    });
  });

  app.get('/db/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const sql = `
        SELECT *
        FROM Project 
        JOIN ProjectFile ON Project.projectFile_id = ProjectFile.projectFile_id 
        JOIN filters ON Project.filters_id = filters.filters_id 
        JOIN Genre ON filters.genre_id = Genre.genre_id 
        WHERE Genre.genre_name = ? COLLATE NOCASE
    `;
    console.log("WHERE Genre.genre_name = " + genre)
    db.all(sql, [genre], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
        } else {
            res.json(rows);
        }
    });
});

  

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });