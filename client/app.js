// Function to generate the rain effect
const makeItRain = function() {
    // Clear out the existing rain elements
    document.querySelectorAll('.rain').forEach(rain => rain.innerHTML = '');

    let increment = 0;
    let drops = '';
    let backDrops = '';

    // Generate new rain elements with randomized positions and delays
    while (increment < 100) {
        const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += randoFiver;
        drops += `
            <div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
            </div>`;
        backDrops += `
            <div class="drop" style="right: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
            </div>`;
    }

    // Append the generated rain elements to their respective containers
    document.querySelector('.rain.front-row').insertAdjacentHTML('beforeend', drops);
    document.querySelector('.rain.back-row').insertAdjacentHTML('beforeend', backDrops);
}

// Initialize the rain effect on page load
document.addEventListener('DOMContentLoaded', makeItRain);

// Event listener for the recommendation button
document.getElementById('recommendBtn').addEventListener('click', function() {
    const song1 = document.getElementById('song1').value;
    const song2 = document.getElementById('song2').value;
    const song3 = document.getElementById('song3').value;
    const recommendationText = document.getElementById('recommendation-text');

    // Show loading state on the button
    document.getElementById('recommendBtn').textContent = 'Finding Recommendation...';
    recommendationText.innerHTML = ''; // Clear the current recommendation

    fetch('http://localhost:3000/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ songs: [song1, song2, song3] })
    })
    .then(response => response.json())
    .then(data => {
        // Check if valid recommendation data is received
        if (data.name && data.artist && data.albumArt) {
            recommendationText.innerHTML = `
                <div>
                    <h3>${data.name}</h3>
                    <p><strong>${data.artist}</strong></p>
                    <img src="${data.albumArt}" alt="Album Art">
                </div>
            `;
            recommendationText.style.display = 'block'; // Show new recommendation
        } else {
            recommendationText.textContent = 'No recommendation found.';
        }

        // Reset the button text after fetching the recommendation
        document.getElementById('recommendBtn').textContent = 'Get Recommendation';
    })
    .catch(error => {
        console.error('Error:', error);
        recommendationText.textContent = 'Error fetching recommendation.';
        // Reset the button text in case of error
        document.getElementById('recommendBtn').textContent = 'Get Recommendation';
    });
});

// Smooth scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
