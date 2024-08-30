const fs = require('fs').promises;

// Function to read a file
function readFile(filePath) {
    return fs.readFile(filePath, 'utf8');
}

// Function to process file content
function processFileContent(content) {
    return new Promise((resolve, reject) => {
        try {
            // For this example, let's convert the content to uppercase
            const processedContent = content.toUpperCase();
            resolve(processedContent);
        } catch (error) {
            reject(error);
        }
    });
}

// Main function to execute the tasks
async function main() {
    const filePath = 'example.txt';

    try {
        const data = await readFile(filePath);
        const processedContent = await processFileContent(data);
        console.log('Processed Content:', processedContent);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Run the main function
main();
