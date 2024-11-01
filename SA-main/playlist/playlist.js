const form = document.getElementById('playlist-form');
const songNameInput = document.getElementById('song-name');
const playlistContainer = document.getElementById('playlist');

// Função para adicionar música
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const songName = songNameInput.value.trim();
    if (songName === "") return;

    const songElement = document.createElement('div');
    songElement.className = 'playlist-item';
    songElement.innerHTML = `
        <span>${songName}</span>
        <button class="remove-btn">Remover</button>
    `;

    playlistContainer.appendChild(songElement);
    songNameInput.value = '';

    // Função para remover música
    const removeBtn = songElement.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function() {
        playlistContainer.removeChild(songElement);
    });
});
