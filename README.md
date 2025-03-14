# Movie Database Using PostgreSQL

## Project Overview

This project is a simple Movie Database application that allows users to manage movies and their associated reviews. The core functionality is built around creating, retrieving, and deleting movies and reviews from a PostgreSQL database.

The project includes two main components: a `movies` table to store movie names and a `reviews` table to store user reviews linked to each movie by a `movie_id`. Users can interact with the application through API routes to perform CRUD operations.

Users can:
- Create a new movie and store its name in the `movies` table.
- Delete movies from the database, including all related reviews.
- View a list of all movies and all reviews with their associated movie data.
- Add reviews for movies, which are stored in the `reviews` table and linked to the corresponding movie.

## Table of Contents

- [Mock Up](#mock-up)
- [Instructions](#instructions)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Additional Resources](#additional-resources)

## Mock Up

The databse created will have the following structure:

![The database schema includes a movies table and a reviews table, linked by the movie id](./assets/image_1.png)

## Instructions

1. Clone the repository to your local machine.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install all required dependencies.
4. Set up your PostgreSQL database by following the instructions in the provided database schema.
5. Seed your database with initial data.
6. Start the application by running `npm run start`.
7. Use Insomnia to test the routes:
    - `GET /api/movies` to see a list of all movies.
    - `GET /api/movie-reviews` to see a list of all reviews with associated movie data.
    - `POST /api/add-movie` to add a new movie.
    - `DELETE /api/movie/:id` to delete a movie.

## Key Features

- Add and delete movies with associated reviews.
- View a list of movies and their associated reviews.
- Store and retrieve movie data in a PostgreSQL database.
- Use Express.js for API routing and PostgreSQL for data management.

## Technology Stack:

This application needs the following tools and technologies to operate:
- **JavaScript**: For handling the backend logic and routing.
- **Insomnia**: A tool to test and interact with the API endpoints.
- **Express**: The server-side framework used to handle API requests.
- **pg**: The Node.js package used to interact with the PostgreSQL database.
- **PostgreSQL**: The relational database used to store movie and review data.

## Additional Resources

Guide to Using The pg Package: [Documentation on 'pg' Package](https://node-postgres.com/)

How to Perform Joins in PostgreSQL: [PostgreSQL Joins Documentation](https://www.postgresql.org/docs/current/tutorial-join.html)

Documentation for Express.js Routing: [Express.js Routing Documentation](https://expressjs.com/en/guide/routing.html)

Guide to Using Insomnia for Testing your API Routes: [Insomnia Documentation](https://support.insomnia.rest/category/152-using-insomnia)
