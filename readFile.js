const fs = require('fs');  // Import the 'fs' module to handle file operations

// Log a message to indicate the file is being read
console.log("Attempting to read the file...");

// Use 'fs.readFile()' for asynchronous (non-blocking) file reading
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    // Check for an error (e.g., file not found)
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    // Log a message if the file was read successfully
    console.log("File read successfully!");

    // Output the content of the file to the terminal
    console.log(data);
});
