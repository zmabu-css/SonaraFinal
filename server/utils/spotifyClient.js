const axios = require('axios');
require('dotenv').config(); // Load environment variables

const getSpotifyToken = async () => {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

    // Log the credentials
    console.log('Client ID:', client_id);
    console.log('Client Secret:', client_secret);

    const token_url = 'https://accounts.spotify.com/api/token';

    const response = await axios({
        method: 'post',
        url: token_url,
        params: {
            grant_type: 'client_credentials'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        }
    });

    return response.data.access_token;
};


const getTrackId = async (songName, token) => {
    const searchUrl = 'https://api.spotify.com/v1/search';

    const response = await axios.get(searchUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: songName,
            type: 'track',
            limit: 1
        }
    });

    if (response.data.tracks.items.length === 0) {
        throw new Error(`No tracks found for '${songName}'`);
    }

    return response.data.tracks.items[0].id; // Simplified for single result
};

const fetchFromSpotify = async (songs) => {
    console.log(`Fetching recommendation for songs: ${songs}`);

    const token = await getSpotifyToken();

    const trackPromises = songs.map(song => getTrackId(song, token));
    const seed_tracks = await Promise.all(trackPromises);

    const apiUrl = 'https://api.spotify.com/v1/recommendations';

    const response = await axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            seed_tracks: seed_tracks.join(','),
            limit: 1
        }
    });

    const recommendedTrack = response.data.tracks[0];
    const recommendedSong = {
        name: recommendedTrack.name,
        artist: recommendedTrack.artists[0].name,
        albumArt: recommendedTrack.album.images[0].url // Get album art URL
    };
    console.log(`Recommended Song from Spotify: ${recommendedSong.name} by ${recommendedSong.artist}`);
    return recommendedSong;
};

module.exports = { fetchFromSpotify };
