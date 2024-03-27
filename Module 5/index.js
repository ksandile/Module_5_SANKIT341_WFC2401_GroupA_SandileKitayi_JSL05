// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {};
    for (const guardian in guardians) {
        // filter songs based on the guardian preference genre
        const playlist = songs.filter(song => song.genre === guardians[guardian]);
        playlists[guardian] = playlist
    }
    console.log(playlists)
    // Use the map() function to create playlists for each Guardian
    const guardianPlaylists = Object.keys(playlists).map(guardian => ({
        [guardian]: playlists[guardian]
    }));

    return guardianPlaylists;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);

// Display the playlists for each Guardian
playlists.forEach(playlistObj => {
    const guardian = Object.keys(playlistObj)[0]; // Get the Guardian's name
    const playlist = playlistObj[guardian]; // Get the playlist array
    console.log(`${guardian}'s Awesome Mix:`);
    playlist.forEach(song => {
        console.log(`${song.title} - ${song.artist}`);
    });
    console.log("\n");
});

// Get the container where you want to display the playlists
const container = document.getElementById('playlists');

// Display the playlists for each Guardian
playlists.forEach(playlistObj => {
    const guardian = Object.keys(playlistObj)[0]; // Get the Guardian's name
    const playlist = playlistObj[guardian]; // Get the playlist array
    
    // Create a heading for the Guardian's playlist
    const heading = document.createElement('h2');
    heading.textContent = `${guardian}'s Awesome Mix:`;

    // Create an unordered list to display the songs
    const list = document.createElement('ul');
    playlist.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = `${song.title} - ${song.artist}`;
        list.appendChild(listItem);
    });

    // Append the heading and list to the container
    container.appendChild(heading);
    container.appendChild(list);
});