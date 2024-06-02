# SONARA ♪ - Music Recommender System

## Video Demo
https://github.com/zmabu-css/SonaraFinal/assets/121013977/8a079ecb-1d1e-456e-877f-3517d17ce18a

## Overview
**SONARA ♪** is a music recommendation system designed to help you discover new music based on your favorite songs. Simply input your favorite tracks, and SONARA will suggest a new song for you to explore. The user interface is inspired by Spotify's sleek design, with a dynamic rain effect on the landing page to enhance the visual experience.

## Features
- Discover new music based on your favorite tracks.
- Sleek and modern design inspired by Spotify.
- Dynamic rain effect on the landing page for an immersive experience.
- Easy to navigate and user-friendly interface.

## Technologies Used
- **Frontend**: 
  - HTML
  - CSS
  - JavaScript
- **Backend**: 
  - Node.js
  - Express.js
- **APIs**: 
  - Spotify Web API
- **Dependencies**:
  - `axios`: For making HTTP requests.
  - `body-parser`: For parsing incoming request bodies.
  - `dotenv`: For managing environment variables.

## Setup Instructions

### Prerequisites
1. **Node.js**: Ensure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation Steps
1. **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/sonara-music-recommendation.git
    cd sonara-music-recommendation
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Set up environment variables**
    - Create a `.env` file in the root directory.
    - Add your Spotify API credentials in the `.env` file:
      ```env
      SPOTIFY_CLIENT_ID=your_spotify_client_id
      SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
      ```

4. **Run the server**
    ```sh
    node server/app.js
    ```

5. **Open your browser**:
    - Navigate to `http://localhost:3000` to interact with SONARA ♪.

## How to Use
1. **Navigate to the landing page**: You'll see a dynamic rain effect along with a welcoming message.
2. **Try It Now!**: Click the "TRY IT NOW" button to go to the music recommendation system section.
3. **Enter Your Favorite Songs**: Input up to three of your favorite songs along with their artists for better accuracy.
4. **Get Recommendation**: Click on "Get Recommendation" to discover a new track recommended just for you.
5. **Explore Further**: If you'd like to understand how the system works or get more details, navigate to the "How It Works" section.

## Contributions
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue on GitHub.

## Contact
For any questions or feedback, feel free to reach out to zmabu@uw.edu.

---

Enjoy discovering new music with SONARA ♪!
