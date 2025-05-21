# Spotify Dashboard

A Vue 3 web application that displays your Spotify Top 50 tracks. Authenticate with your Spotify account, search your top tracks, and view details in a clean dashboard UI.

## Features

- Spotify OAuth2 authentication with PKCE
- View your top 50 Spotify tracks
- Search tracks by name, artist, or album
- Responsive and modern UI using Vuetify
- Click a song to open it directly in Spotify

## Screenshots

<div align="center">
  <div>
    <img src="https://github.com/user-attachments/assets/768ef3e2-631c-4d3e-acf3-6ea280868ec9">
  </div>
  <div>
    <img src="https://github.com/user-attachments/assets/39f79b08-5462-467f-9337-1eb26128745e">
  </div>
  <div>
    <img src="https://github.com/user-attachments/assets/2b39c61a-bccc-47cc-b7c9-6b13bdd4a138">
  </div>
  <div>
    <img src="https://github.com/user-attachments/assets/f0bf015c-8d3a-4d6a-9be2-0246907b85e7">
  </div>
</div>

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Spotify Developer account ([create an app here](https://developer.spotify.com/dashboard/applications))

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/andrejkoller/spotify-top-50-songs-dashboard.git
   cd spotify-top-50-songs-dashboard
   ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Configure environment variables** (Create a .env.local file in the directory and add from below)

   ```sh
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:8000/callback
   ```

4. **Run the development server**

   ```sh
   npm run dev
   ```
   
