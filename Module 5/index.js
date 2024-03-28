// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop", youtubeLink: "https://www.youtube.com/watch?v=NrI-UBIB8Jk" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock", youtubeLink: "https://www.youtube.com/watch?v=JFDj3shXvco" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop", youtubeLink: "https://www.youtube.com/watch?v=DGDyAb6pePo" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock", youtubeLink: "https://www.youtube.com/watch?v=AZQxH_8raCI" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock", youtubeLink: "https://www.youtube.com/watch?v=K2ws6vMFF3c" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop", youtubeLink: "https://www.youtube.com/watch?v=TazHNpt6OTo" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B", youtubeLink: "https://www.youtube.com/watch?v=dguz0IsCuKU" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B", youtubeLink: "https://www.youtube.com/watch?v=ABfQuZqq8wg" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock", youtubeLink: "https://www.youtube.com/watch?v=bc0KhhjJP98" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop", youtubeLink: "https://www.youtube.com/watch?v=STugQ0X1NoI" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock", youtubeLink: "https://www.youtube.com/watch?v=DyMMEmwFQUE" },
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

// Get the container where I want to display the playlists
const container = document.getElementById('playlists');

// Display playlists for Star-Lord, Gamora, and Drax in the first row
['Star-Lord', 'Gamora', 'Drax'].forEach(guardian => {
    const playlistObj = playlists.find(obj => Object.keys(obj)[0] === guardian);
    const playlist = playlistObj[guardian];
    displayPlaylist(guardian, playlist, container);
});

// Display playlists for Rocket and Groot in the second row
['Rocket', 'Groot'].forEach(guardian => {
    const playlistObj = playlists.find(obj => Object.keys(obj)[0] === guardian);
    const playlist = playlistObj[guardian];
    displayPlaylist(guardian, playlist, container);
});

// Function to display playlist for a Guardian
function displayPlaylist(guardian, playlist, container) {
    // Create a div for the playlist
    const playlistDiv = document.createElement('div');
    playlistDiv.classList.add('playlist-column');

    // Create a heading for the playlist
    const heading = document.createElement('h2');
    heading.textContent = `${guardian}'s Awesome Mix:`;

    // Create an unordered list to display the songs
    const list = document.createElement('ul');
    playlist.forEach(song => {
        const listItem = document.createElement('li');
        const titleLink = document.createElement('a'); 
        titleLink.href = song.youtubeLink;
        titleLink.target = "_blank";
        titleLink.textContent = song.title; 
        listItem.appendChild(titleLink);
        listItem.innerHTML += ` - ${song.artist}`;
        list.appendChild(listItem);
    });

    // Append the heading and list to the playlist div
    playlistDiv.appendChild(heading);
    playlistDiv.appendChild(list);

    // Append the playlist div to the container
    container.appendChild(playlistDiv);
}