// Example list of files (this should be fetched dynamically from your server)
const files = [
    { name: 'Document 1.txt', type: 'text', icon: '📄' },
    { name: 'Image 1.jpg', type: 'image', icon: '🖼️' },
    { name: 'Video 1.mp4', type: 'video', icon: '🎥' },
    { name: 'Audio 1.mp3', type: 'audio', icon: '🎵' },
];

// Function to display files in the container
function displayFiles() {
    const fileContainer = document.getElementById('file-container');
    fileContainer.innerHTML = ''; // Clear existing content

    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        const icon = document.createElement('div');
        icon.classList.add('file-icon');
        icon.textContent = file.icon;
        fileItem.appendChild(icon);

        const fileName = document.createElement('div');
        fileName.classList.add('file-name');
        fileName.textContent = file.name;
        fileItem.appendChild(fileName);

        const fileType = document.createElement('div');
        fileType.classList.add('file-type');
        fileType.textContent = file.type;
        fileItem.appendChild(fileType);

        // Append file item to the container
        fileContainer.appendChild(fileItem);
    });
}

// Call the function to display the files
displayFiles();
