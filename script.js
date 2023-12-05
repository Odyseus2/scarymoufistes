let player;

function onYouTubeIframeAPIReady() {
    // Array of video IDs
    const videoIds = [
        "BRSkRlPa5_E?si=QZxUN8FRA_jXI7wz",
        "_VdTDnzD4P0?si=IA0TCB20uq_c6ArV",
        "nuzSoyWApUk?si=x3nckD2hOKl70FAo"
    ];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * videoIds.length);

    // Create a YouTube player
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoIds[randomIndex],
        events: {
            'onReady': onPlayerReady,
            // You can add more events if needed
        },
    });
}

function onPlayerReady(event) {
    // You can do something when the player is ready, if necessary
}

// Handle API errors
function onPlayerError(event) {
    console.error("Error:", event.data);
}