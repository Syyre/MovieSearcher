# Movie Explorer 🎬

A React application that fetches data from [The Movie Database (TMDb)](https://www.themoviedb.org/) API to display the latest popular movies and provide a search experience.

## Features

- Browse the latest popular movies with posters and details
- Search movies with **debounced input** for optimized performance
- **Appwrite backend integration**:
  - Tracks how many times each movie has been searched
  - Displays trending movies based on stored search counts

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Appwrite (Database + SDK)
- **External API:** TMDb API
