const { fetchFromSpotify } = require('../utils/spotifyClient');

const getRecommendation = async (req, res) => {
    const { songs } = req.body;

    try {
        console.log(`Received song list: ${songs}`);
        if (!Array.isArray(songs) || songs.length < 3) {
            throw new Error('Songs list is invalid or too short');
        }

        const recommendation = await fetchFromSpotify(songs);
        console.log(`Recommendation received: ${recommendation.name} by ${recommendation.artist}`);
        res.status(200).json(recommendation);
    } catch (error) {
        console.error(`Error fetching recommendation: ${error.message}`, error);
        res.status(500).json({ error: 'Failed to fetch recommendation' });
    }
};

module.exports = { getRecommendation };
