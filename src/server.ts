import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a movie
app.post('/api/new-movie', ({ body }, res) => {
  const sql = `INSERT INTO movies (movie_name)
              VALUES ($1)`;
  const params = [body.movie_name];

  pool.query(sql, params, (err, _result) => {
    if (err) {
      res.status(400).json({error: err.message});
      return;
    }
    res.json({
      message: 'Success!',
      data: body
    });
  });
});

// Read all movies
app.get('/api/movies', (_req, res) => {
 
});

// Delete a movie
app.delete('/api/movie/:id', (req, res) => {
 
});

// Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/movie-reviews', (_req, res) => {
  
});

// BONUS: Update review
app.put('/api/review/:id', (req, res) => {
 
});

// Default response for any other request (Not Found)
app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
